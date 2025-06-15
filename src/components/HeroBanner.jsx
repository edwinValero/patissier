import React from 'react';
import HeroImage from '../assets/images/hero.png';

const HeroBanner = () => {
  return (
    <section
      id='home'
      className='relative h-screen bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='relative z-10 text-center text-white p-4'>
        <h1
          className='text-5xl md:text-7xl font-body text-color5 mb-4'
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
        >
          "Life is short Eat Dessert First!"
        </h1>
        <a
          href='#menu'
          className='bg-color2 hover:bg-color1 text-white font-body py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105'
        >
          View Menu
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
