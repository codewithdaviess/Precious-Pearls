// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Precious Pearls</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            ☰
          </button>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Tours</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-white px-4 py-2 space-y-2">
          <li><a href="#">Home</a></li>
          <li><a href="#">Tours</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
