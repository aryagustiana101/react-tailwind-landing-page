import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6 ">
      {/* Flex Container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <a href="/#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Products
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        {/* Button */}
        <a href="/#" className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
          Get Started
        </a>

        {/* Hamburger icon menu (Custom CSS)*/}
        <button id="menu-btn" className={`block hamburger md:hidden focus:outline-none ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div id="menu" className={`absolute flex-col items-center  ${open ? "flex" : "hidden"} self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
          <a href="/#">Pricing</a>
          <a href="/#">Products</a>
          <a href="/#">About Us</a>
          <a href="/#">Careers</a>
          <a href="/#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
