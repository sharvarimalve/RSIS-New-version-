import React, { useEffect, useState } from "react";
import { Star, Users, Shield, Zap, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

interface ProductsProps {
  onPageChange: (page: string) => void;
}


const Products: React.FC<ProductsProps> = ({onPageChange}) => {
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // ---------------- PRODUCTS ----------------
    const products = [
        {
            id: 1,
            name: "Secure Build",
            category: "Business Software",
            price: "₹4,999",
            rating: 4.8,
            reviews: 124,
            description:
                "Comprehensive Customer Relationship Management solution designed for small to medium businesses.",
            features: [
                "Lead Management",
                "Sales Pipeline",
                "Customer Analytics",
                "Email Integration",
                "Mobile App",
            ],
            image:
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
            popular: true,
        },
        {
            id: 2,
            name: "Trajectoryfy",
            category: "Business Software",
            price: "₹2,999",
            rating: 4.6,
            reviews: 89,
            description:
                "Advanced inventory management system with real-time tracking, automated reordering, and detailed reporting.",
            features: [
                "Real-time Tracking",
                "Automated Alerts",
                "Barcode Scanning",
                "Multi-location Support",
                "Reports",
            ],
            image:
                "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "DoseCare",
            category: "Business Software",
            price: "₹3,499",
            rating: 4.7,
            reviews: 203,
            description:
                "Patient care with timely reminders and smart scheduling. Boost productivity for collaboration and resource planning.",
            features: [
                "Task Management",
                "Team Collaboration",
                "Time Tracking",
                "Gantt Charts",
                "Resource Planning",
            ],
            image: "/dosecare.png",
        },
        {
            id: 4,
            name: "TubeMonitize",
            category: "Business Software",
            price: "₹5,499",
            rating: 4.5,
            reviews: 78,
            description:
                "Powerful analytics platform with interactive dashboards and real-time data insights.",
            features: [
                "Interactive Dashboards",
                "Data Export",
                "Custom Charts",
                "Scheduled Reports",
            ],
            image:
                "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 5,
            name: "Shiksha Sutra",
            category: "Business Software",
            price: "₹1,999",
            rating: 4.3,
            reviews: 54,
            description: "A simple yet effective task management software for businesses.",
            features: ["Kanban Boards", "Reminders", "Notes", "Team Sharing"],
            image:
                "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 6,
            name: "Email System",
            category: "Business Software",
            price: "₹3,299",
            rating: 4.4,
            reviews: 102,
            description: "Encrypted email service to protect your company’s communication.",
            features: ["End-to-end Encryption", "Spam Filtering", "Archiving"],
            image:
                "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    // ---------------- FEATURES ----------------
    const features = [
        {
            icon: <Shield size={48} />,
            title: "Enterprise Security",
            description:
                "All our products come with enterprise-grade security features and regular updates.",
        },
        {
            icon: <Users size={48} />,
            title: "Multi-user Support",
            description:
                "Built for teams with role-based access control and collaboration.",
        },
        {
            icon: <Zap size={48} />,
            title: "High Performance",
            description:
                "Optimized for speed and efficiency, handling large datasets and concurrent users.",
        },
        {
            icon: <CheckCircle size={48} />,
            title: "Quality Assurance",
            description:
                "Rigorous testing ensures reliable and bug-free software solutions.",
        },
    ];

    // ---------------- TESTIMONIALS ----------------
    const testimonials = [
        {
            text: `"Our partnership with RSIS has been incredible. Their cloud solutions helped us migrate seamlessly and scale faster than ever."`,
            author: "Ananya patel",
            role: "CTO, CloudSphere Technologies",
            avatar: "/anaya.png",
        },
        {
            text: `"The cybersecurity services from RSIS have strengthened our infrastructure. We now feel confident handling sensitive client data."`,
            author: "Rohan Mahajan",
            role: "Head of Security, InfoShield Solutions",
            avatar: "/rohan.jpg",
        },
        {
            text: `"Working with RSIS on our custom SaaS platform has been a game changer. Their development team is highly skilled and reliable."`,
            author: "Priya wadkar",
            role: "Product Manager, InnovateSoft",
            avatar: "/priya.png",
        },
    ];


    return (
        <div className="overflow-x-hidden">
            {/* HERO */}
            <section
                className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white"
                style={{ backgroundImage: "url('/heroproduct.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4">
                    <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Our Products
                    </h1>
                    <p
                        className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10 text-sm sm:text-base md:text-lg"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Powerful, reliable, and user-friendly software solutions designed to
                        streamline your business operations.
                    </p>
                </div>
            </section>



            {/* PRODUCTS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Section heading */}
                    <h1 className="mb-12 text-center text-4xl font-bold text-[#001F54]">
                        All Products
                    </h1>

                    {/* Products grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product, idx) => (
                            <div
                                key={product.id}
                                data-aos="zoom-in-up"
                                data-aos-delay={idx * 100}
                                className="relative overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category + Rating */}
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
                                            {product.category}
                                        </span>

                                        <div className="flex items-center gap-1 text-orange-400">
                                            <Star size={16} />
                                            <span className="font-medium text-gray-700">
                                                {product.rating}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                ({product.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                        {product.name}
                                    </h3>
                                    <p className="mb-4 text-sm text-gray-600">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-4 space-y-1">
                                        {product.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="text-cyan-600" size={14} />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>



                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* FEATURES with zoom-in-up */}
            <section className="py-16 bg-[#e5e7eb]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Why Choose Our Products?
                        </h2>
                        <p className="text-gray-600">
                            Every product is built with quality, security, and user experience in mind.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((f, idx) => (
                            <div
                                key={idx}
                                data-aos="zoom-in-up"
                                data-aos-delay={idx * 100}
                                className="bg-white p-8 rounded-xl shadow hover:shadow-lg text-center transition"
                            >
                                <div className="mb-4 flex justify-center text-[#001F54] text-6xl">
                                    {f.icon}
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">{f.title}</h4>
                                <p className="text-gray-600 text-sm">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Section Heading */}
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
                        <p className="text-gray-600">
                            What our customers say about our products.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className=" relative rounded-xl bg-white p-8 shadow border-b-4 border-transparent transition hover:border-[#001F54] hover:shadow-lg " >
                                {/* Stars */}
                                <div className="mb-4 flex items-center gap-2 text-orange-400">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={18} />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="mb-6 italic text-gray-700">{t.text}</p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.author}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h5 className="font-semibold text-gray-800">{t.author}</h5>
                                        <span className="text-sm text-gray-500">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="bg-[#e4e7ea] py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#001f4d]">
                        Ready to Get Started?
                    </h2>
                    <p className="mb-8 text-lg text-[#001f4d]">
                        Explore our products and find the perfect solution for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">

                        <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#001F54] text-white font-semibold rounded-full hover:bg-[#001F54] transition text-sm sm:text-base"
                            onClick={() => onPageChange("our-team")}
                        >
                           Connect with Our Team
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Products;
