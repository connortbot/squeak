import React, { useState } from 'react';
import logo from '../assets/Squeak.png';
import './NavBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#Home');

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className="navbar navbar-light bg-white">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Squeak Logo" className="navbar-logo" />
      </a>
      <div className="nav-links">
        <a
          href="#Home"
          className={activeLink === '#Home' ? 'active-link' : ''}
          onClick={() => handleLinkClick('#Home')}
        >
          Home
        </a>
        <a
          href="#about-us"
          className={activeLink === '#about-us' ? 'active-link' : ''}
          onClick={() => handleLinkClick('#about-us')}
        >
          About Us
        </a>
        <a
          href="#contact-us"
          className={activeLink === '#contact-us' ? 'active-link' : ''}
          onClick={() => handleLinkClick('#contact-us')}
        >
          Contact Us
        </a>
      </div>
      <button className="join-waitlist-button">Join Waitlist</button>
    </nav>
  );
};

export default Navbar;
