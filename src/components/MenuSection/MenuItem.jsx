import React from 'react';

const MenuItem = ({ item, itemIndex }) => {
  const { name, description, isTitle } = item;

  if (isTitle) {
    return (
      <h4
        className={`text-xl font-semibold text-color2 mb-3 border-b pb-2 ${
          itemIndex === 0 ? '' : 'mt-6'
        }`}
      >
        {name}
      </h4>
    );
  }

  return (
    <div className='flex flex-col py-1'>
      <span className='text-base font-semibold text-gray-800'>{name}</span>
      {description && (
        <span className='text-xs text-gray-600 italic'>{description}</span>
      )}
    </div>
  );
};

export default MenuItem;
