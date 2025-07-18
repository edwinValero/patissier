import React from 'react';
import MenuColumn from './MenuSection/MenuColumn';
import menuData from '../data/menu.json';

const MenuSection = () => {
  return (
    <section id='menu' className='py-20 bg-color4'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-color1'>Our Menu</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>

        <div className='max-w-4xl mx-auto'>
          {menuData.drinks.length > 0 && (
            <MenuColumn title='Drinks' items={menuData.drinks} />
          )}
          {menuData.crepes.length > 0 && (
            <MenuColumn title='Crepes' items={menuData.crepes} />
          )}
          {menuData.iceCreams.length > 0 && (
            <MenuColumn title='Ice Creams' items={menuData.iceCreams} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
