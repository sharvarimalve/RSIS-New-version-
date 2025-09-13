import React from "react";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

const Portfolio: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            category: "Web Development",
            description:
                "A modern e-commerce platform built with React and Node.js, featuring payment integration, inventory management, and analytics dashboard.",
            image:
                "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            client: "RetailMax Solutions",
            date: "2024",
            link: "#",
        },
        {
            id: 2,
            title: "Healthcare Management System",
            category: "Software Development",
            description:
                "Comprehensive healthcare management system with patient records, appointment scheduling, and billing integration.",
            image:
                "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Angular", "Java", "PostgreSQL", "AWS"],
            client: "MediCare Plus",
            date: "2024",
            link: "#",
        },
        {
            id: 3,
            title: "Digital Marketing Campaign",
            category: "Digital Marketing",
            description:
                "Multi-channel marketing campaign that increased client website traffic by 300% and improved conversion rates by 150%.",
            image:
                "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
            client: "TechStart Innovations",
            date: "2023",
            link: "#",
        },
        {
            id: 4,
            title: "Mobile Banking App",
            category: "Mobile Development",
            description:
                "Secure mobile banking application with biometric authentication, real-time transactions, and budget tracking features.",
            image:
                "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
            client: "SecureBank Corp",
            date: "2023",
            link: "#",
        },
        {
            id: 5,
            title: "Enterprise Network Setup",
            category: "Hardware Solutions",
            description:
                "Complete network infrastructure setup for a 500+ employee organization with redundancy and security measures.",
            image:
                "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Cisco", "Firewall", "VPN", "Load Balancer"],
            client: "Global Enterprises Ltd",
            date: "2023",
            link: "#",
        },
        {
            id: 6,
            title: "Learning Management System",
            category: "Web Development",
            description:
                "Interactive learning platform with video streaming, progress tracking, and certification management for online education.",
            image:
                "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
            technologies: ["Vue.js", "Express.js", "MySQL", "AWS S3"],
            client: "EduTech Academy",
            date: "2023",
            link: "#",
        },
    ];

    const categories = [
        "All",
        "Web Development",
        "Software Development",
        "Mobile Development",
        "Digital Marketing",
        "Hardware Solutions",
    ];
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const stats = [
        { number: "50+", label: "Projects Completed" },
        { number: "30+", label: "Happy Clients" },
        { number: "98%", label: "Success Rate" },
        { number: "5+", label: "Years Experience" },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-blue-900/80 to-cyan-700/80 py-24 text-white text-center bg-cover bg-center bg-no-repeat bg-blend-overlay"
                style={{ backgroundImage: "url('/portfolio1.jpg')" }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
                    <p className="text-lg max-w-2xl mx-auto mb-12 text-cyan-100">
                        Showcasing our successful projects and the impact we've made for
                        our clients across various industries
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-bold text-cyan-400">{stat.number}</p>
                                <p className="text-sm text-cyan-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Filter */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
                        Filter Projects
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full border transition ${activeCategory === category
                                    ? "bg-blue-900 text-white"
                                    : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition"
                            >
                                <div className="relative h-56">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition duration-300"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/80 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <h3 className="text-xl font-semibold mb-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-cyan-100 mb-3">
                                                {project.category}
                                            </p>
                                            <a
                                                href={project.link}
                                                className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full hover:scale-110 transition"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-600 text-white">
                                            {project.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-500 text-sm">
                                            <Calendar size={16} /> {project.date}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-blue-900 mb-2">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-cyan-100 text-blue-900 text-xs rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                                        <Users size={16} className="text-cyan-600" />
                                        Client: {project.client}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600">
                            Feedback from our satisfied clients about our work and services
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                text: `"Right Serve Infotech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and commitment to quality is outstanding."`,
                                author: "John Smith",
                                role: "CEO, RetailMax Solutions",
                                img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
                            },
                            {
                                text: `"The healthcare management system they developed has revolutionized our operations. Patient satisfaction has improved significantly, and our staff is more efficient."`,
                                author: "Dr. Sarah Johnson",
                                role: "Director, MediCare Plus",
                                img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
                            },
                            {
                                text: `"Their digital marketing expertise helped us achieve a 300% increase in website traffic. The ROI on our marketing investment has been phenomenal."`,
                                author: "Michael Chen",
                                role: "Marketing Director, TechStart Innovations",
                                img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
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
                                        <h5 className="text-blue-900 font-semibold">{t.author}</h5>
                                        <span className="text-gray-500 text-sm">{t.role}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-cyan-600 font-medium">
                                    <Award size={18} />
                                    5.0 Rating
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">
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
                                >
                                    <p className="text-3xl font-bold text-cyan-600 mb-2">
                                        {m.num}
                                    </p>
                                    <p className="text-gray-700 text-sm font-medium">
                                        {m.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Success Metrics"
                            className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
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
            </section>
        </div>
    );
};

export default Portfolio;
