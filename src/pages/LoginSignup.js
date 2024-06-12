import React, { useState } from "react";

function LoginSignup() {
  const [action, setAction] = useState("SignUp");
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-zinc-900">
      <div className="flex gap-8 flex-col text-white h-[600px] w-[400px] border border-white rounded-xl items-center justify-center">
        <div className="Header text-[40px] font-bold">{action}</div>
        <div className="container flex items-center justify-center flex-col gap-7">
          {action === "Login" ? (
            <div></div>
          ) : (
            <input
              className=" outline-none border border-black p-4 text-xl px-7 bg-gray-400 placeholder-white w-[350px]"
              placeholder="Name"
            ></input>
          )}

          <input
            className=" outline-none border border-black p-4 px-7 text-xl bg-gray-400 placeholder-white w-[350px]"
            placeholder="Email"
          ></input>
          <input
            type="text"
            className=" outline-none border border-black p-4 px-7 text-xl bg-gray-400 placeholder-white w-[350px]"
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
            className="border border-red-500 bg-red-500 p-4 rounded-3xl pt-3 px-7 font-bold hover:bg-red-400 text-l"
            onClick={() => {
              setAction("SignUp");
            }}
          >
            SignUp
          </button>
          <button
            className="border border-red-500 bg-red-500 p-4 rounded-3xl pt-3 px-7 font-bold hover:bg-red-400 text-l"
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
