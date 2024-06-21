import React from "react";
import logo from "../../assets/logo.png";
// import Login from "../pages/Login";
import { Link } from "react-router-dom";

function Navbar() {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full bg-zinc-900">
      <nav className="Navbar max-w-[1170px] text-white lg:mx-auto flex justify-between py-8 bg-zinc-900 mx-3">
        <div className="flex gap-10 items-center">
          <Link to="/" className="px-1">
            <img src={logo} className="w-[200px]" alt="logo" />
          </Link>
          <a
            href="#how-it-works"
            onClick={handleScroll}
            className="hidden md:block hover:text-red-500"
          >
            How it works
          </a>

          <Link to="" className="hidden lg:block  hover:text-red-500">
            About
          </Link>
        </div>
        <div className="flex gap-6 items-center mx-4">
          <Link
            to="/redirect"
            className="border  border-red-900 bg-red-700 hover:bg-red-500 rounded-md p-2 px-6 hidden md:block "
          >
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
