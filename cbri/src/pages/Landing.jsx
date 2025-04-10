import React, { useEffect, useState } from "react";
import "./Landing.css";

// Import your images
import img1 from "../assets/Screenshot 2025-04-08 160504.png";
import img2 from "../assets/unnamed.png";
import img3 from "../assets/Screenshot 2025-04-08 161650.png";

// Array with image and corresponding text
const slides = [
  {
    image: img1,
    title: "CBRI/CSIR",
    description: "Leading innovation in building science at CBRI."
  },
  {
    image: img2,
    title: " Ram Mandir ",
    description: "Paving the way for a smarter, "
  },
  {
    image: img3,
    title: "Modern Engineering",
    description: "Excellence in structural design and construction."
  }
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="landing-container">
      <img src={currentSlide.image} alt="Slide" className="landing-image" />
      <div className="landing-text">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.description}</p>
      </div>
    </div>
  );
};

export default Landing;
