import React from "react";
import { ABOUT_ME } from "./constants";

const About = () => {
  return (
    <div
      id="about-me"
      className=" min-h-[500px] sm:min-h-[600px] max-sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b2735] to-[#0f1a24] text-white "
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/asfalt-dark.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-6xl px-5 py-20">
        <h1 className="text-4xl sm:text-6xl font-bold mb-10">About Me</h1>
        <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
          {ABOUT_ME}
        </p>
      </div>
    </div>
  );
};

export default About;
