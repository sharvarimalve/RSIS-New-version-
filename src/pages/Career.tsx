import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  Award,
  TrendingUp,
  Coffee,
  Monitor,
  Code2,
  Cloud,
  Lock,
  Lightbulb,
} from "lucide-react";

const Career: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  const benefits = [
    {
      icon: <Monitor size={60} strokeWidth={2.5} />,
      title: "Cutting-Edge Projects",
      description:
        "Work with the latest web, mobile, and cloud technologies to build impactful solutions.",
    },
    {
      icon: <Code2 size={60} strokeWidth={2.5} />,
      title: "Learn & Grow",
      description:
        "Sharpen your coding skills through continuous learning, mentorship, and knowledge sharing.",
    },
    {
      icon: <Cloud size={60} strokeWidth={2.5} />,
      title: "Modern Infrastructure",
      description:
        "Leverage robust DevOps pipelines and cloud platforms for smooth, scalable deployments.",
    },
    {
      icon: <Lock size={60} strokeWidth={2.5} />,
      title: "Security-First Mindset",
      description:
        "Develop solutions with strong focus on privacy, data safety, and compliance.",
    },
    {
      icon: <Users size={60} strokeWidth={2.5} />,
      title: "Collaborative Culture",
      description:
        "Join supportive peers who value teamwork, open discussions, and collective success.",
    },
    {
      icon: <Award size={60} strokeWidth={2.5} />,
      title: "Recognition & Rewards",
      description:
        "Get acknowledged for creativity, dedication, and delivering high-quality results.",
    },
    {
      icon: <Lightbulb size={60} strokeWidth={2.5} />,
      title: "Innovation at Heart",
      description:
        "Bring your ideas to life in hackathons, R&D sprints, and continuous improvement sessions.",
    },
    {
      icon: <TrendingUp size={60} strokeWidth={2.5} />,
      title: "Career Advancement",
      description:
        "Grow your career path with clear progression, training programs, and leadership tracks.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Apply Online",
      desc: "Submit your application through our career portal with your resume and cover letter",
    },
    {
      step: 2,
      title: "Initial Screening",
      desc: "Our HR team reviews your application and conducts an initial phone screening",
    },
    {
      step: 3,
      title: "Technical Interview",
      desc: "Meet with our technical team to discuss your skills and experience in detail",
    },
    {
      step: 4,
      title: "Final Interview",
      desc: "Final discussion with the hiring manager and team leads about role fit and expectations",
    },
    {
      step: 5,
      title: "Welcome Aboard",
      desc: "Receive your offer letter and join our comprehensive onboarding program",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/career1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <div data-aos="fade-up" className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Build Your Career With Us
            </h1>
            <p className="max-w-xl mx-auto text-base md:text-lg">
              Join a passionate team, work on exciting projects, and grow your
              skills with industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Company Culture ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Company Culture
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Right Serve Infotech Systems, we believe that great
                technology comes from great people. Our culture is built on
                collaboration, innovation, and mutual respect. We foster an
                environment where every team member can thrive, learn, and
                contribute to meaningful projects.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Users size={20} className="text-blue-900" />
                  <span>Collaborative Team Environment</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <TrendingUp size={20} className="text-blue-900" />
                  <span>Continuous Learning Opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Award size={20} className="text-blue-900" />
                  <span>Merit-Based Recognition</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Coffee size={20} className="text-blue-900" />
                  <span>Flexible Work Arrangements</span>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Culture"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits Section ===== */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-20 rounded-t-[60px] text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div data-aos="fade-up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Work With <span className="text-white">Us?</span>
            </h2>
            <p className="text-cyan-100 mt-3 max-w-2xl mx-auto">
              Quick & Easy Capital Empowering Bold & Ambitious Businesses To
              Fuel Their eCommerce Growth
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                className="bg-blue-50 text-blue-900 rounded-2xl p-8 shadow hover:shadow-2xl transition flex flex-col items-center text-center"
              >
                <div className="text-amber-500 mb-4">{benefit.icon}</div>
                <h4 className="font-semibold mb-2 text-lg">{benefit.title}</h4>
                <p className="font-bold text-gray-900">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Application Process ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div
            data-aos="fade-up"
            className="text-center mb-12 text-blue-900"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Application Process
            </h2>
            <p className="text-blue-900/80">
              Our streamlined hiring process designed to find the right fit
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {processSteps.map((item, idx) => (
              <React.Fragment key={idx}>
                <div
                  className="text-center max-w-[160px] mx-auto"
                  data-aos="zoom-in"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-sky-300 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>

                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block text-3xl font-bold text-sky-500">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
