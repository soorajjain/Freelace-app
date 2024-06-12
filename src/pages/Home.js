import React from "react";
import HeroSection from "../pages/HeroSection";
import Howitwork from "./Main/Howitworks/Howitwork";

function Home() {
  return (
    <div className="bg-zinc-900 mx-auto">
      <HeroSection />
      <Howitwork />
    </div>
  );
}

export default Home;
