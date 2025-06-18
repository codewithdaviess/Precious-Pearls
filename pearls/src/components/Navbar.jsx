import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <img src={logo} alt="Precious Pearls Logo" className="h-16" />
      </div>
    </nav>
  );
};

export default Navbar;
