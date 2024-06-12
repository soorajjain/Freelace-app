import React from "react";
import signup from "../../../assets/signup.jpg";
import e2 from "../../../assets/e2.jpg";
import e3 from "../../../assets/e3.jpg";
import e4 from "../../../assets/e4.jpg";
import { Link } from "react-router-dom";

function Employers() {
  return (
    <div>
      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-2">
          <div className="font-serif font-bold text-[40px]">Sign Up</div>
          <div className="text-l pt-4 w-[385px]">
            It's easy to get started! Simply join for free, post your job, and
            start receiving Quotes. Use the Find Freelancers tool to get Quotes
            from quality Freelancers.
          </div>
          <Link
            to="/login"
            className="border flex items-start border-red-600 bg-red-600 rounded-md p-2 px-3 md:block my-7 text-l"
          >
            Get Started
          </Link>
        </div>
        <div className="order-1">
          <img className="w-[390px]" src={signup} alt="logo" />
        </div>
      </div>

      {/* 2 */}

      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-1">
          <div className="font-serif font-bold text-[40px]">Hire</div>
          <div className="text-l pt-4 w-[385px]">
            We make it easy to identify and apply for the jobs that match your
            skills and services.
          </div>
        </div>
        <div className="order-2">
          <img className="w-[390px]" src={e2} alt="logo" />
        </div>
      </div>

      {/* 3 */}

      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-2">
          <div className="font-serif font-bold text-[40px]">Manage</div>
          <div className="text-l pt-4 w-[385px]">
            Use WorkRooms to manage Freelancers and keep track of progress.
          </div>
        </div>
        <div className="order-1">
          <img className="w-[390px]" src={e3} alt="logo" />
        </div>
      </div>

      {/* 4 */}

      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-1">
          <div className="font-serif font-bold text-[40px]">Pay</div>
          <div className="text-l pt-4 w-[385px]">
            Pay a Freelancer for a job well done through our secure payment
            system.
          </div>
        </div>
        <div className="order-2">
          <img className="w-[390px]" src={e4} alt="logo" />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Employers;
