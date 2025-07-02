import React, { useEffect, useRef } from "react";
import { EXPERIENCE } from "./constants";

function ExperienceSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          const prevCard = cardsRef.current[index - 1];

          if (prevCard) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              prevCard.classList.add("blurred");
            } else {
              prevCard.classList.remove("blurred");
            }
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="experience"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b2735] to-[#0f1a24] text-white"
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/asfalt-dark.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-5 py-20">
        <h1 className="text-4xl sm:text-6xl text-center mb-10">Experience</h1>

        {EXPERIENCE.map((ele, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            data-index={index}
            className="card sticky top-0 mb-12 z-10 transition-all duration-500"
          >
            <p className="text-2xl sm:text-[30px] font-semibold text-center p-2 text-[#017084]">
              {ele.company}
            </p>
            <p className="text-base sm:text-lg font-medium text-center text-gray-300 mb-6 sm:mb-10">
              {ele.position}
            </p>

            <ul className="list-disc list-inside text-gray-400">
              {ele.desc.map((desc, i) => (
                <li key={i} className="w-full sm:w-5/6 mx-auto mb-2">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
