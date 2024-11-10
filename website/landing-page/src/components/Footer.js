import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Squeak</h2>
          <p>Learn languages through stories you love.</p>
        </div>
        
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Squeak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
