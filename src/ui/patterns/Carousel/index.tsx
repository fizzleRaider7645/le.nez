import { useContext, useState } from "react";
import { useIntl } from "react-intl";
import Arrow from "../../icons/Arrow";
import Hero from "../Hero";
import Globe from "../../icons/Globe";
import { AppContext } from "../../../App";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intl = useIntl();
  const { locale, setLocale } = useContext(AppContext);
  const items = [<div>hi</div>, <Hero />];

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className='relative overflow-hidden w-full min-h-screen bg-gray-200'>
      <div className='top-0 left-0 w-full h-full flex items-center justify-center overflow-scroll'>
        {items[activeIndex]}
      </div>
      <div className='fixed bottom-5 right-5 mx-auto mb-4 mr-4 p-2 flex flex-col items-center justify-center'>
        <button
          onClick={handleNextClick}
          className='p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
        >
          <Arrow activeIndex={activeIndex} items={items} />
        </button>
        <button
          title={intl.formatMessage({ id: "toggleLanguage" })}
          onClick={() => {
            locale === "en" ? setLocale("es") : setLocale("en");
          }}
          className='p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
        >
          <Globe />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
