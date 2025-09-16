import React, { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/id/1018/1920/1080",
  "https://picsum.photos/id/1015/1920/1080",
  "https://picsum.photos/id/1016/1920/1080",
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden flex items-center justify-center">
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Text */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Welcome to Right Serve Infotech System Pvt. Ltd
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8">
          Empowering businesses with software, hardware, and marketing solutions
        </p>
        {/* Optional button */}
        {/* <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-br from-blue-900 via-gray-200 to-white text-blue-900 font-bold text-sm sm:text-lg rounded-lg shadow-md hover:bg-green-500 transition">
          Get Started
        </button> */}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-gray-400/70"
              }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-16 sm:h-24 md:h-32"
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
