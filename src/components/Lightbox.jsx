import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const Lightbox = ({ src, alt, onClose }) => {
  const closeButtonRef = useRef(null);
  const fullImageUrl = `${import.meta.env.BASE_URL}${
    src.startsWith('/') ? src.substring(1) : src
  }`;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus the close button when the lightbox opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className='fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label={`${alt} - Image Lightbox`}
    >
      <div
        className='relative bg-white p-4 rounded-lg shadow-2xl max-w-4xl w-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={fullImageUrl}
          alt={alt}
          className='max-h-[80vh] max-w-full rounded-lg'
        />
        <div className='absolute bottom-4 left-4 right-4 bg-black/50 text-white p-2 text-center rounded-b-lg'>
          <h3 className='text-lg font-bold'>{alt}</h3>
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className='absolute -top-5 -right-5 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color1'
          aria-label='Close image lightbox'
        >
          <X size={28} />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
