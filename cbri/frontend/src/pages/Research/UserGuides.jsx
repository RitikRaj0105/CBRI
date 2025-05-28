import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./UserGuides.css";

const userGuides = [
  {
    title: "Getting Started with the App",
    description:
      "A step-by-step guide to get you started with using our app and its basic features.",
    category: "Getting Started",
    link: "/guides/getting-started.pdf",
  },
  {
    title: "Advanced Features Tutorial",
    description:
      "Learn how to leverage advanced features and boost your productivity using the app.",
    category: "Advanced Features",
    link: "/guides/advanced-features.pdf",
  },
  {
    title: "Troubleshooting Common Issues",
    description:
      "Solutions to common problems you may encounter while using the app.",
    category: "Troubleshooting",
    link: "/guides/troubleshooting.pdf",
  },
  {
    title: "Integrating with Other Tools",
    description:
      "How to integrate the app with external tools and services for a more seamless experience.",
    category: "Integration",
    link: "/guides/integration.pdf",
  },
];

const UserGuides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredGuides = userGuides.filter((guide) => {
    return (
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || guide.category === selectedCategory)
    );
  });

  const categories = [
    "All",
    "Getting Started",
    "Advanced Features",
    "Troubleshooting",
    "Integration",
  ];

  return (
    <>
      <Navbar />
      <div className="guides-container">
        <h2>User Guides</h2>
        
        {/* Search Bar */}
        <div className="search-filter">
          <input
            type="text"
            className="search-input"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <select
            className="category-select"
            onChange={handleCategoryFilter}
            value={selectedCategory}
          >
            {categories.map((category, index) => (
              <option key={index} value={category === "All" ? "" : category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Guide Cards */}
        <div className="guides-list">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide, index) => (
              <div className="guide-card" key={index}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <div className="meta-info">
                  <span className="guide-category">{guide.category}</span>
                  <a href={guide.link} className="download-link" download>
                    Download PDF
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No guides found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserGuides;
