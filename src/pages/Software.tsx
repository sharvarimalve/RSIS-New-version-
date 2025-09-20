import React, { useEffect } from "react";
import {
    Code,
    Smartphone,
    Cloud,
    Database,
    Shield,
    Zap,
    CheckCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Software: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, offset: 100 });
    }, []);

    const stats = [
        { number: "150+", label: "Software Projects" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Technical Support" },
        { number: "7+", label: "Years Experience" },
    ];

    const services = [
        {
            icon: <Code size={40} />,
            title: "Android App Development",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/android-app-development-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "E-Commerce Web designing Services ",
            description:
                "We create engaging, user-friendly, and conversion-focused e-commerce websites that help businesses sell online with ease. ",
            image:
                "/ecommerce-web-designing-services-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "Dynamic Website Development",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/dynamic-website-development-services-500x500 (1).webp",
        },
        {
            icon: <Code size={40} />,
            title: "Web Hosting And Domain Registration Services",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/web-hosting-and-domain-registration-services-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "Website Development Services",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/website-development-services-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "Mobile App Development Services",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/mobile-app-development-services-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "Software Development Services",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/software-development-services-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "Web Development & Marketing",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "/Web-development-Marketing-500x500.webp",
        },
        {
            icon: <Code size={40} />,
            title: "Custom Web Development",
            description:
                "Tailored web applications built with modern frameworks for optimal performance and user experience.",
            image:
                "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Smartphone size={40} />,
            title: "Mobile App Development",
            description:
                "Native and cross-platform apps for iOS and Android using React Native and native technologies.",
            image:
                "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Cloud size={40} />,
            title: "Cloud Solutions",
            description:
                "Scalable infrastructure and migration services using AWS, Azure, and Google Cloud Platform.",
            image:
                "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Database size={40} />,
            title: "Database Management",
            description:
                "Design, optimization, and management services for SQL and NoSQL databases.",
            image:
                "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Shield size={40} />,
            title: "Cybersecurity Solutions",
            description:
                "Robust implementations including encryption, authentication, and compliance.",
            image:
                "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Zap size={40} />,
            title: "API Development",
            description:
                "RESTful and GraphQL API development for seamless integration between systems.",
            image:
                "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const technologies = [
        {
            name: "React",
            logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
        {
            name: "Node.js",
            logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
        {
            name: "React Native",
            logo: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
        {
            name: "Electron JS",
            logo: "/electron-js.jpg",
        },
        {
            name: "AWS",
            logo: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
        {
            name: "MongoDB",
            logo: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* === Hero Section === */}
            <section
                className="relative h-[500px] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
                style={{ backgroundImage: "url('software-image/software-hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 px-4">
                    <h1
                        className="text-3xl md:text-5xl font-bold mb-2"
                        data-aos="fade-up"
                    >
                        Software Development Services
                    </h1>
                    <p
                        className="max-w-2xl mx-auto text-lg md:text-xl text-cyan-100 mb-10"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        Transform your ideas into powerful software solutions with
                        cutting-edge technology and expert development.
                    </p>
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {stats.map((s, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold text-cyan-400">{s.number}</p>
                                <p className="text-sm text-cyan-100">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Services === */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            Our Software Development Services
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Comprehensive solutions to meet all your software development
                            needs
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((srv, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
                                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={idx * 100}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={srv.image}
                                        alt={srv.title}
                                        className="w-full h-full object-fill transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 to-cyan-600/70 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                                        <div className="text-white">{srv.icon}</div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                        {srv.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm">{srv.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Technologies === */}
            <section className="relative bg-[#040f36] text-white py-20 rounded-t-3xl">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Technologies We Use
                        </h2>
                        <p className="text-cyan-200">
                            Leveraging the latest technologies to build robust and scalable
                            solutions
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-blue-900 rounded-xl shadow p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition"
                                data-aos="zoom-in-up"
                                data-aos-delay={idx * 100}
                            >
                                <div className="w-20 h-20 mx-auto mb-3">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                                <h4 className="font-semibold text-sm">{tech.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Why Choose Us === */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                            Why Choose Our Software Development Services?
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Expert Team",
                                    desc: "Our skilled developers have expertise in multiple technologies and frameworks.",
                                },
                                {
                                    title: "Agile Methodology",
                                    desc: "We follow agile practices for faster delivery and better collaboration.",
                                },
                                {
                                    title: "Quality Assurance",
                                    desc: "Rigorous testing ensures bug-free and high-performance applications.",
                                },
                                {
                                    title: "Scalable Solutions",
                                    desc: "Build applications that grow with your business requirements.",
                                },
                            ].map((b, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-900 mb-1">
                                            {b.title}
                                        </h4>
                                        <p className="text-gray-700 text-sm">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <img
                            src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Software Development"
                            className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Software;
