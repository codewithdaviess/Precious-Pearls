// components/Header.jsx
import React from 'react';
import bgImage from '../assets/sossusvlei2.png';

const Header = () => {
  return (
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Welcome to Precious Pearls
          </h2>
          <p className="text-white text-lg">
            Explore the world with ease, comfort, and elegance through our curated tours and experiences.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
