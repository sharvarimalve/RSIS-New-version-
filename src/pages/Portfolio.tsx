import React from "react";
import { Calendar, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
    // ✅ Stats for hero section
    const stats = [
        { number: "150+", label: "Projects Completed" },
        { number: "120+", label: "Happy Clients" },
        { number: "12+", label: "Years Experience" },
        { number: "24/7", label: "Support" },
    ];

    // ✅ Projects (your full list kept)
    const projects = [
        {
            id: 1,
            title: "MDR Management Software",
            category: "Software Development",
            description: "Financing software highlights bank-specified MDR rates and is used by large enterprises, including multinational companies, for financial management.",
            image: "public/software-porfolio.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 2,
            title: "NSM & Association",
            category: "Web Development",
            description: "Web and mobile CRM solutions give field executives real-time access to customer data, enhancing lead tracking, scheduling, and communication.",
            image: "public/nsm3 (1)app.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 3,
            title: "Seasionable Business Management",
            category: "Software Development",
            description: "Seasonal billing systems help businesses manage fluctuating sales cycles, maintain cash flow, and enhance efficiency throughout the year.",
            image: "public/sbm3 (1)seanable.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 4,
            title: "BluLadder",
            category: "App Development",
            description: "Effective project planning uses collaboration tools and resource allocation to enhance communication and align teams for successful outcomes.",
            image: "public/blue3laddere app.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 5,
            title: "Secure Build",
            category: "App Development",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "public/app.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 6,
            title: "Secure Build",
            category: "Digital Marketing",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "public/app.png",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 7,
            title: "Secure Build",
            category: "Hardware Solutions",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "public/hardware4.png",
            technologies: ["IOT", "Ardino"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 8,
            title: "Infrastructure Build",
            category: "Hardware Solutions",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "public/hardware3.jpg",
            technologies: ["IOT", "Ardino"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 8,
            title: "Infrastructure Build",
            category: "Digital Marketing",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "public/marketing.jpg",
            technologies: ["communication"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 9,
            title: "Social Media Management",
            category: "Digital Marketing",
            description: "Engage your audience on Instagram, LinkedIn, TikTok, and other channels with strategic content.",
            image: "public/marketing1.jpg",
            technologies: ["communication"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 10,
            title: "Email Marketing",
            category: "Digital Marketing",
            description: "Deliver personalized campaigns and automation flows to nurture and convert your leads..",
            image: "public/marketing2.jpg",
            technologies: ["communication"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },

    ];

    const categories = [
        "All",
        "Software Development",
        "App Development",
        "Digital Marketing",
        "Hardware Solutions",
    ];

    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
        <section
  className="relative h-[500px] flex items-center text-white text-center bg-gradient-to-r from-blue-900/80 to-cyan-700/80 bg-cover bg-center bg-no-repeat bg-blend-overlay"
  style={{ backgroundImage: "url('/portfoliohero.jpg')" }}
>
  <div className="container mx-auto px-4">
    <h1
      className="text-4xl md:text-5xl font-bold mb-6"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Our Portfolio
    </h1>
    <p
      className="text-lg font-bold max-w-2xl mx-auto mb-12 text-white"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Showcasing our successful projects and the impact we've made for our
      clients across various industries
    </p>

    {/* Stats block if needed later */}
    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-[#001F54]">{stat.number}</p>
          <p className="text-sm text-[#001F54]">{stat.label}</p>
        </div>
      ))}
    </div> */}
  </div>
</section>


            {/* Filter */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center text-[#001F54] mb-10">
                        Portfolio
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full border transition ${activeCategory === category
                                    ? "bg-[#001F54] text-white"
                                    : "border-[#001F54] text-[#001F54] hover:bg-[#001F54] hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                data-aos="zoom-in-up"
                                data-aos-delay={idx * 100}
                                className="group bg-white rounded-2xl shadow hover:shadow-2xl hover:border-2 hover:border-[#001F54] transition duration-300 overflow-hidden cursor-pointer"
                            >
                                <div className="relative h-56">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="rounded-full bg-[#001F54] px-3 py-1 text-xs font-medium text-white">
                                            {project.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm text-[#001F54]">
                                            <Calendar size={16} /> {project.date}
                                        </span>
                                    </div>

                                    <h4 className="mb-2 text-lg font-semibold text-[#001F54]">
                                        {project.title}
                                    </h4>
                                    <p className="mb-4 text-sm text-[#001F54]">
                                        {project.description}
                                    </p>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded bg-cyan-100 px-2 py-1 text-xs text-[#001F54]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Users size={16} className="text-[#001F54]" />
                                        Client: {project.client}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            {/* <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#001F54] mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600">
                            Feedback from our satisfied clients about our work and services
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                text: `"Right Serve Infotech delivered an exceptional e-commerce platform that exceeded our expectations."`,
                                author: "Saurabh Jagthap",
                                role: "Director",
                                img: "/saurabh_jagthap.jpg",
                            },
                            {
                                text: `"The healthcare management system they developed has revolutionized our operations."`,
                                author: "Piyush Pandey",
                                role: "Director",
                                img: "/piyush_pandey.jpg",
                            },
                            {
                                text: `"Their digital marketing expertise helped us achieve a 300% increase in website traffic."`,
                                author: "Rahul Chaudhari",
                                role: "Marketing Director",
                                img: "/rahul_chaudhari.jpeg",
                            },
                        ].map((t) => (
                            <div
                                key={t.author}
                                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <p className="text-gray-700 italic mb-6">{t.text}</p>
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={t.img}
                                        alt={t.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h5 className="text-[#001F54] font-semibold">{t.author}</h5>
                                        <span className="text-gray-500 text-sm">{t.role}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-cyan-600 font-medium">
                                    <Award size={18} /> 5.0 Rating
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}


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


            {/* Metrics */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left column */}
                    <div
                        data-aos="zoom-in-right"
                        data-aos-duration="400"
                        data-aos-once="true"
                    >
                        <h2 className="text-3xl font-bold text-[#001F54] mb-6">
                            Our Success in Numbers
                        </h2>
                        <p className="text-gray-600 mb-8">
                            These metrics represent the tangible impact we've made for our
                            clients across different industries and project types.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { num: "95%", label: "Projects Delivered On Time" },
                                { num: "100%", label: "Client Satisfaction Rate" },
                                { num: "250%", label: "Average Performance Improvement" },
                                { num: "24/7", label: "Support Coverage" },
                            ].map((m) => (
                                <div
                                    key={m.label}
                                    className="text-center bg-gray-100 p-6 rounded-lg hover:bg-white hover:shadow transition"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >
                                    <p className="text-3xl font-bold text-cyan-600 mb-2">{m.num}</p>
                                    <p className="text-gray-700 text-sm font-medium">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column */}
                    <div
                        data-aos="zoom-in-left"
                        data-aos-duration="800"
                        data-aos-once="true"
                    >
                        <img
                            src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Success Metrics"
                            className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
                {/* Video background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/public/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Gradient overlay */}
                <div className="absolute " />

                {/* Content */}
                <div className="relative z-10 px-4">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Our Portfolio
                    </h1>
                    <p
                        className="text-lg font-bold max-w-2xl mx-auto mb-12"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Showcasing our successful projects and the impact we've made for our
                        clients across various industries
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-bold text-[#fff]">{stat.number}</p>
                                <p className="text-sm text-[#fff]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            {/* <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Next Project?
                    </h2>
                    <p className="text-cyan-100 mb-8">
                        Let's discuss how we can help you achieve similar success with your
                        next project.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 font-semibold text-white">
                            Start Your Project
                        </button>
                        <button className="px-6 py-3 rounded-full bg-white text-blue-900 font-semibold hover:bg-transparent hover:text-white hover:border-white border transition">
                            View All Services
                        </button>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Portfolio;
