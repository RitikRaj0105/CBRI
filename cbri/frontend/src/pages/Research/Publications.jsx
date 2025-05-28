import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Publications.css";

const publications = [
  {
    title: "AI-based Building Defect Detection",
    authors: "John Doe, Jane Smith",
    abstract:
      "This paper presents a machine learning approach to detect building defects using image analysis.",
    date: "2025-04-12",
    link: "/downloads/ai-building-defect.pdf",
  },
  {
    title: "Structural Integrity of High-Rise Buildings",
    authors: "Mark Lee, Anna Kim",
    abstract:
      "A comprehensive study of the structural integrity and safety features of high-rise buildings in urban areas.",
    date: "2024-11-05",
    link: "/downloads/structural-integrity.pdf",
  },
  {
    title: "Green Concrete Solutions for Sustainable Construction",
    authors: "David Clark, Emily White",
    abstract:
      "Exploring the potential of green concrete materials in reducing the carbon footprint of modern construction.",
    date: "2024-09-15",
    link: "/downloads/green-concrete.pdf",
  },
];

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPublications = publications.filter((pub) =>
    pub.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="publications-container">
        <h2>Research Publications</h2>
        <input
          type="text"
          className="search-input"
          placeholder="Search publications..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="publications-list">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, index) => (
              <div className="publication-card" key={index}>
                <h3>{pub.title}</h3>
                <p><strong>Authors:</strong> {pub.authors}</p>
                <p><strong>Abstract:</strong> {pub.abstract}</p>
                <p><strong>Date:</strong> {pub.date}</p>
                <a href={pub.link} className="download-link" download>
                  Download PDF
                </a>
              </div>
            ))
          ) : (
            <p>No publications found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Publications;
