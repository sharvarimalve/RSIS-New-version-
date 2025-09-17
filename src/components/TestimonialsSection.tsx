import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3800,
        arrows: false,
        adaptiveHeight: true,
    };

    const testimonials = [
        {
            text: `Right Serve Infotech transformed our business with their custom software solutions. Their team is professional, responsive, and truly understands client needs.`,
            name: "Rahul Sharma",
            role: "CEO",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            text: `The hardware support from Right Serve is top-notch. They handled our entire setup with precision and offered great after-sales service.`,
            name: "Priya Verma",
            role: "Manager",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            text: `Their marketing strategies elevated our online presence and brought measurable growth. A reliable partner for any business.`,
            name: "Amit Patel",
            role: "Founder",
            img: "https://randomuser.me/api/portraits/men/13.jpg",
        },
    ];

    return (
        <section className="relative py-24 bg-gray-100 overflow-hidden">
            {/* Decorative glowing shapes */}
            <div className="absolute w-72 h-72 text-[#002147] rounded-full blur-3xl opacity-20 top-12 -left-24" />
            <div className="absolute w-72 h-72 text-[#002147] rounded-full blur-3xl opacity-20 bottom-12 -right-24" />

            <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
                <motion.h5
                    className="text-2xl md:text-3xl font-extrabold text-[#002147] mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What Our Clients Say
                </motion.h5>

                <motion.p
                    className="text-gray-700 font-medium mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    We take pride in building long-term relationships through reliable
                    services and innovative solutions.
                </motion.p>

                <motion.p
                    className="text-gray-500 mb-16 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Here are a few words from our valued clients who have experienced our
                    commitment to excellence first-hand.
                </motion.p>

                <Slider {...settings}>
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative bg-white border-[#002147] rounded-2xl p-8 shadow-md">
                                {/* Opening quote */}
                                {/* <span className="absolute -top-6 left-6 text-blue-300 text-7xl leading-none select-none">
                                    &ldquo;
                                </span> */}

                                {/* Avatar inside the card */}
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-16 h-16 rounded-full border-4 border-[#002147] shadow-md object-cover"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-bold text-gray-800">{t.name}</h4>
                                        <p className="text-gray-500 text-sm">{t.role}</p>
                                    </div>
                                </div>

                                {/* Testimonial text */}
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {t.text}
                                </p>

                                {/* Closing quote */}
                                <span className="absolute -bottom-4 right-6 text-[#002147] text-7xl leading-none select-none">
                                    &rdquo;
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialsSection;
