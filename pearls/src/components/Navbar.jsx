import React from "react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    // Full-width container with background (optional)
    <div className="w-full bg-transparent">
      {/* Centered navbar with max width of 1640px */}
      <nav className="max-w-[1640px] mx-auto px-4 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold text-white">
          <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Destinations</li>
          <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Packages</li>
          <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">About Us</li>
          <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
