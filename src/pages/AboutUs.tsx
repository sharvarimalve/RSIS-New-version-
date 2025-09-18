import React, { useEffect, useState, useRef } from "react";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AboutProps {
  onPageChange: (page: string) => void;
}

const AboutUs: React.FC<AboutProps> = ({onPageChange}) => {
  /* ------------ DATA ------------ */
  const heroImages = ["/heroabout.jpg"];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Innovation",
      description:
        "We embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "We work closely with clients to achieve shared success.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description:
        "We aim for perfection in every project with high standards.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Integrity",
      description:
        "Honesty, transparency & ethics define all our dealings.",
    },
  ];

  const milestones = [
    { year: "2019", event: "Company Founded", description: "Started with a vision to transform businesses through technology." },
    { year: "2020", event: "First Major Client", description: "Successfully delivered our first enterprise solution." },
    { year: "2021", event: "100+ Projects", description: "Reached 100 completed projects." },
    { year: "2022", event: "Team Expansion", description: "Expanded to 50+ skilled professionals." },
    { year: "2023", event: "Industry Recognition", description: "Received awards for innovation & excellence." },
    { year: "2024", event: "500+ Happy Clients", description: "Serving 500+ satisfied clients worldwide." },
  ];

  const stats = [
    { icon: <TrendingUp size={24} />, value: 500, label: "Happy Clients" },
    { icon: <Award size={24} />, value: 250, label: "Projects Delivered" },
    { icon: <Users size={24} />, value: 50, label: "Expert Team" },
  ];

  /* ------------ HOOKS ------------ */
  const [currentImage, setCurrentImage] = useState(0);
  const [visible, setVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(id);
  }, [heroImages.length]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => statsRef.current && obs.unobserve(statsRef.current);
  }, []);



  /* ------------ RENDER ------------ */
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* -------- HERO -------- */}
      <section className="relative h-[420px] sm:h-[500px] md:h-[500px] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 "opacity-100 z-10" : "opacity-0"`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full bg-black/40 px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            About Right Serve Infotech Systems
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
            Transforming businesses through innovative technology since 2019
          </p>
        </div>
      </section>

      {/* -------- OUR STORY -------- */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* mobile → flex-col (text pehle, image baad me), desktop → flex-row */}
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Text Block */}
            <div className="flex-1 space-y-4 md:order-1" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 text-justify">
                Right Serve Infotech Systems Private Limited is a leading provider of comprehensive software and hardware solutions, dedicated to empowering businesses across diverse industries.
                We've grown into a trusted name, offering both custom-tailored and product-based solutions to meet the unique needs of our clients.
                With a focus on innovation, quality, and customer satisfaction, we are committed to delivering reliable and efficient technology solutions that drive growth and enhance operational efficiency.

              </p>
              <p className="text-base sm:text-lg text-gray-600 text-justify">
                Our journey began with a small team of passionate technologists who believed that the right technology, when properly implemented, could transform any business.
                Today, we have grown into a trusted partner for over 500 clients across various industries, delivering solutions that not only meet current needs but also prepare businesses for future challenges.

              </p>

              <div
                ref={statsRef}
                className="flex flex-wrap justify-center md:justify-start gap-5 mt-6"
              >
                {stats.map((s, i) => (
                  <StatCard key={i} {...s} visible={visible} delay={i * 200} />
                ))}
              </div>
            </div>

            {/* Image Block */}
            <div className="flex-1 md:order-2" data-aos="fade-up">
              <div className="p-1 rounded-full bg-gradient-to-br from-[#004aad] to-[#3278cd] inline-block">
                <img
                  src="/about-us.png"
                  alt="Our Team"
                  className="rounded-full w-48 h-48 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] object-cover border-8 border-white"
                />
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* -------- MISSION & VISION -------- */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <MissionVision
            title="Our Mission"
            text=" Our mission is to be a leading provider of innovative software solutions and reliable hardware products,
                tailored to meet diverse industry needs. We aim to enhance business efficiency through cutting-edge technology,
                and a commitment to continuous improvement, ensuring our clients achieve their goals with confidence and ease.
"
            img="/mission.jpg"
          />
          <MissionVision
            title="Our Vision"
            text="Our vision is to deliver high-quality, customized software and robust hardware solutions that meet the evolving demands of our clients.
                We strive to achieve superior customer satisfaction and drive business growth by staying ahead of technological trends,
                fostering innovation, and maintaining a strong commitment to excellence in every aspect of our services.
"
            img="/visions.jpg"
            reverse
          />
        </div>
      </section>

      {/* -------- CORE VALUES -------- */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147]">
              Our Core Values
            </h2>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">
              Principles guiding everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
                className="bg-white border border-[#002147] rounded-xl p-6 shadow hover:-translate-y-2 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#002147] to-[#004aad] text-white flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#002147]">
                    {v.title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- TIMELINE -------- */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Journey
            </h2>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">
              Key milestones in our growth
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />
            {milestones.map((m, i) => (
              <TimelineItem key={i} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-8 sm:py-12 bg-[#001F54] rounded-2xl">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
          <div className="relative w-full lg:w-1/2 flex justify-center h-64 sm:h-80 lg:h-96">
            <img src="https://www.cyberoptik.net/wp-content/uploads/2023/08/rocket.svg" alt="Rocket Launch" className="absolute bottom-0 h-56 sm:h-72 lg:h-[28rem] object-contain" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">“Let’s Build Something Amazing Together 🚀”</h2>
            <p className="mb-6 text-sm sm:text-base">
              Have an idea or project in mind? Share it with us and our experts will craft the perfect solution tailored for your business. <strong>Right Serve Infotech System</strong> 
            </p>
              <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-[#001F54] font-semibold rounded-full hover:bg-cyan-100 transition text-sm sm:text-base"
                      onClick={() => onPageChange("contact")}
              >
                Get A Proposal
              </button>
          </div>
        </div>
      </section>

      {/* -------- WHY CHOOSE -------- */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Why Choose RSIS?
            </h2>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">
              What makes us the right partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {[
                { icon: <Award size={24} />, title: "Experience & Expertise", text: "5+ years in IT delivering technical excellence." },
                { icon: <Users size={24} />, title: "Client-Centric Approach", text: "Solutions tailored to your goals." },
                { icon: <ShieldCheck size={24} />, title: "Quality Assurance", text: "Best practices ensure reliability." },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#002147] to-[#004080] text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Why Choose Us"
                className="w-full rounded-xl shadow hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* -------- SMALL COMPONENTS -------- */
const StatCard = ({
  icon,
  value,
  label,
  visible,
  delay,
}: {
  icon: JSX.Element;
  value: number;
  label: string;
  visible: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (visible) {
      let start = 0;
      const step = value / (1500 / 16);
      const t = setInterval(() => {
        start += step;
        if (start >= value) {
          clearInterval(t);
          setCount(value);
        } else setCount(Math.ceil(start));
      }, 16);
      return () => clearInterval(t);
    }
  }, [visible, value]);
  return (
    <div
      className={`bg-[#d4d8dc] p-5 rounded-xl w-36 sm:w-40 text-center shadow transition ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-1 flex justify-center">{icon}</div>
      <h3 className="text-2xl sm:text-3xl font-bold">{count}+</h3>
      <p className="text-xs sm:text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
};

const MissionVision = ({
  title,
  text,
  img,
  reverse,
}: {
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
}) => (
  <div
    className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-12`}
  >
    <div className="flex-1" data-aos={reverse ? "fade-left" : "fade-right"}>
      <img
        src={img}
        alt={title}
        className="w-full rounded-lg shadow hover:scale-105 transition-transform"
      />
    </div>
    <div
      className="flex-1 text-center md:text-left space-y-3"
      data-aos={reverse ? "fade-right" : "fade-left"}
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h3>
      <p className="text-base sm:text-lg text-gray-600">{text}</p>
    </div>
  </div>
);

const TimelineItem = ({
  year,
  event,
  description,
  index,
}: {
  year: string;
  event: string;
  description: string;
  index: number;
}) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className={`relative mb-8 md:mb-16 flex flex-col md:flex-row ${index % 2
      ? "md:items-start md:pl-8"
      : "md:flex-row-reverse md:items-start md:pr-8"
      }`}
  >
    <div className="bg-white p-6 rounded-lg shadow w-full md:w-[45%]">
      <div className="text-lg sm:text-xl font-bold text-[#004aad]">{year}</div>
      <h4 className="text-xl sm:text-2xl font-semibold mt-1">{event}</h4>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#004aad] items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full" />
    </div>
  </div>
);

export default AboutUs;
