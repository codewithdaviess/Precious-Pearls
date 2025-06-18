import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react'; // or use any icons you want

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md md:hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="Precious Pearls Logo" className="h-12" />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-[#a9842e] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-white shadow-inner">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-[#a9842e] font-semibold">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>Homepage</a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>Tours</a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>Blog</a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>Destinations</a>
            </li>
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
