import React, { useState } from "react";
import Employers from "./Employers";
import Freelancers from "./Freelancers";
// import { Link } from "react-router-dom";

function Howitwork() {
  const [toggle, setToggle] = useState("Freelancers");
  return (
    <div id="how-it-works">
      <div className="w-[100%] border-t-[1px] border-t-[#605d5d] py-[5px] text-white mt-7">
        <div className="howitwork max-w-[1170px] mx-auto text-white flex justify-center items-center mt-8 flex-col">
          <div className="flex flex-col gap-5 sm:mx-12  md:mx-12 lg:mx-auto mx-6 ">
            <h1 className="text-[40px] font-bold text-center">
              How <span className="text-red-500 text-[45px] "> F</span>reelance{" "}
              <span className="text-red-500"> H</span>ub Works
            </h1>
            <h3 className="text-l text-center">
              Find and hire freelance talent using our secure, flexible and
              cost-effective online platform.
            </h3>
          </div>
          <div className="flex border border-white my-7 rounded-[50px]">
            <button
              className={
                toggle === "Employers"
                  ? " flex items-start bg-red-600 rounded-[50px] p-4 px-6 md:block m-0 text-xl"
                  : " flex items-start border-white bg-transparent rounded-[50px] p-4 px-6 md:block m-0 text-xl"
              }
              onClick={() => {
                setToggle("Employers");
              }}
            >
              Employers
            </button>
            <button
              className={
                toggle === "Freelancers"
                  ? " flex items-start bg-red-600 rounded-[50px] p-4 px-6 md:block  m-0 text-xl"
                  : " flex items-start bg-transparent rounded-[50px] p-4 px-6 md:block m-0 text-xl"
              }
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
