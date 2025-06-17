
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
    <nav className="sticky top-0 z-50 bg-[#89F336] backdrop-blur-sm border-b border-sage-green shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-between items-center ">
          
        
          <img src="/logo.gif" alt="Logo" className="h-16 w-auto" />
          <h1 className="text-2xl font-bold text-[#244709] ">
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
                  className="text-[#244709] hover:text-[#244709] transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTAs */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-all duration-200"
            >
              Find Produce
            </Button>
            <Button
              className="bg-accent-berry hover:bg-accent-berry/90 text-white hover:scale-105 transition-all duration-200"
            >
              Become a Grower
            </Button>
          </div> */}

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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-sage-green">
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
              {/* <div className="pt-4 pb-2 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-white"
                >
                  Find Produce
                </Button>
                <Button
                  className="w-full bg-accent-berry hover:bg-accent-berry/90 text-white"
                >
                  Become a Grower
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
