import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Redirect() {
  return (
    <div className=" bg-zinc-900 mx-auto">
      <div className="redirect max-w-[570px] h-screen mx-auto text-white flex justify-center items-center flex-col">
        <Link to="/" className="px-1">
          <img src={logo} className="w-[200px] mb-10" alt="logo" />
        </Link>
        
        <div className="flex gap-7 justify-center items-center">
          <Link
            to="/signupJobGiver"
            className="h-[200px] w-[300px] bg-transparent flex items-center justify-center text-2xl text-left border rounded-sm hover:bg-zinc-800"
          >
            <h1>
              SignUp as <br />{" "}
              <span className="font-bold text-red-500 text-3xl">JOBGIVER</span>
            </h1>
          </Link>
          <Link
            to="/SignupJobTaker"
            className="h-[200px] w-[300px] bg-transparent flex items-center justify-center text-2xl text-left border rounded-sm hover:bg-zinc-800"
          >
            <h1>
              SignUp as <br />{" "}
              <span className="font-bold text-red-500 text-3xl">JOBTAKER</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Redirect;
