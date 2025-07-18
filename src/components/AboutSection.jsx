import React from 'react';

const AboutSection = () => {
  const heroImageUrl = `${import.meta.env.BASE_URL}images/hero.jpeg`;
  return (
    <section id='about-us' className='py-20 bg-color5'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Our Story</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>
        <article className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2'>
            <img
              src={heroImageUrl}
              alt='Artisan pastry'
              className='rounded-lg shadow-2xl w-full h-auto object-cover'
            />
          </div>
          <div className='md:w-1/2 text-lg text-gray-700'>
            <p className='mb-4'>
              At <span className='font-bold text-color1'>JC Patissier</span>,
              every dessert is a work of art, crafted with love, tradition, and
              the freshest ingredients. Our story began in a small kitchen, with
              family recipes passed down through generations.
            </p>
            <p>
              Today, we bring that same passion to your table, offering a unique
              experience where quality and authentic flavor are the
              protagonists. We believe in the power of a good dessert to create
              unforgettable moments.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
