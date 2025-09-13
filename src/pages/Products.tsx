import React from "react";
import {
    ShoppingCart,
    Star,
    Users,
    Shield,
    Zap,
    CheckCircle,
} from "lucide-react";

const Products: React.FC = () => {
    const products = [
        // -------- Business Software --------
        {
            id: 1,
            name: "RSIS CRM Pro",
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
            name: "Inventory Master",
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
            name: "ProjectFlow Manager",
            category: "Business Software",
            price: "₹3,499",
            rating: 4.7,
            reviews: 203,
            description:
                "Agile project management tool with team collaboration features, time tracking, and resource planning.",
            features: [
                "Task Management",
                "Team Collaboration",
                "Time Tracking",
                "Gantt Charts",
                "Resource Planning",
            ],
            image:
                "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 4,
            name: "DataViz Analytics",
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
            name: "TaskHero",
            category: "Business Software",
            price: "₹1,999",
            rating: 4.3,
            reviews: 54,
            description:
                "A simple yet effective task management software for businesses.",
            features: ["Kanban Boards", "Reminders", "Notes", "Team Sharing"],
            image:
                "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 6,
            name: "SecureMail",
            category: "Business Software",
            price: "₹3,299",
            rating: 4.4,
            reviews: 102,
            description:
                "Encrypted email service to protect your company’s communication.",
            features: ["End-to-end Encryption", "Spam Filtering", "Archiving"],
            image:
                "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=600",
        },

        // -------- Business Hardware --------
        {
            id: 7,
            name: "ProDesk Station",
            category: "Business Hardware",
            price: "₹25,999",
            rating: 4.8,
            reviews: 340,
            description:
                "High-performance desktop workstation for demanding business tasks.",
            features: ["Intel i7 CPU", "16GB RAM", "1TB SSD", "Dual Monitors"],
            image:
                "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 8,
            name: "UltraBook Pro",
            category: "Business Hardware",
            price: "₹54,999",
            rating: 4.6,
            reviews: 220,
            description:
                "Lightweight and powerful business laptop with excellent battery life.",
            features: ["14-inch Display", "i7 Processor", "512GB SSD", "Fingerprint Login"],
            image:
                "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 9,
            name: "SmartPrinter 4000",
            category: "Business Hardware",
            price: "₹8,499",
            rating: 4.4,
            reviews: 90,
            description:
                "Wireless all-in-one printer designed for offices and co-working spaces.",
            features: ["Print/Scan/Copy", "Duplex Printing", "Wi-Fi Direct"],
            image:
                "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 10,
            name: "ServerMax 12U",
            category: "Business Hardware",
            price: "₹1,20,000",
            rating: 4.7,
            reviews: 67,
            description:
                "Compact server rack solution for small and medium-sized businesses.",
            features: ["12U Rack", "Cooling Fans", "Lockable Doors"],
            image:
                "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 11,
            name: "BoardRoom Display",
            category: "Business Hardware",
            price: "₹45,000",
            rating: 4.5,
            reviews: 50,
            description:
                "Large 4K display for meeting rooms and presentations.",
            features: ["4K Resolution", "HDMI & Wireless", "Slim Design"],
            image:
                "https://images.pexels.com/photos/132700/pexels-photo-132700.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 12,
            name: "NetPro Router",
            category: "Business Hardware",
            price: "₹9,999",
            rating: 4.3,
            reviews: 130,
            description:
                "High-speed enterprise router with advanced security protocols.",
            features: ["Gigabit Ports", "Firewall", "VPN Support"],
            image:
                "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600",
        },

        // -------- Marketing --------
        {
            id: 13,
            name: "AdBoost",
            category: "Marketing",
            price: "₹3,999",
            rating: 4.7,
            reviews: 80,
            description:
                "Run and manage social media ad campaigns from one platform.",
            features: ["Multi-platform Ads", "Performance Tracking", "Smart Bidding"],
            image:
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 14,
            name: "SEO Wizard",
            category: "Marketing",
            price: "₹2,499",
            rating: 4.5,
            reviews: 60,
            description:
                "Optimize your website with advanced SEO tools and reports.",
            features: ["Keyword Analysis", "Backlink Checker", "Site Audit"],
            image:
                "https://images.pexels.com/photos/445842/pexels-photo-445842.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 15,
            name: "MailMaster",
            category: "Marketing",
            price: "₹1,999",
            rating: 4.4,
            reviews: 48,
            description:
                "Email marketing tool with templates and automation features.",
            features: ["Templates", "Scheduling", "Analytics"],
            image:
                "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 16,
            name: "BrandVision",
            category: "Marketing",
            price: "₹5,499",
            rating: 4.6,
            reviews: 72,
            description:
                "Creative brand strategy toolkit for marketing teams.",
            features: ["Logo Generator", "Color Palettes", "Brand Guide"],
            image:
                "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 17,
            name: "LeadTracker",
            category: "Marketing",
            price: "₹3,199",
            rating: 4.5,
            reviews: 66,
            description:
                "Manage leads and track conversions effectively.",
            features: ["Lead Scoring", "CRM Sync", "Pipeline View"],
            image:
                "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 18,
            name: "ContentFlow",
            category: "Marketing",
            price: "₹2,999",
            rating: 4.3,
            reviews: 40,
            description:
                "Plan and publish your content calendar effortlessly.",
            features: ["Calendar", "Approvals", "Multi-channel Posting"],
            image:
                "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600",
        },

        // -------- Backup Solutions --------
        {
            id: 19,
            name: "CloudVault",
            category: "Backup Solutions",
            price: "₹2,999",
            rating: 4.7,
            reviews: 85,
            description:
                "Secure cloud-based backup service for businesses of all sizes.",
            features: ["Automatic Backups", "Data Encryption", "Version History"],
            image:
                "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 20,
            name: "SafeDrive",
            category: "Backup Solutions",
            price: "₹3,499",
            rating: 4.6,
            reviews: 72,
            description:
                "Portable encrypted storage drive for offline backups.",
            features: ["AES Encryption", "Portable", "Plug & Play"],
            image:
                "https://images.pexels.com/photos/267447/pexels-photo-267447.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 21,
            name: "VaultBox",
            category: "Backup Solutions",
            price: "₹4,199",
            rating: 4.5,
            reviews: 63,
            description:
                "On-premise backup server with hybrid cloud support.",
            features: ["Hybrid Storage", "Snapshots", "RAID Support"],
            image:
                "https://images.pexels.com/photos/267447/pexels-photo-267447.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 22,
            name: "TimeShield",
            category: "Backup Solutions",
            price: "₹2,299",
            rating: 4.4,
            reviews: 59,
            description:
                "Automatic backup scheduler for critical business data.",
            features: ["Scheduled Backups", "Compression", "Alerts"],
            image:
                "https://images.pexels.com/photos/37347/office-computer-apple-macintosh-37347.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 23,
            name: "BackupPro",
            category: "Backup Solutions",
            price: "₹3,799",
            rating: 4.5,
            reviews: 88,
            description:
                "Professional backup suite for databases and servers.",
            features: ["Database Support", "Cloud Sync", "Reports"],
            image:
                "https://images.pexels.com/photos/267502/pexels-photo-267502.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 24,
            name: "RestoreX",
            category: "Backup Solutions",
            price: "₹3,099",
            rating: 4.3,
            reviews: 44,
            description:
                "Quick recovery tool for accidental file deletions.",
            features: ["Point-in-Time Restore", "Preview", "Cross-platform"],
            image:
                "https://images.pexels.com/photos/267505/pexels-photo-267505.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];


    const categories = [
        "All",
        "Business Software",
        "Business Hardware",
        "Marketing",
        "Backup Solutions",
    ];
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    const features = [
        {
            icon: <Shield size={32} />,
            title: "Enterprise Security",
            description:
                "All our products come with enterprise-grade security features and regular updates.",
        },
        {
            icon: <Users size={32} />,
            title: "Multi-user Support",
            description:
                "Built for teams with role-based access control and collaboration.",
        },
        {
            icon: <Zap size={32} />,
            title: "High Performance",
            description:
                "Optimized for speed and efficiency, handling large datasets and concurrent users.",
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Quality Assurance",
            description:
                "Rigorous testing ensures reliable and bug-free software solutions.",
        },
    ];

    const testimonials = [
        {
            text: `"RSI CRM Pro has transformed how we manage our customer relationships. The interface is intuitive and the features are exactly what we needed."`,
            author: "David Wilson",
            role: "Sales Manager, TechCorp",
            avatar:
                "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
        {
            text: `"SecureGuard Enterprise provides peace of mind with its comprehensive security features. Highly recommended!"`,
            author: "Sarah Johnson",
            role: "IT Director, SecureTech",
            avatar:
                "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
        {
            text: `"DataViz Analytics has revolutionized our reporting process. The visualizations are stunning and the insights are actionable."`,
            author: "Michael Chen",
            role: "Data Analyst, Growth Labs",
            avatar:
                "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
        },
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
            <section
                className="relative bg-cover bg-center py-24 text-white"
                style={{ backgroundImage: "url('/product1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Software Products
                    </h1>
                    <p className="max-w-2xl mx-auto mb-10 text-lg">
                        Powerful, reliable, and user-friendly software solutions designed to
                        streamline your business operations.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto">
                        <div>
                            <p className="text-2xl font-bold">15+</p>
                            <p>Software Products</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">1000+</p>
                            <p>Active Users</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">4.7</p>
                            <p>Average Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">24/7</p>
                            <p>Customer Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                        Browse Products by Category
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full border transition ${activeCategory === cat
                                    ? "bg-blue-900 text-white"
                                    : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Products */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-1"
                            >
                                {product.popular && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Popular
                                    </div>
                                )}
                                <div className="h-48 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-medium">
                                            {product.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-orange-400">
                                            <Star size={16} />
                                            <span className="text-gray-700 font-medium">
                                                {product.rating}
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                ({product.reviews})
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {product.description}
                                    </p>
                                    <div className="space-y-1 mb-4">
                                        {product.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="text-cyan-600" size={14} />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xl font-bold text-gray-800">
                                            {product.price}
                                            <span className="text-sm text-gray-500 ml-1">
                                                /month
                                            </span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Why Choose Our Products?
                        </h2>
                        <p className="text-gray-600">
                            Every product is built with quality, security, and user experience
                            in mind.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((f, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-xl shadow hover:shadow-lg text-center transition"
                            >
                                <div className="mb-4 text-cyan-600">{f.icon}</div>
                                <h4 className="font-semibold text-gray-800 mb-2">{f.title}</h4>
                                <p className="text-gray-600 text-sm">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Customer Reviews
                        </h2>
                        <p className="text-gray-600">
                            What our customers say about our products.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <div className="flex items-center gap-2 text-orange-400 mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} size={18} />
                                    ))}
                                </div>
                                <p className="italic text-gray-700 mb-6">{t.text}</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h5 className="font-semibold text-gray-800">{t.author}</h5>
                                        <span className="text-gray-500 text-sm">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="mb-8 text-lg">
                        Explore our products and find the perfect solution for your business
                        needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-transparent hover:text-white border border-white transition">
                            Browse All Products
                        </button>
                        <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
                            Contact Sales Team
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
