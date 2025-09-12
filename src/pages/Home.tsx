import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Carousel */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <ImageCarousel />
      </div>

      {/* Section under carousel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://www.cyberoptik.net/wp-content/uploads/2023/08/design-marketing.svg"
              alt="SEO Strategy"
              className="w-[900px] h-[600px]"
            />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify font-medium">
              Right Serve Infotech Systems Private Limited is a leading provider of comprehensive software
              and hardware solutions, dedicated to empowering businesses across diverse industries. We've grown
              into a trusted name, offering both custom-tailored and product-based solutions to meet the unique
              needs of our clients. With a focus on innovation, quality, and customer satisfaction, we are committed
              to delivering reliable and efficient technology solutions that drive growth and enhance operational efficiency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
