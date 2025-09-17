import React from "react";
import {
  Mail as MailIcon,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

interface FooterProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, onPageChange }) => {
  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about-us" },
    { label: "Career", page: "career" },
    { label: "Hardware", page: "hardware" },
    { label: "Marketing", page: "marketing" },
    { label: "Team", page: "our-team" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Products", page: "products" },
    { label: "Software", page: "software" },
    { label: "Contact", page: "contact" },
  ];

  const services = [
    { label: "Software", page: "software" },
    { label: "Hardware", page: "hardware" },
    { label: "Marketing", page: "marketing" },
  ];

  const linkClass = (page: string) =>
    `relative text-sm px-2 py-1 transition-all duration-300 rounded
    ${currentPage === page
      ? "text-white font-semibold border-b-2 border-blue-500 rounded-b-md shadow-[0_2px_4px_rgba(59,130,246,0.4)]"
      : "text-gray-400 hover:text-white hover:border-b hover:border-gray-500"
    }`;

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== Grid for sections ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* ===== Company Info ===== */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo-trajectoryfy.jpg"
                alt="Right Serve Infotech Systems"
                className="h-12 w-12 rounded-full mr-3 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold">Right Serve Infotech</h3>
                <p className="text-sm text-gray-400">Systems Pvt. Ltd.</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading IT solutions provider specializing in software development,
              hardware solutions, and digital marketing. We help businesses grow
              through innovative technology solutions.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/RightServe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com/company/rsinfotechsys"
                className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/rsinfotechsys"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/RightServe"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="sm:mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">
              Quick Links
            </h4>
            <div className="flex gap-x-6 sm:gap-x-8">
              <ul className="space-y-2">
                {quickLinks.slice(0, Math.ceil(quickLinks.length / 2)).map((link) => (
                  <li key={link.page}>
                    <button
                      type="button"
                      className={linkClass(link.page)}
                      onClick={() => onPageChange && onPageChange(link.page)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {quickLinks.slice(Math.ceil(quickLinks.length / 2)).map((link) => (
                  <li key={link.page}>
                    <button
                      type="button"
                      className={linkClass(link.page)}
                      onClick={() => onPageChange && onPageChange(link.page)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== Our Services ===== */}
          <div className="sm:mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.page}>
                  <button
                    type="button"
                    className={linkClass(service.page)}
                    onClick={() => onPageChange && onPageChange(service.page)}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="sm:mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-gray-400 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=10,+Saurabh+Nagar-2,+Besa+Rd,+near+Hanuman+Mandir,+Saubhagya+Nagar,+Ghogali,+Nagpur,+Maharashtra+440034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-xs sm:text-sm"
                >
                  10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir,
                  Saubhagya Nagar, Ghogali, Nagpur, Maharashtra 440034
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:+917972192831" className="text-gray-300 text-xs sm:text-sm">
                  +91 7972192831
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MailIcon size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:rightserveinfotechsystems@gmail.com"
                  className="text-gray-300 text-xs sm:text-sm flex-1 break-all"
                >
                  rightserveinfotechsystems@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-3 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} RIGHT SERVE INFOTECH SYSTEMS PVT. LTD. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
