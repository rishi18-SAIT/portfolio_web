import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex justify-center bg-gradient-to-br from-[#0c0e19] via-[#11142b] to-[#1a1f3c] shadow-2xl mx-0 md:mx-20 rounded-2xl p-8 md:p-12"
    >
      <div className="w-full max-w-6xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition duration-300">
            <IoArrowForward size={22} className="mt-1 text-blue-400" />
            <div>
              <h1 className="text-lg md:text-xl font-semibold">
                Full Stack Developer
              </h1>
              <p className="text-sm text-gray-300 mt-1">
                Build scalable MERN applications with clean UI, secure auth, and efficient backend.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition duration-300">
            <IoArrowForward size={22} className="mt-1 text-green-400" />
            <div>
              <h1 className="text-lg md:text-xl font-semibold">
                Backend & APIs
              </h1>
              <p className="text-sm text-gray-300 mt-1">
                Design REST APIs, manage databases, and optimize performance for scalable systems.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition duration-300">
            <IoArrowForward size={22} className="mt-1 text-purple-400" />
            <div>
              <h1 className="text-lg md:text-xl font-semibold">
                AI & Smart Systems
              </h1>
              <p className="text-sm text-gray-300 mt-1">
                Built AI apps using Gemini API and IoT-based plant monitoring solutions.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition duration-300">
            <IoArrowForward size={22} className="mt-1 text-yellow-400" />
            <div>
              <h1 className="text-lg md:text-xl font-semibold">
                Experience
              </h1>
              <p className="text-sm text-gray-300 mt-1">
                Internship experience in full stack & frontend development with real-world projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;