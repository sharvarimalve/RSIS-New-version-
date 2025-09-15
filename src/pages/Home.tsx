import React from "react";
import HeroSlider from "../components/Heroslider";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      <HeroSlider />


     {/* About Section */}
<section className="bg-white py-10 md:py-14">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
    {/* Left Image */}
    <div className="flex justify-center">
      <img
        src="https://www.cyberoptik.net/wp-content/uploads/2023/08/design-marketing.svg"
        alt="SEO Strategy"
        className="w-full max-w-xl h-auto"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6">
        About Us
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed text-justify font-medium text-base md:text-lg">
        Right Serve Infotech Systems Private Limited is a leading provider
        of comprehensive software and hardware solutions, dedicated to
        empowering businesses across diverse industries. We've grown into a
        trusted name, offering both custom-tailored and product-based
        solutions to meet the unique needs of our clients. With a focus on
        innovation, quality, and customer satisfaction, we are committed to
        delivering reliable and efficient technology solutions that drive
        growth and enhance operational efficiency.
      </p>
      <button className="px-6 md:px-8 py-3 bg-blue-900 text-white text-base md:text-lg rounded-lg shadow-md hover:bg-blue-800 transition">
        Read More
      </button>
    </div>
  </div>
</section>


      {/* Services / Cards Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-12 md:mb-40 text-center px-4">
      Technology and industry expertise.
      </h2>
      <section className="bg-blue-950 py-12 md:py-20 rounded-tl-[40px] rounded-tr-[40px] md:rounded-tl-[80px] md:rounded-tr-[80px] mx-4 sm:mx-8 md:mx-12 lg:mx-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mt-20 md:-mt-60">
            {/* Card 1 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img src="/software.jpg" alt="Paid Search" className="w-12 h-12 object-cover" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Software</h3>
              <p className="text-gray-600">
                We prioritize your satisfaction by delivering exceptional software
                development services tailored to your unique needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img src="/hardware.jpg" alt="SEO Copywriting" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Hardware</h3>
              <p className="text-gray-600">
                We offer reliable hardware solutions designed to support your IT
                infrastructure and enhance operational efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img src="/marketing .jpg" alt="Technical SEO" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Marketing</h3>
              <p className="text-gray-600">
                From SEO and content marketing to social media management and online
                advertising, our expert team will help you drive traffic, increase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section (like screenshot) */}
      <section className="bg-blue-950 rounded-bl-[40px] rounded-br-[40px] md:rounded-bl-[80px] md:rounded-br-[80px] mx-4 sm:mx-8 md:mx-12 lg:mx-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Web Design for Every Industry
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            We understand what it takes to make your website stand out,
            regardless of which industry you’re in.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 text-center ">
            {/* Industry Cards */}
            <div>
              <img src="/lowfirm.jpg" alt="Attorneys" className="mx-auto mb-4 max-w-[160px] w-full h-auto" />
              <p className="text-white font-semibold">Attorneys & Law Firms</p>
            </div>

            <div>
              <img src="/construction.jpg" alt="Construction" className="mx-auto mb-4 max-w-[160px] w-full h-auto" />
              <p className="text-white font-semibold">Construction</p>
            </div>

            <div>
              <img src="/IT .jpg" alt="IT MSP" className="mx-auto mb-4 max-w-[160px] w-full h-auto" />
              <p className="text-white font-semibold">IT & MSP</p>
            </div>

            <div>
              <img src="/library.jpg" alt="Libraries" className="mx-auto mb-4 max-w-[160px] w-full h-auto" />
              <p className="text-white font-semibold">Libraries</p>
            </div>

            <div>
              <img src="/Manufacturing.jpg" alt="Manufacturers" className="mx-auto mb-4 max-w-[160px] w-full h-auto" />
              <p className="text-white font-semibold">Manufacturers</p>
            </div>



            <div className="col-span-2 sm:col-span-3 lg:col-span-5">
              <button className="px-5 py-2 mb-10 md:mb-14 border border-[#e5e7eb] text-[#e5e7eb] rounded-lg hover:bg-green-500 hover:text-white transition">
                All Industries
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Where are you in the website process?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Not sure where to start? We can help you at any step of the process from getting you online
            to keeping your site thriving!
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#e5e7eb] rounded-xl shadow p-6 text-left flex gap-4 items-start">
              <img
                src="/start.jpg"
                alt="Getting Started"
                className="w-10 h-10 md:w-12 md:h-12 text-green-600 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Getting Started</h3>
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
                className="w-10 h-10 md:w-12 md:h-12 text-green-600 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Have a Design</h3>
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
                className="w-10 h-10 md:w-12 md:h-12 text-green-600 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Need Changes</h3>
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
                className="w-10 h-10 md:w-12 md:h-12 text-blue-900 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Ongoing Support</h3>
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
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
     Provided Technology 
    </h2>

    {/* Right → Left */}
    <div className="overflow-hidden relative mb-10">
      <div className="flex w-max animate-marquee space-x-12">
        {/* group A */}
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />

        {/* duplicate group B */}
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

        {/* duplicate group B */}
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="h-24" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" className="h-24" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" className="h-24" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-24" />
      </div>
    </div>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Don’t just take our word for it – here’s what our clients have to say
            about working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <p className="text-gray-700 mb-4 italic">
                "Right Serve Infotech transformed our business with their custom
                software solutions. The team was professional and delivered on
                time."
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client 1"
                  className="w-12 h-12 rounded-full border"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-blue-900">Rahul Sharma</h4>
                  <p className="text-gray-500 text-sm">CEO, TechWorld</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <p className="text-gray-700 mb-4 italic">
                "Their hardware support is excellent. We were able to upgrade our
                IT infrastructure seamlessly with their help."
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client 2"
                  className="w-12 h-12 rounded-full border"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-blue-900">Priya Verma</h4>
                  <p className="text-gray-500 text-sm">Manager, BuildCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <p className="text-gray-700 mb-4 italic">
                "Our online presence improved drastically with their marketing
                strategies. Highly recommend their services!"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="Client 3"
                  className="w-12 h-12 rounded-full border"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-blue-900">Amit Patel</h4>
                  <p className="text-gray-500 text-sm">Founder, TravelX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
