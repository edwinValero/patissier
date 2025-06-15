import React, { useState, useEffect, useRef } from 'react';
import GalleryImage from './GalleryImage';
import Lightbox from './Lightbox';

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [visibleImageCount, setVisibleImageCount] = useState(6); // Initial count changed to 6
  const galleryRef = useRef(null); // Create a ref for the gallery section

  useEffect(() => {
    // Importa todas las imágenes de la carpeta de productos dinámicamente
    const imageModules = import.meta.glob('/src/assets/images/products/*.png', {
      eager: true,
      as: 'url',
    });
    const imageList = Object.values(imageModules);
    setImages(imageList);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleShowMore = () => {
    setVisibleImageCount((prevCount) => prevCount + 6); // Show 6 more images
  };

  const handleShowLess = () => {
    setVisibleImageCount(6); // Reset to show only 6 images
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the top of the gallery
    }
  };

  return (
    <section id='gallery' ref={galleryRef} className='py-20 bg-color4'>
      {' '}
      {/* Assign ref to the section */}
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Our Gallery</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {images.slice(0, visibleImageCount).map((src, index) => (
            <GalleryImage
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              onOpen={() => openLightbox(index)}
            />
          ))}
        </div>
        <div className='text-center mt-12 flex justify-center gap-4'>
          {visibleImageCount < images.length && (
            <button
              onClick={handleShowMore}
              className='bg-color1 hover:bg-color2 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300'
            >
              Show More
            </button>
          )}
          {visibleImageCount > 6 && (
            <button
              onClick={handleShowLess}
              className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300'
            >
              Show Less
            </button>
          )}
        </div>
      </div>
      {currentImageIndex !== null && (
        <Lightbox
          src={images[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          onClose={closeLightbox}
          onPrev={goToPrevious}
          onNext={goToNext}
        />
      )}
    </section>
  );
};

export default GallerySection;
