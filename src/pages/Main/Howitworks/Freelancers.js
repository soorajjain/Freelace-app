import React from "react";
import f1 from "../../../assets/f1.jpg";
import f2 from "../../../assets/j2.jpg";
import f3 from "../../../assets/j3.jpg";
import f4 from "../../../assets/j4.jpg";
import { Link } from "react-router-dom";

function Freelancers() {
  return (
    <div>
      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-1">
          <div className="font-serif font-bold text-[40px]">Sign In</div>
          <div className="text-l pt-4 w-[385px]">
            Create your Freelancer profile easily.
          </div>
          <Link
            to="/login"
            className="border flex items-start border-red-900 bg-red-700 hover:bg-red-500 rounded-md p-2 px-5 md:block my-7 text-l"
          >
            Get Started
          </Link>
        </div>
        <div className="order-2">
          <img className="w-[390px]" src={f1} alt="logo" />
        </div>
      </div>

      {/* 2 */}

      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-2">
          <div className="font-serif font-bold text-[40px]">
            Find the <br /> Right Job for <br />
            You
          </div>
          <div className="text-l pt-4 w-[385px]">
            We make it easy to identify and apply for the jobs that match your
            skills and services.
          </div>
        </div>
        <div className="order-1">
          <img className="w-[390px]" src={f2} alt="logo" />
        </div>
      </div>

      {/* 3 */}

      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-1">
          <div className="font-serif font-bold text-[40px]">
            Manage the Work
          </div>
          <div className="text-l pt-4 w-[385px]">
            Use WorkRooms to work efficiently, collaborate with team members,
            and communicate with Employers.
          </div>
        </div>
        <div className="order-2">
          <img className="w-[390px]" src={f3} alt="logo" />
        </div>
      </div>

      {/* 4 */}

      <div className="Hero-sec max-w-[870px] h-[500px] grid grid-row-2 text-white sm:mx-12  md:mx-12 lg:mx-auto mx-6 md:grid-cols-2 flex items-center">
        <div className="flex mx-auto items-start flex-col justify-center order-2">
          <div className="font-serif font-bold text-[40px]">Get Paid</div>
          <div className="text-l pt-4 w-[385px]">
            Get paid for the work you do in a timely manner through our secure
            payment system.
          </div>
        </div>
        <div className="order-1">
          <img className="w-[390px]" src={f4} alt="logo" />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Freelancers;
