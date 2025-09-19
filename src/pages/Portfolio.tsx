import React from "react";
import { Calendar, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioProps {
    onPageChange: (page: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onPageChange }) => {
    // Stats for hero section
    const stats = [
        { number: "150+", label: "Projects Completed" },
        { number: "120+", label: "Happy Clients" },
        { number: "7+", label: "Years Experience" },
        { number: "24/7", label: "Support" },
    ];


    //  Projects (your full list kept)
    const projects = [

        // Software Development
        {
            id: 1,
            title: "MDR Management Software",
            category: "Software Development",
            description: "Financing software highlights bank-specified MDR rates and is used by large enterprises, including multinational companies, for financial management.",
            image: "public/software-porfolio.png",
            technologies: ["React", "Node.js", "MongoDB"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 2,
            title: "NSM & Association",
            category: "Software Development",
            description: "Web and mobile CRM solutions give field executives real-time access to customer data, enhancing lead tracking, scheduling, and communication.",
            image: "public/nsm3 (1)app.png",
            technologies: ["React", "Node.js", "MongoDB"],
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
            technologies: ["React", "Node.js", "MongoDB",],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },

        {
            id: 4,
            title: "Blue Ladder",
            category: "Software Development",
            description: "Effective project planning uses collaboration tools and resource allocation to enhance communication and align teams for successful outcomes.",
            image: "/blue3laddere app.png",
            technologies: ["React", "Node.js", "MongoDB",],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 5,
            title: "Inventory Management System",
            category: "Software Development",
            description: "Efficient inventory tracking provides real-time stock visibility, reduces excess and stockouts, and enables informed purchasing for enhanced productivity.",
            image: "/Inventory.png",
            technologies: ["React", "Node.js", "MongoDB"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 6,
            title: "Shikshasutra",
            category: "Software Development",
            description: "A School ERP system streamlines and manages academic processes, enhancing efficiency and organization within educational institutions.",
            image: "/shikshasutr.png",
            technologies: ["React", "Node.js", "MongoDB",],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 7,
            title: "Virtual Pointer Software",
            category: "Software Development",
            description: "The Virtual Painter lets users customize 3D models, changing colors and structure elements for real-time design visualization.",
            image: "/Virtual-pointer-system.png",
            technologies: ["React", "Node.js", "MongoDB",],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },



        // App Development
        {
            id: 8,
            title: "BluLadder",
            category: "App Development",
            description: "Effective project planning uses collaboration tools and resource allocation to enhance communication and align teams for successful outcomes.",
            image: "/blueladderapp.jpg",
            technologies: ["React", "Node.js", "MongoDB", "React Native"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 9,
            title: "Dose Care",
            category: "App Development",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "/DoseCare.jpg",
            technologies: ["React", "Node.js", "MongoDB", "React Native"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 10,
            title: "Citri Hub",
            category: "App Development",
            description: "Secure Build embeds security into the development process, performing vulnerability scans and assessments to ensure compliance with industry standards.",
            image: "/Citrihub.jpg",
            technologies: ["React", "Node.js", "MongoDB", "React Native"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 11,
            title: "NSM & Associates",
            category: "App Development",
            description: "Web and mobile CRM solutions give field executives real-time access to customer data, enhancing lead tracking, scheduling, and communication.",
            image: "/nsmapp.jpg",
            technologies: ["React", "Node.js", "MongoDB", "React Native"],
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
                style={{ backgroundImage: "url('/heroportfolio.jpg')" }}
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
                                        className="w-full h-full object-fill transition duration-500 group-hover:scale-110"
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


            {/* Call to Action */}
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
                            “Let’s Build Something Amazing Together 🚀”
                        </h2>
                        <p className="mb-6">
                            Have an idea or project in mind? Share it with us and our experts will craft the perfect solution tailored for your business.
                            <strong>Right Serve Infotech System</strong> at{" "}

                        </p>
                        <button
                            className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-[#001F54] font-semibold rounded-full hover:bg-cyan-100 transition text-sm sm:text-base"
                            onClick={() => onPageChange("contact")}
                        >
                            Get A Proposal
                        </button>

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

            {/* Video Section */}
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

        </div>
    );
};

export default Portfolio;
