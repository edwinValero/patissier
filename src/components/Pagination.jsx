import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      className='flex justify-center items-center gap-4 mt-8'
      aria-label='Product pagination'
    >
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className='bg-color1 hover:bg-color2 text-white font-bold py-2 px-4 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center'
        aria-label='Go to previous page'
      >
        <ChevronLeft size={20} className='mr-1' />
        Previous
      </button>
      <span
        className='text-lg font-semibold text-gray-700'
        aria-live='polite'
        aria-atomic='true'
      >
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='bg-color1 hover:bg-color2 text-white font-bold py-2 px-4 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center'
        aria-label='Go to next page'
      >
        Next
        <ChevronRight size={20} className='ml-1' />
      </button>
    </nav>
  );
};

export default Pagination;
