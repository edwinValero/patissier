import React, { useEffect } from 'react';
// Removed X import

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className='fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center'
      onClick={onClose}
    >
      <div
        className='relative bg-transparent p-4'
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        <img
          src={src}
          alt={alt}
          className='max-h-[80vh] max-w-full rounded-lg shadow-2xl'
        />

        {/* Close button - REMOVED */}
        {/* Image Name Pill - REMOVED */}
      </div>
    </div>
  );
};

export default Lightbox;
