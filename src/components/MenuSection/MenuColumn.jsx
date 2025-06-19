import React from 'react';
import MenuItem from './MenuItem';

const MenuColumn = ({ title, items }) => {
  // Dividir la lista de items de esta categoría en dos para el diseño de columnas
  const half = Math.ceil(items.length / 2);
  const column1Items = items.slice(0, half);
  const column2Items = items.slice(half);

  return (
    <div className='mb-12'>
      <h3 className='text-3xl font-bold text-color5 bg-color1 p-3 rounded-md mb-6 text-center shadow-lg'>
        {title}
      </h3>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8'>
          {/* Columna 1 interna */}
          <div className='flex flex-col'>
            {column1Items.map((item, index) => (
              <MenuItem key={index} item={item} itemIndex={index} />
            ))}
          </div>
          {/* Columna 2 interna */}
          <div className='flex flex-col'>
            {column2Items.map((item, index) => (
              <MenuItem
                key={index + half}
                item={item}
                itemIndex={index + half}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuColumn;
