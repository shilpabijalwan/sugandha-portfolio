import React from "react";

function Home() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1b2735] to-[#0f1a24] text-white"
      id="home"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-[url('/asfalt-dark.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

      {/* Light radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#ffffff1a] blur-[100px] rounded-full z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 sm:py-24">
        {/* Headings */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-snug">
          I'm <span className="text-[#017084] font-bold">Sugandha Bakshi</span>
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl mt-6 font-medium">
          Talent Acquisition Partner
        </h1>

        <div className="flex justify-center mt-16 sm:mt-20 relative">
          <div className="absolute top-1/2 -translate-y-1/2 w-[260px] h-[290px] sm:w-[320px] sm:h-[360px] md:w-[380px] md:h-[420px] bg-[#ffd277] rounded-[60%_40%_30%_70%_/_50%_60%_40%_50%] blur-[2px] z-0"></div>

          <img
            src="/sugtransformed.png"
            alt="Creative"
            className="relative z-10 h-[240px] sm:h-[300px] md:h-[360px] w-auto object-cover rounded-3xl p-8"
          />
        </div>

        {/* Button */}
        <div className="mt-14 flex justify-center w-full">
          <button className="Btn px-6 py-3 text-base sm:text-lg">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
