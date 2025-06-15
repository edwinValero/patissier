import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ src, alt, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPrev, onNext, onClose]);

  if (!src) return null;

  // Extract image name without extension
  const imageName = src.split('/').pop().split('.')[0].replace(/_/g, ' ');

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

        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-6 right-6 text-white bg-color1 rounded-full p-2 hover:bg-color2 transition-colors'
          aria-label='Close'
        >
          <X size={24} />
        </button>

        {/* Previous button */}
        <button
          onClick={onPrev}
          className='absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors'
          aria-label='Previous image'
        >
          <ChevronLeft size={32} />
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors'
          aria-label='Next image'
        >
          <ChevronRight size={32} />
        </button>

        {/* Image Name Pill */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full'>
          {imageName}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
