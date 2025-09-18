import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  User,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      console.log("Form data:", form);
      alert("Form submitted!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#001F54]" />,
      title: "Our Address",
      details: [
        "10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir, Saubhagya Nagar, Ghogali, Nagpur, Maharashtra 440034",
      ],
    },
    {
      icon: <Phone className="w-6 h-6  text-[#001F54]" />,
      title: "Phone Numbers",
      details: ["+91 7972192831", "+91 8669308288"],
    },
    {
      icon: <Mail className="w-6 h-6  text-[#001F54]" />,
      title: "Email Address",
      details: ["rightserveinfotechsystems@gmail.com"],
    },
    {
      icon: <Clock className="w-6 h-6  text-[#001F54]" />,
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
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/HeroContact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-aos="zoom-in">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg" data-aos="fade-up">
            Ready to transform your business? Let’s discuss your project
            requirements and how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* ===== Contact Info ===== */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1"
              data-aos="fade-up"
            >
              <div className="mb-4 flex justify-center">{info.icon}</div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">
                {info.title}
              </h3>
              {info.details.map((d, i) => {
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
                if (info.title === "Phone Numbers") {
                  return (
                    <p key={i} className="text-gray-600 text-sm">
                      <a href={`tel:${d}`} className="hover:text-cyan-600">
                        {d}
                      </a>
                    </p>
                  );
                }
                if (info.title === "Email Address") {
                  return (
                    <p key={i} className="text-gray-600 text-sm">
                      <a href={`mailto:${d}`} className="hover:text-cyan-600">
                        {d}
                      </a>
                    </p>
                  );
                }
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
  <section className="flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
  <div
    className="max-w-6xl w-full bg-white rounded-3xl 
      shadow-[0_10px_25px_rgba(0,0,0,0.15),0_6px_10px_rgba(0,0,0,0.1)] 
      overflow-hidden grid grid-cols-1 md:grid-cols-2 
      transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 
      relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 
      before:bg-gradient-to-r before:from-[#001F54]/20 before:to-transparent"
    data-aos="zoom-in"
  >
    {/* Left Side - Form */}
    <div className="p-6 sm:p-12 flex flex-col justify-center relative z-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001F54] mb-6 sm:mb-8">
        Contact us
      </h2>

      <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#001F54]" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-lg border border-gray-200 shadow-inner 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#001F54]" />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-lg border border-gray-200 shadow-inner 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-[#001F54]" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Message"
            className="w-full pl-10 pr-4 py-3 sm:py-4 rounded-lg border border-gray-200 shadow-inner 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#001F54] text-white font-semibold py-3 sm:py-4 rounded-lg 
            shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 
            text-base sm:text-lg"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right Side - Illustration */}
    <div
      className="hidden md:flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-50 relative"
      data-aos="fade-left"
    >
      <img src="/contact2.jpg" alt="Contact Illustration" className="w-full h-full object-cover" />
    </div>
  </div>
</section>



      {/* ===== Call to Action Section ===== */}
      <section
        className="relative mx-4 sm:mx-8 lg:mx-20 bg-[#001F54] rounded-2xl py-10 px-6 sm:px-10 overflow-visible"

      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
              Get ahead with smarter solutions
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              Discover how <span className="font-semibold">RightServe</span> can
              transform your business with innovative IT solutions. Let’s
              discuss your project today.{" "}
              <a
                href="tel:6302966932"
                className="text-cyan-300 hover:text-cyan-200 font-semibold"
              >
                (630) 296-6932
              </a>
              .
            </p>
            <a href="/contact">
              <button className="px-4 sm:px-5 py-2 bg-white text-[#001F54] font-semibold rounded-full hover:bg-cyan-100 transition text-sm sm:text-base">
                Get A Proposal
              </button>
            </a>
          </div>

          <div
            className="relative w-full lg:w-1/2 flex justify-center h-56 sm:h-60 lg:h-72"
            data-aos="fade-left"
          >
            <img
              src="/desktop-monitor.webp"
              alt="Rocket Launch"
              className="w-64 sm:w-80 lg:w-[32rem] h-64 sm:h-80 lg:h-[32rem] object-contain -mt-8 sm:-mt-10"
            />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side (Gray info block) */}
            <div className="bg-[#e5e7eb] rounded-2xl shadow-lg w-full h-full min-h-[400px] pl-6 pr-6 sm:pl-10 sm:pr-24 py-10 sm:py-16">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
                RightServe Knowledge Hub
              </h4>
              <p className="text-blue-900 mt-6 text-base sm:text-lg text-justify sm:mr-16">
                Explore our curated insights about website design, development, and support. These answers reflect{" "}
                <span className="font-semibold">RightServe’s</span> commitment to clarity, innovation, and building digital solutions that grow with your business.
              </p>
            </div>

            {/* Right Side (FAQ list) */}
            <div className="w-full lg:w-[60%] space-y-4 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
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
