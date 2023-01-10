import { useState } from "react";
import Hero from "../Hero";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [<div>hi</div>, <Hero />];

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className='relative overflow-hidden w-full min-h-screen bg-gray-200'>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-scroll'>
        {items[activeIndex]}
      </div>
      <button
        onClick={handleNextClick}
        className='absolute bottom-0 right-0 mb-4 mr-4 p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none'
      >
        <svg
          className='w-6 h-6 text-gray-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
