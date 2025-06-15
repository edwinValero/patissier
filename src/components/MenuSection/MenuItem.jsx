import React from 'react';

const MenuItem = ({ item }) => {
  const { nombre, descripcion, precio } = item;

  return (
    <div className='flex justify-between items-baseline py-1 border-b border-gray-200 last:border-b-0'>
      <div className='flex flex-col'>
        <span className='text-base font-semibold text-gray-800'>{nombre}</span>
        {descripcion && (
          <span className='text-xs text-gray-600 italic'>{descripcion}</span>
        )}
      </div>
      {precio && (
        <span className='text-base font-bold text-color1'>${precio}</span>
      )}
    </div>
  );
};

export default MenuItem;
