import React from "react";
// import Navbar from "./components/Navbar";
// import HeroSection from "./pages/HeroSection";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
       

    </>
  );
}

export default App;
