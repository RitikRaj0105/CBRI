import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./OngoingProject.css";

const OngoingProject = () => {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    date: "",
    image: null,
  });
  const [projectList, setProjectList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProjectData({
      ...projectData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectData.name.trim() !== "") {
      setProjectList([...projectList, projectData]);
      setProjectData({
        name: "",
        description: "",
        date: "",
        image: null,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="project-container">
        <h2>Ongoing Projects</h2>
        <form onSubmit={handleSubmit} className="project-form" encType="multipart/form-data">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={projectData.name}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={projectData.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={projectData.date}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          <button type="submit">Add Project</button>
        </form>

        <div className="project-list">
          {projectList.map((proj, index) => (
            <div className="project-card" key={index}>
              {proj.image && (
                <img
                  src={URL.createObjectURL(proj.image)}
                  alt={proj.name}
                  className="project-image"
                />
              )}
              <div className="project-info">
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>
                <small>{proj.date}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OngoingProject;
