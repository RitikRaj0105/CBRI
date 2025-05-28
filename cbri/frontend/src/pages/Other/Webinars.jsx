import React from "react";
import "./Webinars.css"; // Custom styles for better presentation

const webinarList = [
  {
    id: 1,
    title: "Sustainable Building Materials for the Future",
    date: "April 10, 2025",
    time: "3:00 PM - 4:30 PM",
    speaker: "Dr. Rajesh Verma, Scientist, CSIR-CBRI",
    description:
      "Explore innovative sustainable materials that are shaping the future of construction. This session dives into eco-friendly materials, lifecycle assessment, and implementation strategies for sustainable infrastructure.",
    link: "https://example.com/webinar1"
  },
  {
    id: 2,
    title: "AI in Structural Health Monitoring",
    date: "March 18, 2025",
    time: "11:00 AM - 12:30 PM",
    speaker: "Dr. Nidhi Sharma, Senior Researcher, CSIR-CBRI",
    description:
      "A deep dive into how Artificial Intelligence and Machine Learning are transforming the way we monitor and maintain structural integrity in civil infrastructure.",
    link: "https://example.com/webinar2"
  },
  {
    id: 3,
    title: "Fire Safety Engineering in Modern Construction",
    date: "February 22, 2025",
    time: "2:00 PM - 3:30 PM",
    speaker: "Dr. Sanjay Mehta, Chief Safety Engineer, CSIR-CBRI",
    description:
      "This session covers fire-resistant materials, fire modeling simulations, and evolving building codes related to fire safety in urban structures.",
    link: "https://example.com/webinar3"
  }
];

const Webinars = () => {
  return (
    <div className="webinar-page">
      <h1 className="webinar-title">🎙️ CSIR-CBRI Webinars</h1>
      <p className="webinar-subtitle">Learn from the Experts. Anytime. Anywhere.</p>

      <div className="webinar-list">
        {webinarList.map((webinar) => (
          <div key={webinar.id} className="webinar-card">
            <h2>{webinar.title}</h2>
            <p><strong>Date:</strong> {webinar.date}</p>
            <p><strong>Time:</strong> {webinar.time}</p>
            <p><strong>Speaker:</strong> {webinar.speaker}</p>
            <p>{webinar.description}</p>
            <a href={webinar.link} target="_blank" rel="noreferrer" className="watch-button">🎥 Watch Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinars;
