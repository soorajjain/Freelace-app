import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="Navbar max-w-[1170px] text-white mx-auto flex justify-between py-8 font-bold">
        <div className="flex gap-10 items-center">
          <div className="px-10">
            <img src={logo} className="w-[200px]" alt="logo" />
          </div>
          <h1 className="hidden md:block">Find Freelancer</h1>
          <h2 className="hidden md:block">Find Jobs</h2>
          <h3 className="hidden md:block">About </h3>
        </div>
        <div className="flex gap-6 items-center mx-4">
          <button className="border border-white rounded-md p-2 px-3 ">
            post job
          </button>
          <button className="border  border-red-600 bg-red-600 rounded-md p-2 px-3 hidden md:block ">
            Login
          </button>
          <button className="border border-red-600 bg-red-600  rounded-md p-2 px-3 hidden md:block">
            signUp
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
