import React from "react";
import logo from "../../assets/logo.png";
// import Login from "../pages/Login";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="w-full bg-zinc-900">
      <nav className="Navbar max-w-[1170px] text-white mx-auto flex justify-between py-8 bg-zinc-900">
        <div className="flex gap-10 items-center">
          <Link to="/" className="px-1">
            <img src={logo} className="w-[200px]" alt="logo" />
          </Link>
          <Link to="/find_freelancers" className="hidden md:block">
            Find Freelancer
          </Link>
          <Link
            to="/find_jobs" className="hidden md:block">Find Jobs</Link>
          <Link to="/about" className="hidden md:block">
            About
          </Link>
        </div>
        <div className="flex gap-6 items-center mx-4">
          <Link
            to="/find_jobs"
            className="border border-white rounded-md p-2 px-3 "
          >
            post job
          </Link>
          <Link
            to="/login"
            className="border  border-red-600 bg-red-600 rounded-md p-2 px-3 hidden md:block "
          >
            Login
          </Link>
        </div>
      </nav>
      <div>{props.children}</div>
    </div>
  );
}

export default Navbar;
