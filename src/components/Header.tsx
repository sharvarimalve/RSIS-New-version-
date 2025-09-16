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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active / inactive link style
  const linkClass = (page: string) =>
    `block text-base font-semibold px-2 py-1 transition-colors border-b-4 rounded-b-md
    ${currentPage === page
      ? "border-[#17385b] text-[#17385b] font-bold"
      : `border-transparent hover:border-[#17385b] ${isScrolled ? "text-gray-800" : "text-white"
      }`
    }`;

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsAboutOpen(false);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  };

  // For About & Services triggers
  const dropdownTriggerClass = (pages: string[]) =>
    `block text-base font-semibold px-2 py-1 transition-colors border-b-4 rounded-b-md
    ${pages.includes(currentPage)
      ? "border-[#17385b] text-[#17385b] font-bold"
      : `border-transparent hover:border-[#17385b] ${isScrolled ? "text-gray-800" : "text-white"
      }`
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handlePageChange("home")}
          >
            <img
              src="/logo-trajectoryfy.jpg"
              alt="Right Serve Infotech Systems"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full mr-3"
            />
            <div className="hidden sm:block">
              <h1
                className={`text-lg sm:text-xl font-bold ${isScrolled ? "text-[#17385b]" : "text-white"
                  }`}
              >
                Right Serve Infotech
              </h1>
              <h1
                className={`text-lg sm:text-xl font-bold ${isScrolled ? "text-[#17385b]" : "text-white"
                  }`}
              >
                System Pvt. Ltd
              </h1>
            </div>
          </div>

          {/* Desktop nav (large & above) */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => handlePageChange("home")}
              className={linkClass("home")}
            >
              Home
            </button>

            {/* About dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={dropdownTriggerClass([
                  "about-us",
                  "career",
                  "our-team",
                ])}
              >
                About
              </button>
              {isAboutOpen && (
                <div className="absolute mt-2 w-40 bg-white shadow-md rounded p-2">
                  <button
                    onClick={() => handlePageChange("about-us")}
                    className="block w-full text-left px-3 py-1 hover:text-[#17385b]"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handlePageChange("career")}
                    className="block w-full text-left px-3 py-1 hover:text-[#17385b]"
                  >
                    Career
                  </button>
                  <button
                    onClick={() => handlePageChange("our-team")}
                    className="block w-full text-left px-3 py-1 hover:text-[#17385b]"
                  >
                    Our Team
                  </button>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={dropdownTriggerClass([
                  "software",
                  "hardware",
                  "marketing",
                ])}
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-md rounded p-2">
                  <button
                    onClick={() => handlePageChange("software")}
                    className="block w-full text-left px-3 py-1 hover:text-[#17385b]"
                  >
                    Software Development
                  </button>
                  <button
                    onClick={() => handlePageChange("hardware")}
                    className="block w-full text-left px-3 py-1 hover:text-[#17385b]"
                  >
                    Hardware Solutions
                  </button>
                  <button
                    onClick={() => handlePageChange("marketing")}
                    className="block w-full text-left px-3 py-1 hover:text-[#17385b]"
                  >
                    Digital Marketing
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handlePageChange("portfolio")}
              className={linkClass("portfolio")}
            >
              Portfolio
            </button>
            <button
              onClick={() => handlePageChange("products")}
              className={linkClass("products")}
            >
              Products
            </button>
            <button
              onClick={() => handlePageChange("contact")}
              className={linkClass("contact")}
            >
              Contact
            </button>

            <button
              onClick={onGetConnected}
              className="ml-4 px-4 py-2 rounded-full bg-[#17385b] text-white font-semibold hover:bg-[#1e4b7e]"
            >
              Get Connected
            </button>
          </nav>

          {/* Hamburger for mobile + tablet */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded focus:outline-none ${isScrolled ? "text-[#17385b]" : "text-white"
              }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile & tablet menu (slim width) */}
        {isMobileMenuOpen && (
          <div
            className="
              lg:hidden
              mt-2
              max-h-[75vh]
              overflow-y-auto
              bg-white
              shadow-lg
              rounded-lg
              py-4 px-4 space-y-3
              w-full
              max-w-xs sm:max-w-sm md:max-w-md
              mx-auto
            "
          >
            <button
              onClick={() => handlePageChange("home")}
              className={linkClass("home")}
            >
              Home
            </button>

            {/* About */}
            <div>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex items-center justify-between w-full font-semibold text-gray-800"
              >
                About <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <button
                    onClick={() => handlePageChange("about-us")}
                    className={linkClass("about-us")}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handlePageChange("career")}
                    className={linkClass("career")}
                  >
                    Career
                  </button>
                  <button
                    onClick={() => handlePageChange("our-team")}
                    className={linkClass("our-team")}
                  >
                    Our Team
                  </button>
                </div>
              )}
            </div>

            {/* Services */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full font-semibold text-gray-800"
              >
                Services <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <button
                    onClick={() => handlePageChange("software")}
                    className={linkClass("software")}
                  >
                    Software Development
                  </button>
                  <button
                    onClick={() => handlePageChange("hardware")}
                    className={linkClass("hardware")}
                  >
                    Hardware Solutions
                  </button>
                  <button
                    onClick={() => handlePageChange("marketing")}
                    className={linkClass("marketing")}
                  >
                    Digital Marketing
                  </button>
                </div>
              )}
            </div>

            {/* Other links */}
            <button
              onClick={() => handlePageChange("portfolio")}
              className={linkClass("portfolio")}
            >
              Portfolio
            </button>
            <button
              onClick={() => handlePageChange("products")}
              className={linkClass("products")}
            >
              Products
            </button>
            <button
              onClick={() => handlePageChange("contact")}
              className={linkClass("contact")}
            >
              Contact
            </button>

            <button
              onClick={onGetConnected}
              className="block w-full mt-3 px-4 py-2 rounded-full bg-[#17385b] text-white font-semibold"
            >
              Get Connected
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
