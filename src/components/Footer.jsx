import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about-us', label: 'About Us' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
    { href: '#location', label: 'How to Get Here' },
  ];

  const socialLinks = [
    {
      icon: <Instagram className='w-6 h-6' />,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
    {
      icon: <Facebook className='w-6 h-6' />,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
    {
      icon: <Twitter className='w-6 h-6' />,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
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
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='hover:text-color3 transition-colors duration-300'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
