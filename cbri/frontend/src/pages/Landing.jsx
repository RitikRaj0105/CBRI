import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ import Navbar
import "./Landing.css";

import img1 from "../assets/Screenshot 2025-04-08 160504.png";
import img2 from "../assets/unnamed.png";
import img3 from "../assets/Screenshot 2025-04-08 161650.png";

const slides = [
  {
    image: img1,
    title: "CBRI/CSIR",
    description: "Leading innovation in building science at CBRI.",
  },
  {
    image: img2,
    title: "Ram Mandir",
    description: "Paving the way for a smarter future.",
  },
  {
    image: img3,
    title: "Modern Engineering",
    description: "Excellence in structural design and construction.",
  },
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  const handleAdminClick = () => {
    navigate("/AdminDashboard");
  };

  return (
    <>
      <Navbar /> {/* ✅ Add Navbar here */}
      <div className="landing-container">
        <div className="image-wrapper">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="full-image"
          />
          <div className="overlay-title">{currentSlide.title}</div>
          <div className="overlay-description">{currentSlide.description}</div>
        </div>

        <div className="detection-section">
          <h2>AI Building Detection System</h2>
          <div className="detection-options">
            <a
              href="http://localhost:8501?mode=image"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="detect-btn">Upload Image</button>
            </a>
            <a
              href="http://localhost:8501?mode=video"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="detect-btn">Upload Video</button>
            </a>
            <a
              href="http://localhost:8501?mode=live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="detect-btn">Live Detection</button>
            </a>
            <button className="detect-btn" onClick={handleAdminClick}>
              Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
