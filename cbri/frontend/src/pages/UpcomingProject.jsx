import React from "react";
import Navbar from "../components/Navbar";
import "./UpcomingProject.css";

const upcomingProjects = [
  {
    title: "Autonomous Safety Inspection Bot",
    description:
      "A robotic solution for automatic building safety checks using LiDAR and ML.",
    status: "Planned",
    expectedStart: "2025-05-20",
    image: "/images/robotic-safety.jpg",
  },
  {
    title: "Earthquake-Resistant Housing Model",
    description:
      "A structural model focusing on low-cost earthquake-resilient building techniques.",
    status: "In Review",
    expectedStart: "2025-06-01",
    image: "/images/quake-house.jpg",
  },
  {
    title: "Green Concrete Initiative",
    description:
      "Exploring the use of eco-friendly materials in future construction.",
    status: "Delayed",
    expectedStart: "2025-07-15",
    image: "/images/green-concrete.jpg",
  },
];

const UpcomingProject = () => {
  return (
    <>
      <Navbar />
      <div className="upcoming-container">
        <h2>Upcoming Projects</h2>
        <div className="upcoming-grid">
          {upcomingProjects.map((proj, index) => (
            <div className="upcoming-card" key={index}>
              {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="upcoming-img"
                />
              )}
              <div className="upcoming-details">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="meta-info">
                  <span
                    className={`status-badge ${proj.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {proj.status}
                  </span>
                  <small>Expected: {proj.expectedStart}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingProject;
