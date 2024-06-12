import React from "react";
import Navbar from "../components/Layout/Navbar";
import HeroSection from "../pages/HeroSection";
import Howitwork from "./Main/Howitworks/Howitwork";

function Home() {
  return (
    <div className="bg-zinc-900 mx-auto">
      <Navbar />
      <HeroSection/>
      <Howitwork/>
    </div>
  );
}

export default Home;
