import React from "react";
import Navbar from "./components/Layout/Navbar";
// import HeroSection from "./pages/HeroSection";
import About from "./pages/Main/About";
import Home from "./pages/Home";
import FindFreelancers from "./pages/FindFreelancers"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import FindJobs from "./pages/FindJobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<Navbar><About/></Navbar>} />
          <Route path="/find_freelancers" element={<Navbar><FindFreelancers/></Navbar>} />
          <Route path="/find_jobs" element={<Navbar><FindJobs/></Navbar>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
