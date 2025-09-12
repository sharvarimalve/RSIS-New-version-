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
    <div className="relative w-full h-screen flex items-center justify-center">
      {carouselImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute transition-opacity duration-700 rounded-none w-full h-full object-cover ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-green-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
