import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      id="Hero"
    >
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Recruitment agency banner"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 text-white"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-0">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-accent">Connect</span> with the best IT Jobs
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-lg">
          Join leading tech companies with our expert recruitment services. Let
          us connect you with the job you deserve.
        </p>
        <button className="button-action" onClick={() => navigate("/jobs-all")}>
          Explore Jobs
        </button>
      </div>
    </div>
  );
};

export default Hero;
