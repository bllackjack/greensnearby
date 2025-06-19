
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#C7E9B0] text-[#244709] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div className="footer-section flex flex-col justify-center items-center">
          <img src="/logo.gif" alt="Logo" className=" h-20 w-auto md:h-25 md:w-auto" />
          <h1 className=' text:xl md:text-2xl text-[#244709] font-bold'>GreensNearBy</h1>
          </div> 
          {/* Contact Us */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 text-[#244709]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@greensnearby.com" className="hover:text-[#16a149] transition-colors">
                  info@greensnearby.com
                </a>
              </div>
              <div className="flex items-center space-x-2 hover:text-[#16a149]">
                <Phone className="w-4 h-4" />
                <span className="text-[#244709]  hover:text-[#16a149]">(555) 123-GREEN</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 text-[#244709]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sell" className="hover:text-[#16a149] transition-colors">
                  Sell Your Greens
                </a>
              </li>
              <li>
                <a href="#buy" className="hover:text-[#16a149]transition-colors">
                  Find Fresh Produce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#16a149] transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 text-[#244709]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#16a149] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#16a149] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#16a149] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 text-[#244709]">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="hover:text-[#16a149] transition-colors p-2 hover:bg-white rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-[#16a149] transition-colors p-2 hover:bg-white rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="hover:text-[#16a149] transition-colors p-2 hover:bg-white rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-[#244709]">
                Join our community of local growers and fresh food lovers!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#244709]/80 mt-8 pt-8 text-center">
          <p className="text-[#244709]">
            © {currentYear} GreensNearBy.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
