import React, { useState } from "react";

const OngoingProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectList, setProjectList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectList([...projectList, projectName]);
    setProjectName("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Ongoing Projects</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {projectList.map((proj, index) => (
          <li key={index}>{proj}</li>
        ))}
      </ul>
    </div>
  );
};

export default OngoingProject;
