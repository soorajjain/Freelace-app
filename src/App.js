import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";

function App() {
  return (
    <div className="bg-zinc-900 mx-auto">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default App;
