import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, onOpen }) => {
  const { name, imageUrl, isSeasonal } = product;
  const [imageSrc, setImageSrc] = useState(imageUrl);
  const [isLoading, setIsLoading] = useState(true);

  const placeholderImage =
    'https://via.placeholder.com/300x200.png?text=Image+Not+Available';

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageSrc(imageUrl);
      setIsLoading(false);
    };
    img.onerror = () => {
      setImageSrc(placeholderImage);
      setIsLoading(false);
    };
  }, [imageUrl]);

  return (
    <button
      className='bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full text-left'
      onClick={onOpen}
      aria-label={`View details for ${name}`}
    >
      <div className='relative h-48'>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
            <span className='text-gray-500'>Loading...</span>
          </div>
        )}
        <img
          src={imageSrc}
          alt={name}
          className={`w-full h-full object-cover ${
            isLoading ? 'hidden' : 'block'
          }`}
        />
        {isSeasonal && (
          <span
            className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'
            aria-hidden={!isSeasonal}
          >
            Seasonal
          </span>
        )}
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
      </div>
    </button>
  );
};

export default ProductCard;
