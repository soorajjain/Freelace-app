import React, { useState } from "react";
import Employers from "./Employers";
import Freelancers from "./Freelancers";
// import { Link } from "react-router-dom";

function Howitwork() {
  const [toggle, setToggle] = useState("Freelancers");
  return (
    <div>
      <div className="w-[100%] border-t-[1px] border-t-[#605d5d]  py-[5px] text-white">
        <div className="howitwork max-w-[1170px] mx-auto text-white flex justify-center items-center mt-8 flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-[40px] font-bold text-center">How It Works</h1>
            <h3 className="text-l text-center">
              Find and hire freelance talent using our secure, flexible and
              cost-effective online platform.
            </h3>
          </div>
          <div className="flex gap-5">
            <button
              className={toggle === "Employers" ? "border flex items-start border-red-900 bg-red-600 rounded-md p-4 px-6 font-bold md:block my-7 text-xl" : "border flex items-start border-white bg-transparent rounded-md p-4 px-6 md:block  my-7 text-xl"}
              onClick={() => {
                setToggle("Employers");
              }}
            >
              Employers
            </button>
            <button
              className={toggle === "Freelancers" ? "border flex items-start border-red-900 bg-red-600 rounded-md p-4 px-6 md:block font-bold my-7 text-xl" : "border flex items-start border-white bg-transparent rounded-md p-4 px-6 md:block my-7 text-xl"}
              onClick={() => {
                setToggle("Freelancers");
              }}
            >
              Freelancers
            </button>
          </div>
        </div>
        <div>{toggle === "Employers" ? <Employers /> : <Freelancers />}</div>
      </div>
    </div>
  );
}

export default Howitwork;
