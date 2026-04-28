import React from "react";

const ProjectCard = ({ title, main, github, demo, tech }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl hover:scale-105 transition duration-300">
      
     

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tech &&
          tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-[#465697] px-2 py-1 rounded-lg"
            >
              {item}
            </span>
          ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        
        {/* Live Demo */}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="text-white px-4 py-2 text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-2xl bg-[#465697]">
              Demo
            </button>
          </a>
        )}

        {/* GitHub */}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="text-white px-4 py-2 text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-2xl border border-[#465697]">
              Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;