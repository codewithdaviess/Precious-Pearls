import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Header />
    </>
  );
};

export default Homepage;
