import React from 'react';
import logo from '../assets/Squeak.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src={logo}
          alt="Squeak Logo"
          style={{
            height: '40px',
            transform: 'scale(3)',
            transformOrigin: 'left center'
          }}
        />
      </a>
    </nav>
  );
};

export default Navbar;