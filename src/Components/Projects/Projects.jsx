import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-5 md:p-24 text-white bg-gradient-to-br from-[#0c0e19] via-[#11142b] to-[#1a1f3c]"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="flex flex-wrap gap-10 justify-center">

        {/* QuickAI */}
        <ProjectCard
          title="QuickAI – AI Productivity Web App"
          main="Built an AI-powered web app using React and Node.js. Integrated Google Gemini API for generating blogs, resumes, and images. Used Clerk for authentication and Cloudinary for media handling."
          github="https://github.com/rishi18-SAIT/QuickAi.git"
          demo="https://quick-ai-seven-snowy.vercel.app/"
          tech={["React", "Node.js", "Gemini API", "Cloudinary"]}
          image="/quickai.png"
        />

        {/* Tours Website */}
        <ProjectCard
          title="Tours & Travels Booking Website"
          main="Developed a full-stack MERN application for browsing and booking tours. Implemented REST APIs, authentication, and a responsive UI for seamless user experience."
          github="https://github.com/rishi18-SAIT/tour-travel.git"
          demo="#"
          tech={["React", "Node.js", "MongoDB", "Express"]}
          image="/tour.png"
        />

        {/* Movie Watchlist */}
        <ProjectCard
          title="Movie Watchlist Web App"
          main="Developed a movie watchlist app to search, add, and manage favorite movies. Integrated APIs for real-time movie data and built a dynamic UI using React."
          github="https://github.com/rishi18-SAIT/RishikeshG29_2_Miniproject.git"
          demo="https://rishikesh-movie-watchlist.netlify.app"
          tech={["React", "API", "JavaScript", "CSS"]}
          image="/movie.png"
        />

        {/* Smart Plant Monitoring */}
        <ProjectCard
          title="AgriLeafGuard – Smart Plant Monitoring System"
          main="IoT-based system using NodeMCU, DHT11, LDR, and soil moisture sensors. Automated irrigation and monitored plant health in real-time."
          github="https://github.com/rishi18-SAIT/smartplantmonitoring.git"
          demo="#"
          tech={["IoT", "NodeMCU", "Sensors", "Automation"]}
          image="/plant.png"
        />

        {/* Truth Engine */}
        <ProjectCard
          title="Truth Engine"
          main="Frontend for a fake news detection and emotion analysis platform. Built with React.js featuring a clean UI and dashboard for analyzing trending topics."
          github="https://github.com/rishi18-SAIT/Truth-engine.git"
          demo="https://truth-engine.netlify.app"
          tech={["React", "AI", "API", "Dashboard"]}
          image="/truth.png"
        />

      </div>
    </div>
  );
};

export default Projects;