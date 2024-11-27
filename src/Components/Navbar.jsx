import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = ["Home", "About", "Technologies", "Projects"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-black flex justify-between items-center py-3 px-5 sm:px-10 left-1/2 translate-x-[-50%] top-4 rounded-full backdrop-blur-md bg-opacity-20 text-white shadow-md shadow-purple z-10 w-[95%] max-w-5xl">
      {/* Brand / Logo */}
      <div className="text-xl font-bold">Sujee</div>

      {/* Hamburger Icon */}
      <div className="sm:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row justify-center items-center sm:gap-8 gap-4 text-xl absolute sm:static top-14 left-1/2 transform sm:transform-none translate-x-[-50%] sm:translate-x-0 bg-black sm:bg-transparent w-[90%] sm:w-auto p-5 sm:p-0 rounded-lg sm:rounded-none`}
      >
        {menuItems.map((item, index) => (
          <li className="relative group cursor-pointer" key={index}>
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              {item}
            </Link>
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <button className="hidden sm:block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-xl py-1 px-2 rounded-full">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
