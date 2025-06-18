import React from 'react';
import bg from '../assets/sossusvlei2.png';

const Header = () => {
  return (
    <header
      className="w-full h-[100vh]  bg-center bg-cover flex flex-col items-center justify-center relative px-4 py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 "></div>

      {/* Text content */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-[#a9842e]">Travel</h1>
        <h1 className="text-4xl md:text-6xl font-bold text-white">Beautifully</h1>
      </div>

      {/* Form below */}
      <form className="relative z-10 flex flex-col md:flex-row gap-4 max-w-4xl w-full bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
        <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a9842e]">
          <option>Adventure</option>
          <option>Safari</option>
          <option>Beach</option>
          <option>Mountain</option>
        </select>

        <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a9842e]">
          <option>Hotels</option>
          <option>5 Star</option>
          <option>Budget</option>
          <option>Luxury</option>
        </select>

        <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a9842e]">
          <option>Adventure</option>
          <option>Hiking</option>
          <option>Diving</option>
          <option>Safari</option>
        </select>

        <button
          type="submit"
          className="bg-[#a9842e] hover:bg-[#8c7024] text-white font-bold px-6 py-3 rounded-md transition"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
