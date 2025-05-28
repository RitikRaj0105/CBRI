import React from "react";
import Navbar from "../components/Navbar";
import "./CollaborativeProjects.css";

const collaborativeProjects = [
  {
    title: "Smart Building Monitoring",
    description: "A multi-institute project for real-time monitoring of infrastructure health using IoT and AI.",
    tags: ["AI", "IoT", "Civil"],
    collaborators: ["Dr. Singh", "Ritik", "Anjali"],
    startDate: "2024-12-01",
  },
  {
    title: "Green Architecture Design",
    description: "Collaborative effort for sustainable building architecture and eco-friendly design systems.",
    tags: ["Environment", "Design", "Collaboration"],
    collaborators: ["Mr. Roy", "Neha", "Amit"],
    startDate: "2025-01-15",
  },
];

const CollaborativeProjects = () => {
  return (
    <>
      <Navbar />
      <div className="collab-container">
        <h2>Collaborative Projects</h2>
        <div className="project-grid">
          {collaborativeProjects.map((proj, index) => (
            <div className="collab-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="collab-footer">
                <div className="collaborators">
                  {proj.collaborators.map((name, j) => (
                    <span key={j} className="collab-name">{name}</span>
                  ))}
                </div>
                <small className="start-date">Start Date: {proj.startDate}</small>
              </div>
              <button className="join-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollaborativeProjects;
