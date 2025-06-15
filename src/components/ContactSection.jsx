import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className='w-6 h-6 text-color1' />,
      text: '33 Front St S, Thorold, ON L2V 1W8',
    },
    {
      icon: <Phone className='w-6 h-6 text-color1' />,
      text: '+1 (289) 396-8454',
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className='w-7 h-7' />,
      href: 'https://www.instagram.com/jcpatissier_cafe',
      label: 'Instagram',
    },
    {
      icon: <Facebook className='w-7 h-7' />,
      href: 'https://www.facebook.com/JcPatissierCafe',
      label: 'Facebook',
    },
  ];

  return (
    <section id='contact' className='py-20 bg-color5'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Contact Us</h2>
          <p className='text-lg text-gray-600 mt-4'>
            We'd love to hear from you. Visit us or send us a message!
          </p>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white p-8 rounded-lg shadow-lg mb-12'>
            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-center gap-4'>
                  {info.icon}
                  <p className='text-lg text-gray-700'>{info.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center'>
            <h3 className='text-2xl font-bold text-color1 mb-6'>
              Follow Us on Social Media
            </h3>
            <div className='flex justify-center gap-8'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='text-color2 hover:text-color1 transition-transform duration-300 transform hover:scale-125'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
