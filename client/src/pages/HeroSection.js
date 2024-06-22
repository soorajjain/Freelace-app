import React from "react";
import hero from "../assets/hero-sec.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div className="w-[100%] border-t-[1px] border-t-[#605d5d]  py-[5px]">
        <div className="Hero-sec max-w-[1170px] h-[600px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-[60%_40%] items-center">
          <div className="flex mx-auto md:items-start items-center flex-col justify-center mb-5 gap-4">
            <div className="font-serif font-bold md:text-[60px] text-[50px] text-center md:text-left">
            Freelance services at your fingertips!
            </div>
            <div className="text-l pt-4 w-[585px] text-center md:text-left">
              Work with the best freelance talent from around the world on our
              secure, flexible and cost-effective platform.
            </div>
            <Link
              to="/redirect"
              className="border flex items-start border-red-900 bg-red-700 hover:bg-red-500 rounded-md p-2 px-5 md:block my-7 text-l"
            >
              Get Started
            </Link>
          </div>
          <div className=" mx-7 max-w-[410px] md:w-fit flex items-center justify-center ">
            <img src={hero} className="" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
