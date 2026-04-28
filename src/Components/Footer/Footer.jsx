import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-gradient-to-br from-[#0c0e19] via-[#11142b] to-[#1a1f3c] text-white px-6 md:px-20 py-12 border-t border-white/10"
    >
      <div className="flex flex-col items-center text-center gap-6">

        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Let’s Connect
        </h1>

        <p className="text-gray-400 max-w-xl text-sm md:text-lg">
          Feel free to reach out for collaborations or opportunities.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">

          {/* Email */}
          <a
            href="mailto:rishikesh9098@gmail.com"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition duration-300"
          >
            <MdOutlineEmail size={22} className="text-blue-400" />
            Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rishikesh-ranjan-405baa2ba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition duration-300"
          >
            <CiLinkedin size={24} className="text-blue-500" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rishi18-SAIT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition duration-300"
          >
            <FaGithub size={22} className="text-gray-300" />
            GitHub
          </a>

        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Rishikesh Ranjan
      </div>
    </div>
  );
};

export default Footer;