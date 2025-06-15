import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { ChevronDown } from 'lucide-react';

const MenuCategory = ({ title, items }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Start expanded by default

  const formatTitle = (str) => {
    return str
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='mb-6'>
      {' '}
      {/* Reduced margin-bottom */}
      <button
        className='w-full  max-w-2xl mx-auto flex justify-between items-center text-2xl font-bold text-color1 mb-4 p-3 bg-color5 rounded-lg shadow-md hover:bg-color4 transition-colors duration-300'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      {isExpanded && (
        <div className='max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md'>
          {' '}
          {/* Adjusted max-width, padding */}
          {Array.isArray(items)
            ? // Renderiza elementos directamente si es un array (e.g., Sweet Crepes)
              items.map((item) => <MenuItem key={item.id} item={item} />)
            : // Si es un objeto (e.g., Drinks), itera sobre las subcategorías
              Object.keys(items).map((subCategoryKey) => {
                const subCategoryItems = items[subCategoryKey];
                return (
                  <div key={subCategoryKey} className='mb-4 last:mb-0'>
                    {' '}
                    {/* Reduced margin-bottom */}
                    <h4 className='text-xl font-semibold text-color2 mb-2 border-b pb-1'>
                      {' '}
                      {/* Reduced font size and margin */}
                      {formatTitle(subCategoryKey)}
                    </h4>
                    {Array.isArray(subCategoryItems)
                      ? // Si la subcategoría es un array de items (e.g., Coffee)
                        subCategoryItems.map((item) => (
                          <MenuItem key={item.id} item={item} />
                        ))
                      : // Si la subcategoría es un objeto (e.g., Tea with sub-subcategories)
                        Object.keys(subCategoryItems).map(
                          (subSubCategoryKey) => (
                            <div
                              key={subSubCategoryKey}
                              className='mb-2 last:mb-0 pl-4'
                            >
                              <h5 className='text-lg font-medium text-color3 mb-1'>
                                {formatTitle(subSubCategoryKey)}
                              </h5>
                              {subCategoryItems[subSubCategoryKey].map(
                                (item) => (
                                  <MenuItem key={item.id} item={item} />
                                )
                              )}
                            </div>
                          )
                        )}
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
