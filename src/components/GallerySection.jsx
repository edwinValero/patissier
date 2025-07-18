import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Lightbox from './Lightbox';
import productData from '../data/products.json';

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const productsPerPage = 10;
  const { products } = productData;

  // Memoize the current products to prevent re-calculation on every render
  const currentProducts = React.useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, products]);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsFading(false);
    }, 300); // Match this duration with the CSS transition
  };

  const openLightbox = (index) => {
    const actualIndex = (currentPage - 1) * productsPerPage + index;
    setCurrentProductIndex(actualIndex);
  };

  const closeLightbox = () => {
    setCurrentProductIndex(null);
  };

  return (
    <section id='gallery' className='py-20 bg-color4'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-color1'>Product Catalog</h2>
          <div className='w-24 h-1 bg-color2 mx-auto mt-4'></div>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 transition-opacity duration-300 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {currentProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={() => openLightbox(index)}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      {currentProductIndex !== null && products.length > 0 && (
        <div className='hidden md:block'>
          <Lightbox
            src={products[currentProductIndex].imageUrl}
            alt={products[currentProductIndex].name}
            onClose={closeLightbox}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
