import React from "react";
import About from "./pages/Main/About";
import Home from "./pages/Home";
import FindFreelancers from "./pages/clientJobGiver/FindFreelancers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/loginSignup/Signup";
import Login from "./pages/loginSignup/Login";


// import Navfree from "./pages/freelancersJobTakers/NavbarFreelancers";
// import Navclient from "./pages/clientJobGiver/NavbarClient";

import FindJobs from "./pages/freelancersJobTakers/FindJobs";
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* trials */}

          {/* <Route path="/navfree" element={<Navfree />} /> */}
          {/* <Route path="/navclient" element={<Navclient />} /> */}

          {/* trials */}

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
  );
}

export default App;
