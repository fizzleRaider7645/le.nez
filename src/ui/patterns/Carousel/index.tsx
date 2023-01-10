import { useState } from "react";
import Arrow from "../../icons/Arrow";
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
        className='fixed bottom-10 right-10 mx-auto mb-4 mr-4 p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
      >
        <Arrow activeIndex={activeIndex} items={items} />
      </button>
    </div>
  );
}

export default Carousel;
