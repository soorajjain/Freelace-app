import React from "react";
import Navbar from "./components/Layout/Navbar";
// import HeroSection from "./pages/HeroSection";
import About from "./pages/Main/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<Navbar><About/></Navbar>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
