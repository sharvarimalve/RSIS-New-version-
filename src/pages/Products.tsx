import React from "react";
import {
    ShoppingCart, Star, Users, Shield, Zap, CheckCircle,
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
            description: "Comprehensive CRM solution for small to medium businesses.",
            features: ["Lead Management", "Sales Pipeline", "Analytics", "Email Integration", "Mobile App"],
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
            popular: true,
        },
        {
            id: 2,
            name: "Inventory Master",
            category: "Business Software",
            price: "₹2,999",
            rating: 4.6,
            reviews: 89,
            description: "Real-time inventory management with automated reordering.",
            features: ["Live Tracking", "Barcode Scanning", "Reports", "Alerts", "Multi-location"],
            image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "ProjectFlow Manager",
            category: "Business Software",
            price: "₹3,499",
            rating: 4.7,
            reviews: 203,
            description: "Agile project management with team collaboration features.",
            features: ["Task Boards", "Time Tracking", "Resource Planning", "Gantt Charts"],
            image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 4,
            name: "DataViz Analytics",
            category: "Business Software",
            price: "₹5,499",
            rating: 4.8,
            reviews: 178,
            description: "Interactive dashboards and data insights for smart decisions.",
            features: ["Dashboards", "Custom Reports", "Real-time Analytics"],
            image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
            popular: true,
        },
        {
            id: 5,
            name: "SecureGuard Enterprise",
            category: "Business Software",
            price: "₹7,999",
            rating: 4.9,
            reviews: 156,
            description: "Advanced enterprise security tools with threat detection.",
            features: ["Threat Detection", "Firewall", "Compliance Tools"],
            image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 6,
            name: "CloudBackup Pro",
            category: "Business Software",
            price: "₹1,999",
            rating: 4.5,
            reviews: 92,
            description: "Encrypted cloud backup and recovery for your files.",
            features: ["Encryption", "Versioning", "Cross-platform"],
            image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
        },

        // -------- Business Hardware --------
        {
            id: 7,
            name: "Raspberry Pi 4",
            category: "Business Hardware",
            price: "₹5,999",
            rating: 4.7,
            reviews: 220,
            description: "Compact computer for IoT & prototyping projects.",
            features: ["Quad-core CPU", "Wi-Fi", "USB-C Power"],
            image: "https://images.pexels.com/photos/5864303/pexels-photo-5864303.jpeg?auto=compress&cs=tinysrgb&w=600",
            popular: true,
        },
        {
            id: 8,
            name: "Arduino Mega 2560",
            category: "Business Hardware",
            price: "₹2,299",
            rating: 4.8,
            reviews: 180,
            description: "Versatile microcontroller board for hardware projects.",
            features: ["54 I/O Pins", "USB Support", "Plug & Play"],
            image: "https://images.pexels.com/photos/159220/arduino-microcontroller-electronics-159220.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 9,
            name: "ESP32 Dev Kit",
            category: "Business Hardware",
            price: "₹1,799",
            rating: 4.6,
            reviews: 90,
            description: "Wi-Fi & Bluetooth-enabled microcontroller board.",
            features: ["Wi-Fi", "BLE", "Low Power"],
            image: "https://images.pexels.com/photos/1061080/pexels-photo-1061080.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 10,
            name: "3D Printer Pro",
            category: "Business Hardware",
            price: "₹24,999",
            rating: 4.8,
            reviews: 70,
            description: "High-precision 3D printer for prototypes and models.",
            features: ["Auto Bed Leveling", "Touchscreen", "Fast Printing"],
            image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 11,
            name: "Smart IoT Sensor Kit",
            category: "Business Hardware",
            price: "₹3,499",
            rating: 4.5,
            reviews: 65,
            description: "Ready-to-use sensors for IoT applications.",
            features: ["Temperature", "Humidity", "Light Sensor"],
            image: "https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 12,
            name: "High-Speed Router",
            category: "Business Hardware",
            price: "₹6,999",
            rating: 4.6,
            reviews: 110,
            description: "Enterprise-grade network router for offices.",
            features: ["Dual Band", "Gigabit Ports", "Firewall"],
            image: "https://images.pexels.com/photos/4709373/pexels-photo-4709373.jpeg?auto=compress&cs=tinysrgb&w=600",
        },

        // -------- Marketing --------
        {
            id: 13,
            name: "Mailchimp Pro",
            category: "Marketing",
            price: "₹2,499",
            rating: 4.7,
            reviews: 120,
            description: "Email marketing automation platform.",
            features: ["Email Templates", "Automation", "Reports"],
            image: "https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg?auto=compress&cs=tinysrgb&w=600",
            popular: true,
        },
        {
            id: 14,
            name: "Canva Business",
            category: "Marketing",
            price: "₹999",
            rating: 4.8,
            reviews: 180,
            description: "Easy design tool for social media creatives.",
            features: ["Templates", "Drag & Drop", "Brand Kit"],
            image: "https://images.pexels.com/photos/5152337/pexels-photo-5152337.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 15,
            name: "Hootsuite Manager",
            category: "Marketing",
            price: "₹1,299",
            rating: 4.6,
            reviews: 140,
            description: "Schedule & manage all your social posts.",
            features: ["Scheduler", "Analytics", "Multi-channel"],
            image: "https://images.pexels.com/photos/5676818/pexels-photo-5676818.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 16,
            name: "Google Ads Booster",
            category: "Marketing",
            price: "₹3,999",
            rating: 4.7,
            reviews: 90,
            description: "Boost your Google Ads campaigns effectively.",
            features: ["Keyword Planner", "A/B Testing", "Analytics"],
            image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 17,
            name: "SEO Toolkit",
            category: "Marketing",
            price: "₹1,799",
            rating: 4.5,
            reviews: 80,
            description: "Optimize your website ranking easily.",
            features: ["Site Audit", "Keyword Suggestions", "Backlinks"],
            image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 18,
            name: "Social Growth Pro",
            category: "Marketing",
            price: "₹2,899",
            rating: 4.8,
            reviews: 100,
            description: "Grow and manage your social communities.",
            features: ["Growth Insights", "Moderation", "Engagement"],
            image: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    const categories = ["All", "Business Software", "Business Hardware", "Marketing"];

    const [activeCategory, setActiveCategory] = React.useState("All");
    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <div className=" py-10">
            {/* Filter Section */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Browse Products by Category
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#002147] text-white border-[#002147]" // Active: Navy Blue background
                                    : "bg-white text-[#002147] border-[#002147] hover:bg-[#002147] hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Products Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((prod, idx) => (
                        <div
                            key={prod.id}
                            className="rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={idx * 80}
                        >
                            {prod.popular && (
                                <span className="absolute bg-gradient-to-r from-pink-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    Popular
                                </span>
                            )}
                            <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                                <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">
                                {prod.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{prod.description}</p>
                            <ul className="text-sm text-gray-700 mb-4 space-y-1">
                                {prod.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle size={14} className="text-green-600" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-blue-700 font-bold text-lg">
                                    {prod.price}
                                </span>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={16} />
                                    <span className="text-gray-700 text-sm">
                                        {prod.rating} ({prod.reviews})
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
