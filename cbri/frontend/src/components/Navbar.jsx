import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../assets/Central_Building_Research_Institute_Logo.png";
import logo2 from "../assets/csir_logo.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const dropdownItems = {
    Project: [
      { label: "Ongoing Project", path: "/ongoing-project" },
      { label: "Completed Project", path: "/completed-project" },
      { label: "Upcoming Project", path: "/upcoming-project" },
      { label: "Collaborative Projects", path: "/collaborative-projects" },
    ],
    Research: [
      { label: "Publications", path: "/publications" },
      { label: "User Guides", path: "/user-guides" },
      { label: "Community Forum", path: "/community-forum" },
    ],
    Gallery: [
      { label: "Photos", path: "/gallery" },
      { label: "Videos", path: "/videos" },
      { label: "Events", path: "/events" },
    ],
    Other: [
      { label: "Documentation", path: "/documentation" },
      { label: "Blog", path: "/blog" },
      { label: "Webinars", path: "/webinars" },
    ],
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <div className="logos">
          <img src={logo1} alt="CBRI Logo" className="logo" />
          <img src={logo2} alt="CSIR Logo" className="logo" />
        </div>
        <span className="site-name">CBRI CSIR</span>
      </div>

      <ul className="nav-links">
        {Object.keys(dropdownItems).map((item, index) => (
          <li key={index} className="nav-item">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown(index)}
            >
              {item}{" "}
              <FaChevronDown
                className={`dropdown-icon ${
                  activeDropdown === index ? "rotate" : ""
                }`}
              />
            </div>

            {activeDropdown === index && (
              <ul className="dropdown-menu">
                {dropdownItems[item].map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="dropdown-item"
                    onClick={() => {
                      if (subItem.path) {
                        navigate(subItem.path);
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-buttons">
        <button
          className="task-button"
          onClick={() => navigate("/AdminDashboard")}
        >
          Admin
        </button>
        <button
          className="signup-button"
          onClick={() => navigate("/login")}
        >
          Login / Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
