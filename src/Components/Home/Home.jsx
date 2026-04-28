import React from "react";
import avatarImg from "../../assets/Profile_Pic.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 bg-gradient-to-br from-[#0c0e19] via-[#11142b] to-[#1a1f3c]">
      
      {/* Left Section */}
      <div className="md:w-2/4 md:pt-10">

        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight">
          <TextChange />
        </h1>

        {/* Description */}
        <p className="text-sm md:text-xl mt-6 text-gray-300 leading-relaxed max-w-lg">
          Full Stack Developer specializing in MERN stack and AI-powered applications. 
          I build scalable, high-performance web solutions with clean UI, robust backend systems, 
          and intelligent integrations.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">

          {/* Contact Button */}
          <a href="#Footer">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-blue-500/40 transition duration-300">
              Contact Me
            </button>
          </a>

          {/* Resume Button */}
          <a
            href="/Rishikesh_Resume.pdf"
            download
            className="border border-gray-400 px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black hover:scale-105 transition duration-300 backdrop-blur-md"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 md:mt-0 relative">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>

        <img
          className="relative w-72 md:w-96 rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 hover:shadow-purple-500/30 transition duration-500"
          src={avatarImg}
          alt="Rishikesh Avatar"
        />
      </div>
    </div>
  );
};

export default Home;