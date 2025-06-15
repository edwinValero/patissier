import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import businessData from '../data/business_data.json';

// Helper to get the correct icon component
const getIcon = (name) => {
  switch (name) {
    case 'Instagram':
      return <Instagram className='w-6 h-6' />;
    case 'Facebook':
      return <Facebook className='w-6 h-6' />;
    case 'Twitter':
      return <Twitter className='w-6 h-6' />;
    default:
      return null;
  }
};

const Footer = () => {
  const { socialLinks } = businessData;

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
    { href: '#location', label: 'How to Get Here' },
  ];

  return (
    <footer className='bg-color1 text-color5'>
      <div className='container mx-auto px-6 py-8'>
        <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
          <div className='text-center sm:text-left mb-4 sm:mb-0'>
            <a href='/' className='text-2xl font-bold'>
              Patissier
            </a>
            <p className='text-sm text-color4'>
              &copy; {new Date().getFullYear()} Patissier. All rights reserved.
            </p>
          </div>
          <div className='flex flex-col items-center sm:flex-row sm:items-center gap-4'>
            <div className='flex flex-wrap justify-center gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='text-sm hover:text-color3 transition-colors duration-300'
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className='flex justify-center gap-4 mt-4 sm:mt-0 sm:ml-6'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className='hover:text-color3 transition-colors duration-300'
                >
                  {getIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='text-center text-color4 text-xs mt-8 border-t border-color2/50 pt-4'>
          <div className='flex items-center justify-center gap-2'>
            <span>Created by Edwin Valero</span>
            <a
              href='https://www.linkedin.com/in/edwinvaleroar/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Edwin Valero on LinkedIn'
              className='hover:text-color3 transition-colors duration-300'
            >
              <Linkedin className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
