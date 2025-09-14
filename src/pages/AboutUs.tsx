import React, { useEffect, useState, useRef } from 'react';
import { Target, Eye, Users, Award, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'We constantly embrace new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We believe in working together with our clients as partners to achieve shared success.',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Integrity',
      description: 'We maintain honesty, transparency, and ethical practices in all our business dealings.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2020', event: 'First Major Client', description: 'Successfully delivered our first enterprise-level solution' },
    { year: '2021', 'event': '100+ Projects', description: 'Reached the milestone of 100 completed projects' },
    { year: '2022', event: 'Team Expansion', description: 'Expanded our team to 50+ skilled professionals' },
    { year: '2023', event: 'Industry Recognition', description: 'Received multiple awards for innovation and excellence' },
    { year: '2024', event: '500+ Happy Clients', description: 'Serving over 500 satisfied clients across various industries' },
  ];

  const heroImages = [
    '/about1.jpg',
    '/about4.jpg',
    // '/about3.jpg',
    // '/about7.jpg',
    // '/about6.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* --------- Stats Animation Logic --------- */
  const stats = [
    { icon: <TrendingUp size={24} className="stat-icon" />, value: 500, label: 'Happy Clients' },
    { icon: <Award size={24} className="stat-icon" />, value: 250, label: 'Projects Delivered' },
    { icon: <Users size={24} className="stat-icon" />, value: 50, label: 'Expert Team Members' },
  ];

  const [visible, setVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40 text-white text-center">
          <div className="animate-fade-in-up-delay-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">About Right Serve Infotech Systems</h1>
            <p className="mt-2 text-lg sm:text-xl md:text-2xl animate-fade-in-up-delay-600">Transforming businesses through innovative technology solutions since 2019</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 md:order-2 animate-fade-in-up">
              <div className="p-1 rounded-full bg-gradient-to-br from-[#004aad] to-[#3278cd] inline-block">
                <img
                  src="/about-us.png"
                  alt="Our Team"
                  className="rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-[550px] md:h-[550px] object-cover border-8 border-white"
                />
              </div>
            </div>
            <div className="flex-1 md:order-1 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                Right Serve Infotech Systems Private Limited is a leading provider of comprehensive software and hardware solutions, dedicated to empowering businesses across diverse industries.
                We've grown into a trusted name, offering both custom-tailored and product-based solutions to meet the unique needs of our clients.
                With a focus on innovation, quality, and customer satisfaction, we are committed to delivering reliable and efficient technology solutions that drive growth and enhance operational efficiency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4 text-justify">
                Our journey began with a small team of passionate technologists who believed that the right technology, when properly implemented, could transform any business.
                Today, we have grown into a trusted partner for over 500 clients across various industries, delivering solutions that not only meet current needs but also prepare businesses for future challenges.
              </p>

              {/* Stats Section */}
              <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10" ref={statsRef}>
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    visible={visible}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Purpose</h2>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 animate-fade-in-left">
            <div className="flex-1 min-w-[300px]">
              <img src="/mission.jpg" alt="Mission" className="w-full rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-[300px] md:text-left text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 md:pl-4">Our Mission</h3>
              <h5 className="text-xl sm:text-2xl font-medium text-gray-600 mb-4 md:pl-4">Empowering Success Through Quality Solutions</h5>
              <p className="text-lg text-gray-600 leading-relaxed md:pl-4 text-justify">
                Our mission is to be a leading provider of innovative software solutions and reliable hardware products,
                tailored to meet diverse industry needs. We aim to enhance business efficiency through cutting-edge technology,
                and a commitment to continuous improvement, ensuring our clients achieve their goals with confidence and ease.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in-right">
            <div className="flex-1 min-w-[300px] md:text-left text-center md:order-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 md:pl-4">Our Vision</h3>
              <h5 className="text-xl sm:text-2xl font-medium text-gray-600 mb-4 md:pl-4">Driving Innovation and Excellence</h5>
              <p className="text-lg text-gray-600 leading-relaxed md:pl-4 text-justify">
                Our vision is to deliver high-quality, customized software and robust hardware solutions that meet the evolving demands of our clients.
                We strive to achieve superior customer satisfaction and drive business growth by staying ahead of technological trends,
                fostering innovation, and maintaining a strong commitment to excellence in every aspect of our services.
              </p>
            </div>
            <div className="flex-1 min-w-[300px] md:order-2">
              <img src="/visions.jpg" alt="Vision" className="w-full rounded-lg shadow-lg hover:scale-[1.05] transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002147]">Our Core Values</h2>
            <p className="mt-2 text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="bg-white border-2 border-[#002147] rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-[#004aad]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#002147] to-[#004aad] text-white flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[#002147]">
                    {value.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-6">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-2 text-gray-600 text-lg">Key milestones in our growth story</p>
          </div>
          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`relative mb-8 md:mb-16 flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse md:pr-[calc(50%+40px)]' : 'md:flex-row md:pl-[calc(50%+40px)]'}`}
              >
                <div className={`relative flex-1 md:w-1/2 p-6 rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl`}>
                  <div className="text-xl font-bold text-[#004aad]">{milestone.year}</div>
                  <h4 className="text-2xl font-semibold text-gray-900 mt-2">{milestone.event}</h4>
                  <p className="text-gray-600 mt-2">{milestone.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#004aad] flex items-center justify-center z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-5 bg-[#001F54] rounded-2xl">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
          {/* Left Side - Rocket Image */}
          <div
            className="relative w-full lg:w-1/2 flex justify-center h-80 lg:h-96 overflow-visible"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              src="https://www.cyberoptik.net/wp-content/uploads/2023/08/rocket.svg"
              alt="Rocket Launch"
              className="absolute bottom-0 h-[22rem] lg:h-[28rem] object-contain"
            />

          </div>

          {/* Right Side - Text */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a reliable website partner for your business?
            </h2>
            <p className="mb-6">
              For the very best in web design, branding, and digital marketing, call{" "}
              <strong>Right Serve Infotech System</strong> at{" "}
              <a
                href="tel:6302966932"
                className="text-cyan-300 hover:text-cyan-200 font-semibold"
              >
                (630) 296-6932
              </a>
              .
            </p>
            <a href="/contact">
              <button className="px-6 py-3 bg-white text-[#001F54] font-semibold rounded-full hover:bg-cyan-100 transition">
                Get A Proposal
              </button>
            </a>
          </div>
        </div>
      </section>



      {/* Why Choose rsis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose RSIS?</h2>
            <p className="mt-2 text-gray-600 text-lg">What makes us the right partner for your business transformation</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md mb-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg" data-aos="fade-right">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#002147] to-[#004080] rounded-full text-white shadow-md">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience & Expertise</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    With over 5 years of experience in the IT industry, our team brings
                    deep technical expertise and business acumen to every project.
                    We have successfully delivered solutions across various domains
                    including healthcare, finance, retail, manufacturing, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md mb-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg" data-aos="fade-right" data-aos-delay="100">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#002147] to-[#004080] rounded-full text-white shadow-md">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric Approach</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We believe that every client is unique, and so are their challenges.
                    Our approach is to understand your business goals, analyze your specific
                    requirements, and deliver tailored solutions that align with your
                    objectives and budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg" data-aos="fade-right" data-aos-delay="200">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#002147] to-[#004080] rounded-full text-white shadow-md">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Quality is not just a buzzword for us; it's embedded in our DNA.
                    We follow industry best practices, rigorous testing methodologies,
                    and continuous improvement processes to ensure that our solutions
                    meet the highest standards of quality and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-slide-in-right" data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Why Choose Us"
                className="w-full rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS animations (can be moved to a CSS file or a tailwind plugin) */}
      <style jsx>{`
        /* Fade up animation with delay */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up-delay-300 {
          opacity: 0;
          animation: fadeInUp 1s forwards;
          animation-delay: 0.3s;
        }
        .animate-fade-in-up-delay-600 {
          opacity: 0;
          animation: fadeInUp 1s forwards;
          animation-delay: 0.6s;
        }

        /* Stats Card specific styles to handle the animation */
        .stat-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .stat-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Slide in left/right animations */
        @keyframes slideLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          opacity: 0;
          animation: slideLeft 1s ease forwards;
        }
        .animate-slide-in-right {
          opacity: 0;
          animation: slideRight 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

/* -----------------------------
   StatCard Component
------------------------------ */
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
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [visible, value]);

  return (
    <div
      className={`stat-card bg-[#d4d8dc] text-white p-5 rounded-xl w-40 text-center shadow-lg transition-all duration-600 ease-out ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-2 text-gray-800">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-800">{count}+</h3>
      <p className="text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
};

export default AboutUs;