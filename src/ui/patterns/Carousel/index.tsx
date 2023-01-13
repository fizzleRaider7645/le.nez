import { Transition } from "react-transition-group";
import { useRef, useState } from "react";
import Arrow from "../../icons/Arrow";
import Hero from "../Hero";

function Carousel() {
  const nodeRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [<div>hi</div>, <Hero />];

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <Transition nodeRef={nodeRef} in={true} timeout={7000}>
      {(state) => (
        <div
          ref={nodeRef}
          className='relative overflow-hidden w-full min-h-screen bg-gray-200'
        >
          <div className='top-0 left-0 w-full h-full flex items-center justify-center overflow-scroll'>
            {items[activeIndex]}
          </div>
          <button
            onClick={handleNextClick}
            className='fixed bottom-5 right-5 mx-auto mb-4 mr-4 p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
          >
            <Arrow activeIndex={activeIndex} items={items} />
          </button>
        </div>
      )}
    </Transition>
  );
}

export default Carousel;
