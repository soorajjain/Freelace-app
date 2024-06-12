import React from "react";
import hero from "../assets/hero-sec.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div className="w-[100%] border-t-[1px] border-t-[#605d5d]  py-[5px]">
        <div className="Hero-sec max-w-[1170px] h-[600px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 items-center">
          <div className="flex mx-auto items-start flex-col justify-center">
            <div className="font-serif font-bold text-[60px]">
              How work <br /> should work
            </div>
            <div className="text-l pt-4 w-[385px]">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </div>
            <Link
              to="/login"
              className="border flex items-start border-red-900 bg-red-700 hover:bg-red-500 rounded-md p-2 px-5 md:block my-7 text-l"
            >
              Get Started
            </Link>
          </div>
          <div className="">
            <img src={hero} className="" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
