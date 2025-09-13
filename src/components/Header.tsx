import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onGetConnected: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
  onGetConnected,
}) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px se zyada scroll ho to white background
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsAboutOpen(false);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center justify-start cursor-pointer"
            onClick={() => handlePageChange("home")}
          >
            <img
              src="/logo-trajectoryfy.jpg"
              alt="Right Serve Infotech Systems"
              className="h-14 w-14 rounded-full mr-3"
            />
            <div className="hidden sm:block">
              <h1
                className={`text-xl font-bold ${
                  isScrolled ? "text-[#17385b]" : "text-white"
                }`}
              >
                Right Serve Infotech
              </h1>
              <h1
                className={`text-xl font-bold ${
                  isScrolled ? "text-[#17385b]" : "text-white"
                }`}
              >
                System Pvt. Ltd
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handlePageChange("home")}
              className={`text-xl font-bold transition-colors ${
                currentPage === "home"
                  ? "text-[#17385b]"
                  : isScrolled
                  ? "text-[#17385b] hover:text-green-600"
                  : "text-white hover:text-green-400"
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
                className={`flex items-center text-xl font-bold transition-colors ${
                  ["about-us", "career", "our-team"].includes(currentPage)
                    ? "text-[#17385b]"
                    : isScrolled
                    ? "text-[#17385b] hover:text-green-600"
                    : "text-white hover:text-green-400"
                }`}
              >
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <button
                    onClick={() => handlePageChange("about-us")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handlePageChange("career")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Career
                  </button>
                  <button
                    onClick={() => handlePageChange("our-team")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center text-xl font-bold transition-colors ${
                  ["software", "hardware", "marketing"].includes(currentPage)
                    ? "text-[#17385b]"
                    : isScrolled
                    ? "text-[#17385b] hover:text-green-600"
                    : "text-white hover:text-green-400"
                }`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => handlePageChange("software")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Software Development
                  </button>
                  <button
                    onClick={() => handlePageChange("hardware")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Hardware Solutions
                  </button>
                  <button
                    onClick={() => handlePageChange("marketing")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Digital Marketing
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handlePageChange("portfolio")}
              className={`text-xl font-bold transition-colors ${
                currentPage === "portfolio"
                  ? "text-[#17385b]"
                  : isScrolled
                  ? "text-[#17385b] hover:text-green-600"
                  : "text-white hover:text-green-400"
              }`}
            >
              Portfolio
            </button>

            <button
              onClick={() => handlePageChange("products")}
              className={`text-xl font-bold transition-colors ${
                currentPage === "products"
                  ? "text-[#17385b]"
                  : isScrolled
                  ? "text-[#17385b] hover:text-green-600"
                  : "text-white hover:text-green-400"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => handlePageChange("contact")}
              className={`text-xl font-bold transition-colors ${
                currentPage === "contact"
                  ? "text-[#17385b]"
                  : isScrolled
                  ? "text-[#17385b] hover:text-green-600"
                  : "text-white hover:text-green-400"
              }`}
            >
              Contact
            </button>

            <button
              onClick={onGetConnected}
              className={`px-6 py-2 rounded-[30px] transition-colors text-xl font-bold ${
                isScrolled
                  ? "bg-[#17385b] text-white hover:bg-green-600"
                  : "bg-[#17385b] text-white hover:bg-green-500"
              }`}
            >
              Get Connected
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-[#17385b]" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
