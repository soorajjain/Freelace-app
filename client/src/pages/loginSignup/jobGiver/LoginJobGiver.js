import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/auth/jobGiverLogin", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.code === "400") {
          navigate("/find_freelancers");
        }
      });
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="flex sm:gap-8 gap-5  flex-col text-white sm:h-[600px] h-[400px] w-[300px] sm:w-[400px] border border-red-500 rounded-xl items-center justify-center hover:border-white"
      >
        <div className="Header sm:text-[40px] text-[30px] font-bold">Login</div>
        <div className="container flex items-center justify-center flex-col sm:gap-7 gap-4 ">
          <input
            className=" outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="text"
            className=" outline-none border border-red-500 sm:p-3 p-2 sm:text-l text-sm px-7 bg-gray-400 placeholder-white sm:w-[350px] w-[250px]"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <input type="checkbox" />
          <h1>Remember me</h1>
        </div>

        <div className="flex sm:gap-6 gap-4">
          <button className="border border-red-500 bg-red-700 sm:p-4  md:rounded-3xl rounded-sm sm:pt-3 sm:px-7 px-3 py-1 hover:bg-red-400 text-l">
            Login
          </button>
        </div>

        <div className="text-center">
          Dont have an account?
          <br />
          <Link to="/signupJobGiver" className="text-red-500 ml-1 ">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
