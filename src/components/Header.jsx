import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
    { href: '#location', label: 'How to Get Here' },
  ];

  return (
    <header className='bg-color1 shadow-md sticky top-0 z-50'>
      <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <a href='/' className='text-2xl font-script text-color5'>
          JC Patissier
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 items-center'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-color5 hover:text-color4 transition-colors duration-300'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-color5 focus:outline-none'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-color2'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='text-color5 hover:bg-color3 block px-3 py-2 rounded-md text-base font-body font-medium'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
