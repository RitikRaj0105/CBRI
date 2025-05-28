import React from "react";

const UploadImage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="http://localhost:8501?mode=image"
        title="Upload Image"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
};

export default UploadImage;
