import React, { useState, useEffect } from 'react';
import { fetchProductsFromSheet } from '../services/productService';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Lightbox from './Lightbox';

const GallerySection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const productsPerPage = 10;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true); // Ensure loading is true at the start
        const fetchedProducts = await fetchProductsFromSheet();
        setProducts(fetchedProducts);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Loading State
  if (loading) {
    return (
      <section id='gallery' className='py-20 bg-color4 text-center'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-color1 mb-4'>
            Product Catalog
          </h2>
          <p className='text-2xl text-gray-600'>
            Loading our delicious products...
          </p>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section id='gallery' className='py-20 bg-color4 text-center'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-color1 mb-4'>
            Product Catalog
          </h2>
          <div
            className='bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4'
            role='alert'
          >
            <p className='font-bold'>We're working on this section!</p>
            <p>
              There was a problem loading our products. Please check back later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Success State
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openLightbox = (index) => {
    const actualIndex = indexOfFirstProduct + index;
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
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
