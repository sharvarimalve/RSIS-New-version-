import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Linkedin, Twitter, Mail } from "lucide-react";

const OurTeam: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const leaders = [
    {
      name: "Rahul Singh Chaudhari",
      position: "Director",
      image: "/rahul_chaudhari.jpeg",
      bio: "Leading with vision, expertise, and dedication to drive continuous innovation and company growth.",
    },
    {
      name: "Piyush Pandey",
      position: "Director",
      image: "/piyush_pandey.jpg",
      bio: "Focused on strategic innovation and excellence, driving growth and inspiring success.",
    },
    {
      name: "Saurabh Jagthap",
      position: "Director",
      image: "/saurabh_jagthap.jpg",
      bio: "Shaping our future with vision, bold strategies, and a passion for technological advancement.",
    },
    {
      name: "Roshan Arikar",
      position: "Team Lead",
      image: "/roshan_arikar.jpeg",
      bio: "Combining technical expertise with visionary leadership to drive success and strategic growth.",
    },
    {
      name: "Sonam Chaudhari",
      position: "CFO",
      image: "/sonam chaudhari.jpeg",
      bio: "Driving financial strategy with insight, precision, and dedication to organizational success.",
    },
    {
      name: "M. A. Kadir",
      position: "Software Engineer",
      image: "/qadir.jpg",
      bio: "AI & ML expert, creating intelligent solutions with advanced algorithms and data-driven insights.",
    },
    {
      name: "Rajwal Jambhule",
      position: "Software Engineer",
      image: "/rajwal_jambhule.jpg",
      bio: "Innovative problem-solver, crafting robust solutions and ensuring code quality and efficiency.",
    },
    {
      name: "Abhishek Tijare",
      position: "Software Engineer",
      image: "/abhishek_tijare.jpeg",
      bio: "Driving financial strategy with insight, precision, and dedication to organizational success.",
    },
    {
      name: "Sakshi Wankhede",
      position: "Software Engineer",
      image: "/sakshi_wankhede.jpg",
      bio: "Focused on developing cutting-edge software and optimizing performance for user satisfaction.",
    },
    {
      name: "Jayshree Bawankar",
      position: "Software Engineer",
      image: "/jayshree-Bawankar.jpg",
      bio: "Passionate coder, dedicated to creating elegant solutions and driving technological innovation.",
    },
    {
      name: "Aarya Pandey",
      position: "Graphics Designer",
      image: "/aarya_pandey.jpg",
      bio: "Crafting visually stunning designs that captivate and communicate brand essence effectively.",
    },
  ];

  return (
    <div className="bg-white">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/team1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Amazing Team
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              The talented individuals behind Right Serve Infotech Systems'
              success
            </p>
          </div>
        </div>
      </section>

      {/* ===== Leadership Section ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Leadership Team
            </h2>
            <p className="text-gray-600 mt-2">Meet the experts behind our success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl shadow-md border border-gray-100 p-6 pt-10 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 150}
                data-aos-duration="800"
              >
                {/* Gradient bar */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-900 to-cyan-600"></div>

                {/* Profile Image */}
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-[#001f4d] mb-1">
                  {leader.name}
                </h3>

                {/* Position */}
                <p className="text-sm font-medium text-gray-500 mb-3">
                  {leader.position}
                </p>

                {/* Bio */}
                <p className="text-sm text-black leading-relaxed mb-5">
                  {leader.bio}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 text-[#001f4d]">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-blue-800 transition-colors duration-300"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-blue-800 transition-colors duration-300"
                  >
                    <Twitter size={22} />
                  </a>
                  <a
                    href="#"
                    aria-label="Mail"
                    className="hover:text-blue-800 transition-colors duration-300"
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
