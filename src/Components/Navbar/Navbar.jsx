import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-[#0c0e19]/80 border-b border-white/10 text-white px-5 md:px-20 py-4 flex justify-end md:justify-center items-center">

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-semibold">
        <a href="#About">
          <li className="hover:text-blue-400 transition cursor-pointer">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="hover:text-blue-400 transition cursor-pointer">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="hover:text-blue-400 transition cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="hover:text-blue-400 transition cursor-pointer">
            Contact
          </li>
        </a>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden ml-auto">
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
        <div className="absolute top-16 left-0 w-full h-screen bg-[#0c0e19]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-lg md:hidden">

          <a
            href="#About"
            onClick={() => setMenu(false)}
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#Experience"
            onClick={() => setMenu(false)}
            className="hover:text-blue-400 transition"
          >
            Experience
          </a>

          <a
            href="#Projects"
            onClick={() => setMenu(false)}
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#Footer"
            onClick={() => setMenu(false)}
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

          {/* Resume Button */}
          <a href="/Rishikesh_Resume.pdf" download>
            <button className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition">
              Resume
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;