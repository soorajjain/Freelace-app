import React from "react";
import About from "./pages/Main/About";
import Home from "./pages/Home";
import FindFreelancers from "./pages/FindFreelancers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import FindJobs from "./pages/FindJobs";
import Layout from "./components/Layouts/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/find_freelancers"
            element={
              <Layout>
                <FindFreelancers />
              </Layout>
            }
          />
          <Route
            path="/find_jobs"
            element={
              <Layout>
                <FindJobs />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
