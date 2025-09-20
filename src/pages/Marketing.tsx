import React, { useEffect } from "react";
import {
    Megaphone,
    Target,
    BarChart3,
    Globe,
    Users,
    Zap,
    CheckCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Marketing: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, offset: 100 });
    }, []);

    const services = [
        {
            icon: <Megaphone size={48} />,
            title: "Brand Strategy",
            description:
                "Define your unique voice and positioning with tailored strategies that make your brand stand out in the market.",
            features: [
                "Logo & Visual Identity",
                "Messaging Framework",
                "Competitive Analysis",
                "Reputation Building",
            ],
            image:
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Target size={48} />,
            title: "Digital Advertising",
            description:
                "Run high-performing ads across Google, Meta, LinkedIn, and other platforms to maximize ROI.",
            features: [
                "PPC Campaigns",
                "Social Ads",
                "Retargeting",
                "Conversion Optimization",
            ],
            image:
                "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <BarChart3 size={48} />,
            title: "Analytics & Insights",
            description:
                "Get actionable data about your campaigns and customer behavior to guide smart marketing decisions.",
            features: [
                "Custom Dashboards",
                "Performance Reports",
                "Funnel Analysis",
                "A/B Testing",
            ],
            image:
                "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Globe size={48} />,
            title: "SEO Optimization",
            description:
                "Improve search engine rankings and drive long-term traffic with proven SEO strategies.",
            features: [
                "Keyword Research",
                "On-page SEO",
                "Content Strategy",
                "Link Building",
            ],
            image:
                "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Users size={48} />,
            title: "Social Media Management",
            description:
                "Engage your audience on Instagram, LinkedIn, TikTok, and other channels with strategic content.",
            features: [
                "Content Calendars",
                "Community Growth",
                "Brand Voice",
                "Trend Monitoring",
            ],
            image:
                "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            icon: <Zap size={48} />,
            title: "Email Marketing",
            description:
                "Deliver personalized campaigns and automation flows to nurture and convert your leads.",
            features: [
                "Segmentation & Targeting",
                "Creative Templates",
                "Automation Workflows",
                "Open & Click Tracking",
            ],
            image:
                "https://images.pexels.com/photos/3184655/pexels-photo-3184655.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const marketingTools = [
        {
            name: "Meta Ads (Facebook & Instagram)",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
        },
        {
            name: "Twitter Ads",
            logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
        },
        {
            name: "Instagram",
            logo: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
        },
        {
            name: "LinkedIn Ads",
            logo: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
        },
        {
            name: "SEMrush",
            logo: "https://cdn.iconscout.com/icon/free/png-512/semrush-3521603-2945021.png",
        },
        {
            name: "Mailchimp",
            logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
        },
    ];

    const stats = [
        { number: "150+", label: "Projects" },
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Technical Support" },
        { number: "7+", label: "Years Experience" },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
            <section
                className="relative h-[500px] flex items-center justify-center bg-center bg-cover text-white px-4"
                style={{
                    backgroundImage:
                        "url('marketing-image/heros.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-[rgba(0,0,50,0.6)]" />
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Digital Marketing Services
                    </h1>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-cyan-100">
                        Transform your ideas into powerful Marketing solutions with
                        cutting-edge technology and expert development
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-cyan-400">{s.number}</div>
                                <div className="text-sm text-cyan-100">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Services */}
            <section className="py-20 px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">
                        Our Digital Marketing Services
                    </h2>
                    <p className="text-gray-600">
                        Comprehensive solutions to meet all your software development needs
                    </p>
                </div>

                {/* Added wrapper: keeps your original grid inside a container */}
                <div className="container mx-auto">
                    <div className="grid gap-8  gap-x-2 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((srv, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition max-w-sm mx-auto"
                                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={idx * 100}
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={srv.image}
                                        alt={srv.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-cyan-600/60 opacity-0 hover:opacity-80 flex items-center justify-center transition">
                                        <div className="text-white">{srv.icon}</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                                        {srv.title}
                                    </h3>
                                    <p className="text-gray-600">{srv.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Tools */}
            <section className="relative bg-[#040f36] text-white py-16 px-4 rounded-t-[40px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3">Marketing Tools We Use</h2>
                    <p className="text-gray-300">
                        Leveraging the best digital platforms and tools to deliver measurable
                        marketing success
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {marketingTools.map((tool, i) => (
                        <div
                            key={i}
                            className="bg-white text-slate-800 p-6 rounded-xl shadow hover:-translate-y-1 transition"
                            data-aos="zoom-in-up"
                            data-aos-delay={i * 150}
                        >
                            <div className="w-14 h-14 mx-auto mb-4">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h4 className="text-center text-sm font-semibold">{tool.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4">
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-slate-800 mb-8">
                            Why Choose Our Digital Marketing Services?
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Certified Marketing Experts",
                                    desc: "Our experienced strategists specialize in SEO, social media, paid ads, and analytics to help you grow faster.",
                                },
                                {
                                    title: "Data-Driven Strategies",
                                    desc: "We craft campaigns backed by research and insights to ensure every decision maximizes ROI.",
                                },
                                {
                                    title: "Consistent Brand Voice",
                                    desc: "From ads to content, we maintain a clear and engaging brand identity across all channels.",
                                },
                                {
                                    title: "Scalable Campaigns",
                                    desc: "Our solutions grow with your business, from small launches to global marketing initiatives.",
                                },
                            ].map((b, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">{b.title}</h4>
                                        <p className="text-gray-600">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Digital Marketing Strategy"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Marketing;
