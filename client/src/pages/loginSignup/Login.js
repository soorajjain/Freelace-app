import React from "react";
import logo from "../../assets/logo.png";
// import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-zinc-900">
      <div className="flex sm:gap-8 gap-5  flex-col text-white sm:h-[600px] h-[400px] w-[300px] sm:w-[400px] border border-red-500 rounded-xl items-center justify-center hover:border-white">
        <Link to="/" className="px-1 mt-3">
          <img src={logo} className="w-[200px]" alt="logo" />
        </Link>
        <div className="Header sm:text-[40px] text-[30px] font-bold">Login</div>
        <div className="container flex items-center justify-center flex-col sm:gap-7 gap-4 ">
          <input
            className=" outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Email"
          ></input>
          <input
            type="text"
            className=" outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Password"
          ></input>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <input type="checkbox" />
          <h1>Remember me</h1>
        </div>
        <div>
          Dont have an account?
          <Link to="/signup" className="text-red-500 ml-1 ">
            Create account
          </Link>
        </div>
        <div className="flex sm:gap-6 gap-4">
          <button className="border border-red-500 bg-red-700 sm:p-4  md:rounded-3xl rounded-sm sm:pt-3 sm:px-7 px-3 py-1 hover:bg-red-400 text-l">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
