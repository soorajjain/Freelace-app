import React from "react";
import logo from "../../assets/logo.png";
// import Login from "../pages/Login";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="w-full bg-zinc-900">
      <nav className="Navbar max-w-[1170px] text-white lg:mx-auto flex justify-between py-8 bg-zinc-900 mx-3">
        <div className="flex gap-10 items-center">
          <Link to="/" className="px-1">
            <img src={logo} className="w-[200px]" alt="logo" />
          </Link>
          <Link to="/" className="hidden md:block">
            Find Freelancer
          </Link>
        </div>
        <div className="flex gap-6 items-center mx-4">
          <Link
            to="/find_jobs"
            className="border border-white rounded-md p-2 px-3 hover:bg-white hover:text-black hover:border-black"
          >
            post job
          </Link>
          <Link
            to="/"
            className="border  border-red-900 bg-red-700 hover:bg-red-500 rounded-md p-2 px-6 hidden md:block "
          >
            Logout
          </Link>
        </div>
      </nav>
      <div>{props.children}</div>
    </div>
  );
}

export default Navbar;
