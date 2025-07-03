import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import businessData from '../data/business_data.json';

// Helper to get the correct icon component
const getIcon = (name) => {
  switch (name) {
    case 'Instagram':
      return <Instagram className='w-7 h-7' />;
    case 'Facebook':
      return <Facebook className='w-7 h-7' />;
    case 'Twitter':
      return <Twitter className='w-7 h-7' />;
    default:
      return null;
  }
};

const ContactSection = () => {
  const { address, phone, socialLinks, email } = businessData;

  const contactInfo = [
    {
      icon: <MapPin className='w-6 h-6 text-color1' />,
      text: address,
    },
    {
      icon: <Phone className='w-6 h-6 text-color1' />,
      text: phone,
    },
    {
      icon: <Mail className='w-6 h-6 text-color1' />,
      text: email,
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
          <address className='bg-white p-8 rounded-lg shadow-lg mb-12 not-italic'>
            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-center gap-4'>
                  {info.icon}
                  <p className='text-lg text-gray-700'>{info.text}</p>
                </div>
              ))}
            </div>
          </address>

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
                  aria-label={social.name}
                  className='text-color2 hover:text-color1 transition-transform duration-300 transform hover:scale-125'
                >
                  {getIcon(social.name)}
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
