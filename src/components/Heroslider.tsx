import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/home2.jpg",
  "/team.jpg",
  "/herohome.jpg",
  "/home2.jpg",
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className=" hero-slider-wrapper relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden flex items-center justify-center">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover home-hero"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-10 text-center px-3 sm:px-6 md:px-10">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-transparent bg-clip-text 
                     bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400
                     text-xl sm:text-3xl md:text-5xl lg:text-6xl 
                     font-extrabold tracking-wider mb-2 sm:mb-4 uppercase drop-shadow-md"
        >
          Welcome
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-gray-200 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold 
                     mb-3 sm:mb-5 relative inline-block
                     after:content-[''] after:absolute after:-bottom-1 after:left-1/2 
                     after:-translate-x-1/2 after:w-3/4 after:h-[3px]
                     after:bg-gradient-to-r after:from-gray-300 after:to-gray-400 drop-shadow"
        >
          Right Serve Infotech System Pvt. Ltd
        </h2>

        <p
          data-aos="fade-left"
          data-aos-delay="600"
          className="text-gray-300 text-xs sm:text-base md:text-lg lg:text-2xl 
                     max-w-[90%] sm:max-w-xl md:max-w-3xl mx-auto
                     italic tracking-wide leading-relaxed"
        >
          Empowering businesses with
          <span className="text-gray-200 font-semibold"> software</span>,
          <span className="text-gray-200 font-semibold"> hardware</span>, and
          <span className="text-gray-200 font-semibold"> marketing</span> solutions
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-gray-400/70"
              }`}
          />
        ))}
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-10 sm:h-16 md:h-24 lg:h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128V320H0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSlider;
