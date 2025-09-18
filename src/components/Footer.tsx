import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";


const MinimalFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Links */}
        <div className="flex flex-col items-center gap-3 py-3 sm:flex-row sm:justify-center">
          <a href="/Home" className="hover:text-blue-700">
            HOME
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="/pages/Software" className="hover:text-blue-700">
            SERVICES
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="/Contact" className="hover:text-blue-700">
            CONTACT US
          </a>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex justify-center space-x-3 pb-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-sky-500 hover:text-white transition"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-blue-700 hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-pink-600 hover:text-white transition"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-300 py-2 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Right Serve Infotech Systems Pvt. Ltd. All
          Rights Reserved. &nbsp; | &nbsp; Customer Service: 1-866-991-9222
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
