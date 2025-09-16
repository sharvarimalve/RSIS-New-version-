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
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about-us" },
    { label: "Career", page: "career" },
    { label: "Hardware", page: "hardware" },
    { label: "Marketing", page: "marketing" },
    { label: "Our Team", page: "our-team" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Products", page: "products" },
    { label: "Software", page: "software" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Grid with 5 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* ===== Company Info (पहला section) ===== */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <img
                src="/logo-trajectoryfy.jpg"
                alt="Right Serve Infotech Systems"
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-bold">Right Serve Infotech</h3>
                <p className="text-sm text-gray-400">Systems Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-3 text-sm leading-relaxed">
              Leading IT solutions provider specializing in software development,
              hardware solutions, and digital marketing services. We help
              businesses transform digitally with innovative technology solutions.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/RightServe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="md:col-span-2">
            <h4 className="text-base font-semibold mb-3">Quick Links</h4>

            <div className="flex gap-x-8">
              {/* column 1 */}
              <ul className="flex flex-col space-y-1">
                {quickLinks.slice(0, Math.ceil(quickLinks.length / 2)).map((link) => (
                  <li key={link.page}>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white text-sm bg-transparent border-none outline-none cursor-pointer text-left"
                      onClick={() => onPageChange && onPageChange(link.page)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* column 2 */}
              <ul className="flex flex-col space-y-1">
                {quickLinks.slice(Math.ceil(quickLinks.length / 2)).map((link) => (
                  <li key={link.page}>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white text-sm bg-transparent border-none outline-none cursor-pointer text-left"
                      onClick={() => onPageChange && onPageChange(link.page)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== Contact Info ===== */}
          {/* ===== Contact Info ===== */}
          <div className="md:col-span-1 -ml-8">
            <h4 className="text-base font-semibold mb-3">Contact Info</h4>
            <div className="space-y-2 text-sm">
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-gray-400 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=10,+Saurabh+Nagar-2,+Besa+Rd,+near+Hanuman+Mandir,+Saubhagya+Nagar,+Ghogali,+Nagpur,+Maharashtra+440034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-300 text-xs sm:text-sm"
                >
                  10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir, Saubhagya
                  Nagar, Ghogali, Nagpur, Maharashtra 440034
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gray-400" />
                <a
                  href="tel:+917972192831"
                  className="hover:underline text-gray-300 text-xs sm:text-sm"
                >
                  +91 7972192831
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <MailIcon size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:rightserveinfotechsystems@gmail.com"
                  className="hover:underline text-gray-300 text-xs sm:text-sm break-words"
                >
                  rightservehinfosys@gmail.com
                </a>
              </div>
            </div>
          </div>



        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-xs text-gray-400">
          © 2025 RIGHT SERVE INFOTECH SYSTEMS PVT. LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
