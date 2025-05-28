import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>CBRI - CSIR</h2>
        <p>Leading Innovation in Building Science & Infrastructure</p>
      </div>

      <div className="footer-middle">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CBRI / CSIR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
