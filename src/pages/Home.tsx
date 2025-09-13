import React from "react";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Carousel */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <ImageCarousel />
      </div>

      {/* About Section */}
      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Image */}
    <div className="flex justify-center">
      <img
        src="https://www.cyberoptik.net/wp-content/uploads/2023/08/design-marketing.svg"
        alt="SEO Strategy"
        className="w-[1100px] h-[750px]" // 👈 yahan height aur width badhayi
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
        About Us
      </h2>
      <p className="text-gray-600 mb-8 leading-relaxed text-justify font-semibold text-lg">
        Right Serve Infotech Systems Private Limited is a leading provider
        of comprehensive software and hardware solutions, dedicated to
        empowering businesses across diverse industries. We've grown into a
        trusted name, offering both custom-tailored and product-based
        solutions to meet the unique needs of our clients. With a focus on
        innovation, quality, and customer satisfaction, we are committed to
        delivering reliable and efficient technology solutions that drive
        growth and enhance operational efficiency.
      </p>
      <button className="px-8 py-3 bg-blue-900 text-white text-lg rounded-lg shadow-md hover:bg-blue-800 transition">
        Read More
      </button>
    </div>
  </div>
</section>


      {/* Services / Cards Section */}
      <section className="bg-blue-950 py-20 rounded-tl-[80px] rounded-tr-[80px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-40">
            {/* Card 1 */}
            <div className="rounded-2xl shadow-lg p-6 bg-white text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-paid-search.svg"
                  alt="Paid Search"
                  className="w-16 h-16"
                />
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
                <img
                  src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-seo-copywriting.svg"
                  alt="SEO Copywriting"
                  className="w-16 h-16"
                />
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
                <img
                  src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-technical-seo.svg"
                  alt="Technical SEO"
                  className="w-16 h-16"
                />
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
      <section className="bg-blue-950  mb-20 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Web Design for Every Industry
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            We understand what it takes to make your website stand out,
            regardless of which industry you’re in.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
            {/* Industry Cards */}
            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-law.svg"
                alt="Attorneys"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Attorneys & Law Firms</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-construction.svg"
                alt="Construction"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Construction</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-it.svg"
                alt="IT MSP"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">IT & MSP</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-library.svg"
                alt="Libraries"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Libraries</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-manufacturing.svg"
                alt="Manufacturers"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Manufacturers</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-nonprofit.svg"
                alt="Nonprofits"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Nonprofits</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-therapy.svg"
                alt="Therapists"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Therapists</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-transport.svg"
                alt="Transportation"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Transportation</p>
            </div>

            <div>
              <img
                src="https://www.cyberoptik.net/wp-content/uploads/2023/08/icon-travel.svg"
                alt="Travel"
                className="mx-auto mb-4 w-12 h-12"
              />
              <p className="text-white font-semibold">Travel & Tourism</p>
            </div>

            <div>
              <button className="px-5 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">
                All Industries
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Where are you in the website process?
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Not sure where to start? We can help you at any step of the process from getting you online 
      to keeping your site thriving!
    </p>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow p-6 text-left flex gap-4 items-start">
        <img
          src="https://www.svgrepo.com/show/503144/rocket-launch.svg"
          alt="Getting Started"
          className="w-12 h-12 text-green-600"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">Getting Started</h3>
          <p className="text-gray-600 mb-2">
            I need help with the entire website process.
          </p>
          <a href="#" className="text-green-600 font-medium hover:underline">
            How It Works →
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow p-6 text-left flex gap-4 items-start">
        <img
          src="https://www.svgrepo.com/show/530439/web.svg"
          alt="Have a Design"
          className="w-12 h-12 text-green-600"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">Have a Design</h3>
          <p className="text-gray-600 mb-2">
            I have a design and need to bring it to life.
          </p>
          <a href="#" className="text-green-600 font-medium hover:underline">
            Let’s Talk →
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow p-6 text-left flex gap-4 items-start">
        <img
          src="https://www.svgrepo.com/show/493680/tools.svg"
          alt="Need Changes"
          className="w-12 h-12 text-green-600"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">Need Changes</h3>
          <p className="text-gray-600 mb-2">
            My existing website needs some help.
          </p>
          <a href="#" className="text-green-600 font-medium hover:underline">
            Let’s Talk →
          </a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl shadow p-6 text-left flex gap-4 items-start">
        <img
          src="https://www.svgrepo.com/show/532499/settings.svg"
          alt="Ongoing Support"
          className="w-12 h-12 text-green-600"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">Ongoing Support</h3>
          <p className="text-gray-600 mb-2">
            My site is good but I need monthly upkeep.
          </p>
          <a href="#" className="text-green-600 font-medium hover:underline">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
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
