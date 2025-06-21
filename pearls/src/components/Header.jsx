import React from "react";
import bgImage from "../assets/sossusvlei3.png";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <Navbar />

        {/* Left-aligned main content */}
        <div className="flex flex-col items-start justify-center text-white px-5 lg:px-20 text-left  flex-1 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Breathtaking <br />
            Destinations Across Africa
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            From the roaring Victoria Falls to the golden dunes of the Namib
            Desert, explore Africa’s most iconic travel destinations with
            curated tours, local guides, and unforgettable experiences. Whether
            you're seeking wildlife safaris, cultural journeys, or relaxing
            beach escapes, your adventure begins here.
          </p>

          {/* Button */}
          <button className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-sm font-semibold hover:bg-white hover:text-black transition">
            Plan My Trip <ArrowRight className="w-5 h-5 font-light" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
