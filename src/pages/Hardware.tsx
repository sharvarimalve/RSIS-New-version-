import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hardware: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, offset: 100 });
    }, []);

    const stats = [
        { number: "150+", label: "Projects" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "24/7", label: "Technical Support" },
        { number: "5+", label: "Years Experience" },
    ];

    const services = [
        {
            title: "Server Solutions",
            description:
                "Enterprise-grade server solutions including setup, configuration, and maintenance for optimal performance and reliability.",
            image: "/Server-image.jpeg",
        },
        {
            title: "Workstation Setup",
            description:
                "Custom workstation configurations tailored for different business needs, from basic office setups to high-end development machines.",
            image: "/workstation-image.jpeg",
        },
        {
            title: "Network Infrastructure",
            description:
                "Complete networking solutions including LAN/WAN setup, wireless networks, and security implementation.",
            image: "/Network-image.jpeg",
        },
        {
            title: "Storage Solutions",
            description:
                "Scalable storage systems including NAS, SAN, and cloud-hybrid solutions for data management and backup.",
            image: "/storage.jpeg",
        },
        {
            title: "Security Hardware",
            description:
                "Physical security solutions including firewalls, access control systems, and surveillance equipment.",
            image:
                "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            title: "Maintenance & Support",
            description:
                "Comprehensive hardware maintenance services including preventive care, repairs, and upgrades.",
            image:
                "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const technologies = [
        { name: "Raspberry Pi", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "Arduino", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
        { name: "ESP32", logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
        { name: "3D Printers", logo: "https://cdn-icons-png.flaticon.com/512/2921/2921824.png" },
        { name: "IoT Sensors", logo: "https://cdn-icons-png.flaticon.com/512/2653/2653461.png" },
        { name: "Network Routers", logo: "https://cdn-icons-png.flaticon.com/512/809/809957.png" },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* === Hero Section === */}
          <section
  className="relative h-[500px] bg-cover bg-center text-white flex flex-col justify-center items-center px-4"
  style={{ backgroundImage: "url('/herohardware.jpg')" }}
>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-up">
      Hardware Solutions & Services
    </h1>
    <p
      className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      Comprehensive hardware solutions designed to power your business with
      reliability, performance, and scalability.
    </p>

    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-3xl font-bold">{stat.number}</p>
          <p className="text-sm">{stat.label}</p>
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
                            Our Hardware Services
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Complete hardware solutions from planning to maintenance
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500"
                                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={idx * 100}
                            >
                                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm">{s.description}</p>
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
                        {technologies.map((tech, i) => (
                            <div
                                key={i}
                                className="bg-white text-blue-900 rounded-lg shadow p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition"
                                data-aos="zoom-in-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-16 h-16 mx-auto mb-3">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-full h-full object-contain"
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
                            Why Choose Our Hardware Development Services?
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Cutting-Edge Devices",
                                    desc: "We work with the latest single-board computers, IoT modules, and high-performance hardware to ensure top-tier results.",
                                },
                                {
                                    title: "Precision Engineering",
                                    desc: "Our team focuses on reliable circuit design, accurate prototyping, and optimized components for smooth operation.",
                                },
                                {
                                    title: "Rigorous Testing",
                                    desc: "Every board and sensor is tested for stability, power efficiency, and durability before deployment.",
                                },
                                {
                                    title: "Scalable Hardware Solutions",
                                    desc: "Our modular approach allows your devices and networks to grow alongside your business needs.",
                                },
                            ].map((b, idx) => (
                                <div key={idx} className="flex gap-4">
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
                            src="/hardware.jpg"
                            alt="Hardware visual"
                            className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hardware;
