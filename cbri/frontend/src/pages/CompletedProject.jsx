import React from "react";
import Navbar from "../components/Navbar";
import "./CompletedProject.css";

const completedProjects = [
  {
    title: "Bridge Crack Detection System",
    description: "Used YOLOv8 with drone footage to detect cracks in concrete bridges.",
    completedDate: "2024-11-15",
    image: "/images/bridge.jpg", // ✅ optional
    reportLink: "#",
  },
  {
    title: "AI Fire Safety Monitoring",
    description: "Deployed thermal camera system with ML for early fire detection in large buildings.",
    completedDate: "2024-10-01",
    image: "/images/fire-safety.jpg",
    reportLink: "#",
  },
];

const CompletedProject = () => {
  return (
    <>
      <Navbar />
      <div className="completed-container">
        <h2>Completed Projects</h2>
        <div className="completed-grid">
          {completedProjects.map((proj, index) => (
            <div className="completed-card" key={index}>
              {proj.image && (
                <img src={proj.image} alt={proj.title} className="completed-img" />
              )}
              <div className="completed-details">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <small>Completed on: {proj.completedDate}</small>
                <div className="completed-actions">
                  <span className="status-badge">Completed</span>
                  <a href={proj.reportLink} className="report-link">View Report</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompletedProject;
