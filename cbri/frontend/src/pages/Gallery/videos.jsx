import React from "react";
import "./Videos.css";

const Videos = () => {
  const videos = [
    {
      src: "/src/assets/sample.MOV",
      title: "Building Inspection Overview",
      description: "A high-resolution walkthrough video of a structural inspection.",
    },
    {
      src: "/src/assets/sample.MOV",
      title: "Crack Analysis",
      description: "Video showcasing detection of cracks on the outer wall.",
    },
  ];

  return (
    <div className="videos-container">
      <h2 className="section-title">📹 Video Gallery</h2>
      <p className="section-subtitle">Explore videos from inspections, site visits, and defect detection.</p>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-wrapper">
              <video className="video-player" controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
