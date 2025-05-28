import os
import streamlit as st
import torch
import cv2
import numpy as np
import pandas as pd
from ultralytics import YOLO
from PIL import Image

# Function to save detection data
def save_detection_data(image, detection_data, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    image.save(output_path)
    csv_path = output_path.replace('.jpg', '.csv')
    df = pd.DataFrame(detection_data, columns=['Class', 'Confidence', 'x1', 'y1', 'x2', 'y2'])
    df.to_csv(csv_path, index=False)

# Function to detect defects in image
def detect_defects_in_image(image, model):
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    elif image.mode == 'L':
        image = image.convert('RGB')

    image = np.array(image)
    results = model(image)
    detection_data = []

    for result in results:
        boxes = result.boxes.xyxy.cpu().numpy()
        labels = result.boxes.cls.cpu().numpy()
        confs = result.boxes.conf.cpu().numpy()

        for box, label, conf in zip(boxes, labels, confs):
            x1, y1, x2, y2 = map(int, box)
            class_name = model.names[int(label)]
            cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 3)
            cv2.putText(image, f"{class_name} ({conf:.2f})", (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
            detection_data.append([class_name, conf, x1, y1, x2, y2])

    return image, detection_data

# Function to detect defects in video
def detect_defects_in_video(video_path, model):
    cap = cv2.VideoCapture(video_path)
    stframe = st.empty()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        processed_image, _ = detect_defects_in_image(Image.fromarray(frame), model)
        stframe.image(processed_image, channels="RGB")
    cap.release()
    st.success("Video processing complete!")

# Function for live camera detection
def live_camera_detection(model):
    cap = cv2.VideoCapture(0)
    stframe = st.empty()
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        processed_image, _ = detect_defects_in_image(Image.fromarray(frame), model)
        stframe.image(processed_image, channels="RGB")
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()

# Main function to handle app flow
def main():
    print("Streamlit App Started")  # Debug print
    torch.multiprocessing.freeze_support()
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    st.write(f"Using device: {device}")

    # ✅ Absolute path to your trained model
    MODEL_PATH = "C:/Users/rraj8/CBRICSIR/cbri/backend/models/best.pt"

    try:
        model = YOLO(MODEL_PATH).to(device)
        st.success(f"✅ Model loaded successfully from {MODEL_PATH}")
    except Exception as e:
        st.error(f"❌ Error loading model: {e}")
        return

    st.title("🏗️ Building Defect Detection System")
    st.write("Upload an **image**, **video**, or use **live camera** to detect building defects using YOLOv8.")
    option = st.radio("Choose detection type:", ["📷 Image Detection", "🎥 Video Detection", "📹 Live Camera"])

    if option == "📷 Image Detection":
        uploaded_file = st.file_uploader("Upload an image...", type=["jpg", "png", "jpeg"])
        if uploaded_file is not None:
            image = Image.open(uploaded_file)
            st.image(image, caption="Uploaded Image", use_column_width=True)
            processed_image, detection_data = detect_defects_in_image(image, model)
            output_path = os.path.join("detections", f"detected_{uploaded_file.name}")
            save_detection_data(Image.fromarray(processed_image), detection_data, output_path)
            st.image(processed_image, caption="Detected Defects", use_column_width=True)
            st.success(f"✅ Detection complete! Data saved at {output_path}")

    elif option == "🎥 Video Detection":
        uploaded_video = st.file_uploader(
            "Upload a video...",
            type=["mp4", "avi", "mov", "mkv", "flv", "webm"],
            help="Drag and drop file here or click Browse files.",
            accept_multiple_files=False,
            label_visibility="visible"
        )
        if uploaded_video is not None:
            video_path = os.path.join("temp_videos", uploaded_video.name)
            os.makedirs("temp_videos", exist_ok=True)
            with open(video_path, 'wb') as f:
                f.write(uploaded_video.read())
            st.video(video_path)
            detect_defects_in_video(video_path, model)

    elif option == "📹 Live Camera":
        live_camera_detection(model)

# Run the app
if __name__ == "__main__":
    main()
