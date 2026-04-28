import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 text-white px-6 md:px-20 py-4 flex justify-between items-center">

      {/* Logo */}
      <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
      
      </span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold">
        <a href="#About">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </a>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-0 w-full bg-[#0c0e19] text-white flex flex-col items-center gap-6 py-6 shadow-lg md:hidden">
          <a href="#About" onClick={() => setMenu(false)}>About</a>
          <a href="#Experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#Projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#Footer" onClick={() => setMenu(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;