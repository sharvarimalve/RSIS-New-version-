import React from 'react';
import { Mail as MailIcon , Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about-us' },
    { label: 'Career', page: 'career' },
    { label: 'Hardware', page: 'hardware' },
    { label: 'Marketing', page: 'marketing' },
    { label: 'Our Team', page: 'our-team' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Products', page: 'products' },
    { label: 'Software', page: 'software' },
    { label: 'Contact', page: 'contact' },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo-trajectoryfy.jpg" 
                alt="Right Serve Infotech Systems" 
                className="h-12 w-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Right Serve Infotech</h3>
                <p className="text-sm text-gray-400">Systems Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading IT solutions provider specializing in software development, hardware solutions, 
              and digital marketing services. We help businesses transform digitally with innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" href="https://www.facebook.com/RightServe"/>
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    className="text-gray-400 hover:text-white transition-colors bg-transparent border-none outline-none cursor-pointer"
                    onClick={() => onPageChange && onPageChange(link.page)}
                    type="button"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
             <div className="contact-item flex  gap-3">
                  <MapPin size={60} className="text-gray-400"/>
                  <a
                    href="https://www.google.com/maps?q=10,+Saurabh+Nagar-2,+Besa+Rd,+near+Hanuman+Mandir,+Saubhagya+Nagar,+Ghogali,+Nagpur,+Maharashtra+440034"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    10, Saurabh Nagar-2, Besa Rd, near Hanuman Mandir, Saubhagya Nagar, Ghogali,
                    Nagpur, Maharashtra 440034
                  </a>
                </div>
               <div className="contact-item flex items-center gap-3">
                  <Phone size={20} className="text-gray-400"/>
                  <a
                    href="tel:+917972192831"
                  
                  >
                    +91 7972192831
                  </a>
                </div>
              <div className="contact-item flex items-center gap-3">
                  <MailIcon size={20} className="text-red-500" />
                  <a
                    href="mailto:rightserveinfotechsystems@gmail.com"
                    
                  >
                    rightserveinfotechsystems@gmail.com
                  </a>
                </div>
            </div>
          </div>


        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
         <p>&copy;   Copyright RIGHT SERVE INFOTECH SYSTEMS PVT. LTD. 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;