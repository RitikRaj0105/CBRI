import React from "react";
import "./Documentation.css";

const docs = [
  {
    title: "Getting Started with CBRI Portal",
    description:
      "This guide walks you through how to set up your account, log in, and start exploring the portal's features. Whether you're a researcher, faculty, or collaborator, this document ensures you get off to a smooth start.",
    link: "#",
  },
  {
    title: "Uploading Research Publications",
    description:
      "Learn how to upload your publications in the correct format, including citation styles, metadata tagging, and submission for peer-review if needed.",
    link: "#",
  },
  {
    title: "Admin User Manual",
    description:
      "This documentation is designed for admin users. It includes details about managing users, datasets, files, and handling role permissions within the portal.",
    link: "#",
  },
  {
    title: "Defect Detection Integration",
    description:
      "Understand the AI/ML pipeline, how YOLOv8 has been integrated, and the process for uploading images/videos or using live detection tools. Learn how to view outputs and enhance dataset accuracy.",
    link: "#",
  },
  {
    title: "Version Control & Updates",
    description:
      "Stay updated with the latest releases and version changes in the system. Learn best practices for managing source control and tracking improvements.",
    link: "#",
  },
];

const Documentation = () => {
  return (
    <div className="documentation-page">
      <h1 className="doc-title">📚 CSIR-CBRI Documentation Center</h1>
      <p className="doc-subtitle">Guides, tutorials, and references to help you explore and contribute effectively</p>

      <div className="doc-container">
        {docs.map((doc, index) => (
          <div key={index} className="doc-card">
            <h2 className="doc-card-title">{doc.title}</h2>
            <p className="doc-card-desc">{doc.description}</p>
            <a href={doc.link} className="doc-link">View Documentation →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
