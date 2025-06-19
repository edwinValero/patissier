import React from 'react';
import menuData from '../data/menu.json';
import MenuCategory from './MenuSection/MenuCategory';

const MenuSection = () => {
  const { drinks, sweet_crepes, savoury_crepes } = menuData;

  return (
    <section id='menu' className='py-20 bg-color4'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Our Menu</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>

        <MenuCategory title='Drinks Menu' items={drinks} expanded={true} />
        <MenuCategory title='Sweet Crepes' items={sweet_crepes} />
        <MenuCategory title='Savoury Crepes' items={savoury_crepes} />
      </div>
    </section>
  );
};

export default MenuSection;
