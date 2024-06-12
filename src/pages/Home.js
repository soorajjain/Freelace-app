import React from "react";
import Navbar from "../components/Layout/Navbar";
import HeroSection from "../pages/HeroSection";

function Home() {
  return (
    <div className="bg-zinc-900 mx-auto">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default Home;
