import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    User,
    Building,
} from "lucide-react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    // ✅ single handleChange
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
        });
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6 text-cyan-600" />,
            title: "Our Address",
            details: ["10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir, Saubhagya Nagar, Ghogali, Nagpur, Maharashtra 440034"],
        },
        {
            icon: <Phone className="w-6 h-6 text-cyan-600" />,
            title: "Phone Numbers",
            details: ["+91 7972192831", "+91 8669308288"],
        },
        {
            icon: <Mail className="w-6 h-6 text-cyan-600" />,
            title: "Email Addresses",
            details: ["rightserveinfotechsystems@gmail.com"],
        },
        {
            icon: <Clock className="w-6 h-6 text-cyan-600" />,
            title: "Business Hours",
            details: ["Mon–Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
        },
    ];



    const faqs = [
        {
            question: "What services do you offer?",
            answer:
                "We provide IT solutions including software development, hardware solutions, digital marketing, and technical support services.",
        },
        {
            question: "How long does a typical project take?",
            answer:
                "Timelines depend on complexity. Simple projects take 2–4 weeks, while large enterprise apps may take 3–6 months.",
        },
        {
            question: "Do you provide ongoing support?",
            answer:
                "Yes, we offer 24/7 technical support and maintenance for all our solutions.",
        },
        {
            question: "Can you work with our existing systems?",
            answer:
                "Absolutely! We specialize in integrating new solutions with existing platforms and technologies.",
        },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* ===== Hero ===== */}
            <section
                className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white max-w-2xl px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg">
                        Ready to transform your business? Let’s discuss your project
                        requirements and how we can help you achieve your goals.
                    </p>
                </div>
            </section>

            {/* ===== Contact Info ===== */}
            {/* ===== Contact Info ===== */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1"
                        >
                            <div className="mb-4 flex justify-center">{info.icon}</div>
                            <h3 className="font-semibold text-lg text-slate-800 mb-2">
                                {info.title}
                            </h3>
                            {info.details.map((d, i) => {
                                let content = d;

                                // Address → Google Maps link
                                if (info.title === "Our Address") {
                                    return (
                                        <p key={i} className="text-gray-600 text-sm">
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                                    d
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-cyan-600"
                                            >
                                                {d}
                                            </a>
                                        </p>
                                    );
                                }

                                // Phone → tel link
                                if (info.title === "Phone Numbers") {
                                    return (
                                        <p key={i} className="text-gray-600 text-sm">
                                            <a href={`tel:${d}`} className="hover:text-cyan-600">
                                                {d}
                                            </a>
                                        </p>
                                    );
                                }

                                // Email → mailto link
                                if (info.title === "Email Addresses") {
                                    return (
                                        <p key={i} className="text-gray-600 text-sm">
                                            <a href={`mailto:${d}`} className="hover:text-cyan-600">
                                                {d}
                                            </a>
                                        </p>
                                    );
                                }

                                // Default (like Business Hours)
                                return (
                                    <p key={i} className="text-gray-600 text-sm">
                                        {d}
                                    </p>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== Contact Form ===== */}
            <section className="relative py-20  via-slate-900 to-black">
           
                <div className="absolute inset-0  bg-cover bg-center opacity-30" />

                <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12">
                    {/* ===== Left: Glass Contact Form ===== */}
                    <div className="backdrop-blur-xl bg-[#e5e7eb] rounded-2xl shadow-2xl p-8 ">
                        <h2 className="text-3xl font-bold mb-3 text-blue-900">Get in Touch</h2>
                        <p className=" mb-8 text-blue-900">
                            We'd love to hear from you! Fill in the form and we’ll get back shortly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 text-blue-900 ">
                                        Full Name *
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md  border border-white/30 px-4 py-2 placeholder-gray-300 text-white focus:border-cyan-400 focus:ring focus:ring-cyan-600"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-blue-900">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-md  border border-white/30 px-4 py-2 placeholder-gray-300 text-white focus:border-cyan-400 focus:ring focus:ring-cyan-600"
                                        placeholder="you@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 text-blue-900">
                                        Phone
                                    </label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-md  border border-white/30 px-4 py-2 placeholder-gray-300 text-white focus:border-cyan-400"
                                        placeholder="+91 9876543210"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-blue-900">
                                        Company
                                    </label>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-white/30 px-4 py-2 placeholder-gray-300 text-white focus:border-cyan-400"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 text-blue-900">
                                    Subject *
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md  border border-white/30 px-4 py-2 text-gray-200 focus:border-cyan-400"
                                >
                                    <option value="">Choose a topic</option>
                                    <option>Software Development</option>
                                    <option>Hardware Solutions</option>
                                    <option>Digital Marketing</option>
                                    <option>Technical Support</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 text-blue-900">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md  border border-white/30 px-4 py-2 placeholder-gray-300 text-white focus:border-cyan-400 resize-none"
                                    placeholder="Write your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-900 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* ===== Right: Map & Info ===== */}
                    <div className="relative">
                        <iframe
                            title="Our Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.798554095765!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35b3270b03%3A0x4b0a3f91d9e94d67!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1694705189"
                            className="w-full h-96 rounded-xl shadow-lg"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                        <div className="absolute -bottom-10 left-4 right-4 bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4 text-center mb-20">
                            <div>
                                <div className="text-2xl font-bold text-cyan-600">24hrs</div>
                                <p className="text-sm text-gray-600">Response Time</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-cyan-600">100%</div>
                                <p className="text-sm text-gray-600">Client Satisfaction</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-cyan-600">5+</div>
                                <p className="text-sm text-gray-600">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                {/* ===== Call to Action Section ===== */}
 {/* Call to Action Section */}
      <section className="relative ps-10 ms-20 me-20 bg-[#001F54] rounded-2xl">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
          {/* Left Side - Rocket Image */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left text-white"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get ahead with smarter solutions
            </h2>
            <p className="mb-6">
              Discover how <span className="font-semibold">RightServe</span> can 
        transform your business with innovative IT solutions. Let’s discuss your project today.
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

          {/* Right Side - Text */}
          

           <div
            className="relative w-full lg:w-1/2 flex justify-center h-80 lg:h-96 overflow-visible"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              src="/desktop-monitor.webp"
              alt="Rocket Launch"
              className="absolute bottom-0 h-[22rem] lg:h-[28rem] object-contain"
            />

          </div>
        </div>
      </section>



            {/* ===== FAQ ===== */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side (Gray info block) */}
                        <div className="bg-[#e5e7eb] rounded-2xl shadow-lg w-full h-full min-h-[400px] pl-10 pr-24 py-16">
                            <h4 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
                                RightServe Knowledge Hub
                            </h4>
                            <p className="text-blue-900 mt-6 text-lg text-justify mr-16">
                                Explore our curated insights about website design, development, and support.
                                These answers reflect{" "}
                                <span className="font-semibold">RightServe’s</span> commitment to clarity,
                                innovation, and building digital solutions that grow with your business.
                            </p>
                        </div>


                        {/* Right Side (FAQ list) */}
                        <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[60%] space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl shadow p-5 cursor-pointer transition hover:shadow-md"
                                    onClick={() => toggle(idx)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h4
                                            className={`text-base md:text-lg font-semibold ${openIndex === idx ? "text-[#003366]" : "text-slate-800"
                                                }`}
                                        >
                                            {faq.question}
                                        </h4>
                                        <svg
                                            className={`w-5 h-5 transition-transform ${openIndex === idx ? "rotate-90 text-[#003366]" : "text-gray-500"
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                    {openIndex === idx && (
                                        <p className="text-gray-600 mt-2 text-sm md:text-base">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
