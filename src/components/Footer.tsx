import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface MinimalFooterProps {
  onPageChange: (page: string) => void;
}

const MinimalFooter: React.FC<MinimalFooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm relative">
     <div className="absolute -top-2 left-0 w-full h-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Top Row: Links */}
        <div className="flex flex-col items-center gap-3 py-3 sm:flex-row sm:justify-center">
          <button onClick={() => onPageChange("home")} className="hover:text-blue-700">
            HOME
          </button>
          <span className="hidden sm:inline text-gray-400">|</span>
          <button onClick={() => onPageChange("software")} className="hover:text-blue-700">
            SERVICES
          </button>
          <span className="hidden sm:inline text-gray-400">|</span>
          <button onClick={() => onPageChange("contact")} className="hover:text-blue-700">
            CONTACT US
          </button>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex justify-center space-x-3 pb-3">
          <a href="https://www.facebook.com/RightServe" target="_blank" rel="noopener noreferrer"
             className="p-1 rounded-full hover:bg-blue-600 hover:text-white transition">
            <Facebook size={18} />
          </a>
          <a href="https://x.com/company/rsinfotechsys" target="_blank" rel="noopener noreferrer"
             className="p-1 rounded-full hover:bg-sky-500 hover:text-white transition">
            <Twitter size={18} />
          </a>
          <a href="https://www.linkedin.com/company/rsinfotechsys" target="_blank" rel="noopener noreferrer"
             className="p-1 rounded-full hover:bg-blue-700 hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/right_serve_infotech_system" target="_blank" rel="noopener noreferrer"
             className="p-1 rounded-full hover:bg-pink-600 hover:text-white transition">
            <Instagram size={18} />
          </a>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-300 py-2 text-center text-xs text-gray-500">
          © {new Date().getFullYear()}Copyright RIGHT SERVE INFOTECH SYSTEMS PVT. LTD. 2025 ; Customer Service: 1-866-991-9222
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
