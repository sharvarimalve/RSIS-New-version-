import React, { useEffect } from "react";
import HeroSlider from "../components/Heroslider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsSection from "../components/TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";

interface HomeProps {
  onPageChange: (page: string) => void;
  onGetConnected: () => void;
}


const Home: React.FC<HomeProps> = ({ onPageChange, onGetConnected }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-White">

      <HeroSlider />
      {/* About Section */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text – left se aaye */}
          <div
            className="order-1 md:order-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6">
              About Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify font-semibold text-base sm:text-lg">
              Right Serve Infotech Systems Private Limited is a leading provider of
              comprehensive software and hardware solutions, dedicated to empowering
              businesses across diverse industries. We've grown into a trusted name,
              offering both custom-tailored and product-based solutions to meet the
              unique needs of our clients.
            </p>
            <button
              onClick={() => onPageChange("about-us")}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-[#002147] text-white text-base sm:text-lg rounded-lg shadow-md hover:bg-[#001530] transition"
            >
              Read More
            </button>
          </div>

          {/* Image – right se aaye */}
          <div
            className="flex justify-center order-2 md:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="https://www.cyberoptik.net/wp-content/uploads/2023/08/design-marketing.svg"
              alt="SEO Strategy"
              className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>



      {/* Services / Cards Section */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] mb-12 sm:mb-20 md:mb-40 text-center">
        Technology and industry expertise.
      </h3>

      <section className="bg-[#002147] py-10 sm:py-16 md:py-20 rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px] rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[80px] mx-4 sm:mx-10 md:mx-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 -mt-28 sm:-mt-40 md:-mt-60">
            {/* Card 1 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/software.jpg"
                  alt="Paid Search"
                  className="w-[40] h-[40] object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3">
                Software
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We prioritize your satisfaction by delivering exceptional software
                development services tailored to your unique needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/hardware.jpg"
                  alt="SEO Copywriting"
                  className="w-[40] h-[40]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3">
                Hardware
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We offer reliable hardware solutions designed to support your IT
                infrastructure and enhance operational efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="/marketing .jpg"
                  alt="Technical SEO"
                  className="w-[40] h-[40]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#002147] mb-3">
                Marketing
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                From SEO and content marketing to social media management and online
                advertising, our expert team will help you drive traffic, increase
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Industry Section (like screenshot) */}
      <section className="bg-[#002147] rounded-bl-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px] rounded-br-[40px] sm:rounded-br-[60px] md:rounded-br-[80px] mx-4 sm:mx-10 md:mx-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 sm:py-14 md:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Web Design for Every Industry
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto">
            We understand what it takes to make your website stand out,
            regardless of which industry you’re in.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 text-center fade-right">
            {/* Industry Cards */}
            <div>
              <img
                src="/lowfirm.jpg"
                alt="Attorneys"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mx-auto mb-4 w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-30 object-cover"
              />
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                Attorneys & Law Firms
              </p>
            </div>

            <div>
              <img
                src="/construction.jpg"
                alt="Construction"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mx-auto mb-4 w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-30 object-cover"
              />
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                Construction
              </p>
            </div>

            <div>
              <img
                src="/IT .jpg"
                alt="IT MSP"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mx-auto mb-4 w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-30 object-cover"
              />
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                IT & MSP
              </p>
            </div>

            <div>
              <img
                src="/library.jpg"
                alt="Libraries"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mx-auto mb-4 w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-30 object-cover"
              />
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                Libraries
              </p>
            </div>

            <div>
              <img
                src="/Manufacturing.jpg"
                alt="Manufacturers"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mx-auto mb-4 w-24 h-20 sm:w-32 sm:h-24 md:w-40 md:h-30 object-cover"
              />
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                Manufacturers
              </p>
            </div>

            <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex justify-center items-center">
              <button className="px-5 py-2 mb-6 sm:mb-10 md:mb-14 border border-[#e5e7eb] text-[#e5e7eb] rounded-lg hover:bg-gray-500 hover:text-white transition text-sm sm:text-base">
                All Industries
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
            Where are you in the website process?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Not sure where to start? We can help you at any step of the process from getting you online
            to keeping your site thriving!
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#e5e7eb] rounded-xl shadow p-6 text-left flex gap-4 items-start">
              <img
                src="/start.jpg"
                alt="Getting Started"
                className="w-12 h-12 text-green-600 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">Getting Started</h3>
                <p className="text-gray-600 mb-2">
                  I need help with the entire website process.
                </p>

              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#e5e7eb] rounded-xl shadow p-6 text-left flex gap-4 items-start">
              <img
                src="/design.jpg"
                alt="Have a Design"
                className="w-12 h-12 text-green-600 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">Have a Design</h3>
                <p className="text-gray-600 mb-2">
                  I have a design and need to bring it to life.
                </p>

              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#e5e7eb] rounded-xl shadow p-6 text-left flex gap-4 items-start">
              <img
                src="/restart.jpg"
                alt="Need Changes"
                className="w-12 h-12 text-green-600 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">Need Changes</h3>
                <p className="text-gray-600 mb-2">
                  My existing website needs some help.
                </p>

              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#e5e7eb] rounded-xl shadow p-6 text-left flex gap-4 items-start">
              <img
                src="/ongoing.jpg"
                alt="Ongoing Support"
                className="w-12 h-12 text-blue-900 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-[#002147] mb-2">Ongoing Support</h3>
                <p className="text-gray-600 mb-2">
                  My site is good but I need monthly upkeep.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-8">
            Provided Technology
          </h2>

          {/* Right → Left */}
          <div className="overflow-hidden  relative mb-10">
            <div className="flex w-max animate-marquee space-x-12">
              {/* group A */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />



              {/* duplicate group B */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
            </div>
          </div>

          {/* Left → Right */}
          <div className="overflow-hidden relative">
            <div className="flex w-max animate-marqueeReverse space-x-12">
              {/* group A */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />

              {/* duplicate group B */}
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Section */}
      <TestimonialsSection />

    </div>
  );
};

export default Home;
