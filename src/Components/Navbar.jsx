import React from "react";
const menuItems = ["Home", "About", "Technologies", "Projects"];

const Navbar = () => {
  return (
    <nav className="fixed bg-black flex justify-center items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20] rounded-full backdrop-blur-md bg-opacity-20 text-white shadow-md shadow-purple z-10">
      <ul className="flex justify-center text-xl items-center gap-8">
        {menuItems.map((item, index) => (
          <li className="relative group cursor-pointer group" key={index}>
            {item}
            <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 transition-all duration-300 group-hover:w-full "></span>
          </li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-xl py-1 px-2 rounded-full ">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
