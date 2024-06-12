import React from "react";
import favicon from "../../assets/favicon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="w-[100%] border-t-[1px] border-t-[#605d5d] ">

      <div className="w-full bg-zinc-900">
        <footer className="Navbar max-w-[970px] text-white mx-auto justify-between py-8 bg-zinc-900 h-[300px] grid grid-cols-2">
          <div className="block-1 flex justify-center items-start flex-col gap-6 w-[400px]">
            <Link to="/">
              <img src={favicon} className="w-[40px]" alt="logo" />
            </Link>
            <h1 className="font-bold">Go Make Something Awesome</h1>
            <h1>
              Font Awesome is the internet's icon library and toolkit used by
              millions of designers, developers, and content creators.
            </h1>
            <h1>Made with love in INDIA</h1>
          </div>
          <div className="block-2 flex gap-10 items-start justify-start">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">Navigate</h1>
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/find_jobs" className="hover:underline">
                Post a Job
              </Link>
              <Link to="/find_freelancers" className="hover:underline">
                Find a Freelancer
              </Link>
              <Link to="/find_jobs" className="hover:underline">
                Find a Job
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-bold">Company Info</h1>
              <Link to="/about" className="hover:underline">
                About Freelance Hub
              </Link>
              <Link to="/" className="hover:underline">
                How it works
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  );
}

export default Footer;
