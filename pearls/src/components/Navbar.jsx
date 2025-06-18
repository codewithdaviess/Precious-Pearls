import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        
        <div className="flex items-center space-x-12">
          {/* Left Nav Links */}
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-[#a9842e]">Homepage</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#a9842e]">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#a9842e]">Tours</a></li>
          </ul>

          {/* Center Logo */}
          <div>
            <img src={logo} alt="Precious Pearls Logo" className="h-16" />
          </div>

          {/* Right Nav Links */}
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-[#a9842e]">Blog</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#a9842e]">Destinations</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#a9842e]">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
