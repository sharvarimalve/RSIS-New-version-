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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Text */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Welcome to Right Serve Infotech system Pvt.Ltd
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
          Empowering businesses with software, hardware, and marketing solutions
        </p>
        <button className="px-8 py-3 bg-gradient-to-br from-blue-900 via-gray-200 to-white text-blue-900 font-bold text-lg rounded-lg shadow-md hover:bg-green-500 transition">
          Get Started
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"   // 👈 background color (change as per your section bg)
            d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSlider;
