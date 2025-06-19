import React from 'react';
import menuData from '../data/menu.json';
import MenuColumn from './MenuSection/MenuColumn';

const MenuSection = () => {
  const { drinks, crepes, ice_creams } = menuData;

  return (
    <section id='menu' className='py-20 bg-color4'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-color1'>Our Menu</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>

        {/* Contenedor para el diseño vertical */}
        <div className='max-w-4xl mx-auto'>
          <MenuColumn title='Drinks' items={drinks} />
          <MenuColumn title='Crepes' items={crepes} />
          <MenuColumn title='Ice Creams' items={ice_creams} />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
