import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const SliderArrow = ({ direction, onClick }) => {
  const ArrowIcon = direction === 'left' ? HiChevronLeft : HiChevronRight;

  return (
    <div
      className={`hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer ${direction === 'right' ? 'right-0' : ''}`}
      onClick={onClick}
    >
      <ArrowIcon />
    </div>
  );
};

export default SliderArrow;
