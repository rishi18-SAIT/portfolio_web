import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostman, SiMysql, SiGooglecloud } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="p-10 md:p-24 bg-gradient-to-br from-[#0c0e19] via-[#11142b] to-[#1a1f3c] text-white"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Experience & Skills
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-6 justify-center md:justify-start">
          
          {[
            { icon: <FaReact color="#61DAFB" size={45} />, name: "React" },
            { icon: <FaNodeJs color="#68A063" size={45} />, name: "Node.js" },
            { icon: <TbBrandJavascript color="#F7DF1E" size={45} />, name: "JavaScript" },
            { icon: <SiMongodb color="#47A248" size={45} />, name: "MongoDB" },
            { icon: <FaPython color="#3776AB" size={45} />, name: "Python" },
            { icon: <FaJava color="#f89820" size={45} />, name: "Java" },
            { icon: <SiMysql color="#00758F" size={45} />, name: "SQL" },
            { icon: <SiPostman color="#FF6C37" size={45} />, name: "Postman" },
            { icon: <FaGitAlt color="#F1502F" size={45} />, name: "Git" },
            { icon: <FaAws color="#FF9900" size={45} />, name: "AWS" },
            { icon: <SiGooglecloud color="#4285F4" size={45} />, name: "GCP" },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center hover:scale-110 hover:shadow-lg transition duration-300"
            >
              {skill.icon}
              <span className="text-xs mt-2 text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="md:w-3/5 space-y-6">

          {/* Sure Trust */}
          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-blue-400">
              Full Stack Developer Intern – Sure Trust
            </h2>
            <p className="text-sm text-gray-400">2025</p>
            <ul className="text-sm text-gray-300 mt-2 list-disc ml-4 space-y-1">
              <li>Developed full-stack applications using MERN stack</li>
              <li>Built REST APIs and implemented authentication systems</li>
              <li>Worked on responsive UI and backend integration</li>
            </ul>
          </div>

          {/* Edunet */}
          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-green-400">
              Frontend Developer Intern – Edunet Foundation
            </h2>
            <p className="text-sm text-gray-400">Aug 2025 – Sep 2025</p>
            <ul className="text-sm text-gray-300 mt-2 list-disc ml-4 space-y-1">
              <li>Developed responsive applications using React.js</li>
              <li>Implemented routing, state management, and authentication</li>
              <li>Collaborated with backend teams and deployed apps</li>
            </ul>
          </div>

          {/* VOIS */}
          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-purple-400">
              Data Analyst Intern – VOIS AICTE
            </h2>
            <p className="text-sm text-gray-400">Oct 2025</p>
            <ul className="text-sm text-gray-300 mt-2 list-disc ml-4 space-y-1">
              <li>Performed EDA on Netflix dataset using Python & Pandas</li>
              <li>Analyzed trends in content type, genre, and country</li>
              <li>Cleaned and structured data for visualization</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;