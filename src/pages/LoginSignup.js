import React, { useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

function LoginSignup() {
  const [action, setAction] = useState("SignUp");
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-zinc-900">
      <div className="flex gap-8 flex-col text-white h-[600px] w-[400px] border border-red-500 rounded-xl items-center justify-center hover:border-white">
      <Link to='/' className="px-1 mt-3">
            <img src={logo} className="w-[200px]" alt="logo" />
          </Link>
        <div className="Header text-[40px] font-bold">{action}</div>
        <div className="container flex items-center justify-center flex-col gap-7">
          {action === "Login" ? (
            <div></div>
          ) : (
            <input
              className=" outline-none border border-red-500 p-3 text-l px-7 bg-gray-400 placeholder-white w-[350px]"
              placeholder="Name"
            ></input>
          )}

          <input
            className=" outline-none border border-red-500 p-3 px-7 text-l bg-gray-400 placeholder-white w-[350px]"
            placeholder="Email"
          ></input>
          <input
            type="text"
            className=" outline-none border border-red-500 p-3 px-7 text-l bg-gray-400 placeholder-white w-[350px]"
            placeholder="Password"
          ></input>
        </div>

        {action === "SignUp" ? (
          <div></div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <input type="checkbox" />
            <h1>Remember me</h1>
          </div>
        )}

        <div className="flex gap-6">
          <button
            className="border border-red-500 bg-red-700 p-4 rounded-3xl pt-3 px-7  hover:bg-red-400 text-l"
            onClick={() => {
              setAction("SignUp");
            }}
          >
            SignUp
          </button>
          <button
            className="border border-red-500 bg-red-700 p-4 rounded-3xl pt-3 px-7 hover:bg-red-500 text-l"
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
