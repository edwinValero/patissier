import React from 'react';

const GalleryImage = ({ src, alt, onOpen }) => {
  return (
    <div
      className='relative w-full h-64 rounded-lg shadow-md overflow-hidden cursor-pointer group'
      onClick={onOpen}
    >
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
      />
    </div>
  );
};

export default GalleryImage;
