import React from "react";

const carouselImages = [
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3861945/pexels-photo-3861945.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const ImageCarousel: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const length = carouselImages.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Images */}
      {carouselImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute transition-opacity duration-700 w-full h-full object-cover ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        />
      ))}

      {/* Curved Bottom Overlay */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"  // background ka color (changeable)
            d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,272C1120,288,1280,256,1360,240L1440,224V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-green-500" : "bg-gray-300"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
