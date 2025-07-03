import React, { useState, useEffect } from 'react';
import { fetchMenu } from '../services/sheetService'; // Updated import
import MenuColumn from './MenuSection/MenuColumn';

const MenuSection = () => {
  const [menuData, setMenuData] = useState({
    drinks: [],
    crepes: [],
    iceCreams: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        setLoading(true);
        const fetchedMenu = await fetchMenu();
        setMenuData(fetchedMenu);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  // Loading State
  if (loading) {
    return (
      <section id='menu' className='py-20 bg-color4 text-center'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-color1 mb-4'>Our Menu</h2>
          <p className='text-2xl text-gray-600'>
            Loading our delicious menu...
          </p>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section id='menu' className='py-20 bg-color4 text-center'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-color1 mb-4'>Our Menu</h2>
          <div
            className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4'
            role='alert'
          >
            <p className='font-bold'>We're working on this section!</p>
            <p>
              There was a problem loading our menu. Please check back later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Success State
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
