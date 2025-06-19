
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#sell', label: 'Sell Your Greens' },
    { href: '#buy', label: 'Find Fresh Produce' },
    
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-700 via-green-600 to-green-500 backdrop-blur-sm border-b border-sage-green shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 ">
          {/* Logo */}
          <div className="flex justify-between items-center ">
          
        
          <img src="/logo.gif" alt="Logo" className="h-20 w-auto" />
          <h1 className="text-2xl font-bold text-[#ffff] ">
              GreensNearBy
            </h1>
         
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#ffff] hover:text-[#ffff] transition-colors duration-200 px-3 py-2 text-m font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-forest-green hover:text-accent-berry focus:outline-none focus:text-accent-berry"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#DDFFBB] border-t border-sage-green overflow-hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-forest-green hover:text-accent-berry block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
