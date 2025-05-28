import React, { useState } from "react";
import "./Photos.css"; // Make sure to add your custom CSS file

const Photos = () => {
  // Example of photos data including images and descriptions
  const photos = [
    { 
      src: "/assets/Central_Building_Research_Institute_Logo.png", 
      alt: "Photo 1", 
      description: "This is a photo of a building facade." 
    },
    { 
      src: "/assets/Screenshot_2025-04-08_160504.png", 
      alt: "Photo 2", 
      description: "Photo of a detailed architectural design." 
    },
    { 
      src: "https://via.placeholder.com/300x200?text=Photo+3", 
      alt: "Photo 3", 
      description: "An image showcasing building defect areas." 
    },
    // Add more photo URLs and descriptions as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src, description) => {
    setSelectedImage({ src, description });
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <div className="photos-section">
      <h2>Gallery: Photos</h2>
      <p>Browse through the gallery to view images and their descriptions.</p>

      {/* Gallery Grid */}
      <div className="gallery-section">
        <h3>Uploaded Photos</h3>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item" onClick={() => handleImageClick(photo.src, photo.description)}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-image"
              />
              <div className="photo-description">
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal - If an image is clicked */}
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <img src={selectedImage.src} alt="Enlarged view" className="modal-image" />
            <div className="modal-description">
              <p>{selectedImage.description}</p>
            </div>
            <button onClick={handleCloseModal} className="close-button">X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
