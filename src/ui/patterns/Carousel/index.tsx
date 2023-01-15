import { useContext, useState } from "react";
import { useIntl } from "react-intl";
import Arrow from "../../icons/Arrow";
import Main from "../Main";
import Globe from "../../icons/Globe";
import { AppContext } from "../../../App";
import DragAndDrop from "../DragAndDrop";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { formatMessage } = useIntl();
  const { locale, setLocale } = useContext(AppContext);
  const items = [<div>hi</div>, <Main />];

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div
      className='relative overflow-hidden w-full min-h-screen bg-gray-200 opacity-50'
      style={{
        backgroundImage: "url(rose_bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='top-0 left-0 w-full h-full flex items-center justify-center overflow-scroll'>
        {items[activeIndex]}
        {/* <DragAndDrop /> */}
      </div>
      <div className='fixed bottom-5 right-5 mx-auto mb-4 mr-4 p-2 flex justify-between'>
        <button
          onClick={handleNextClick}
          className='p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
        >
          <Arrow activeIndex={activeIndex} items={items} />
        </button>
        <button
          title={formatMessage({ id: "toggleLanguage" })}
          onClick={() => {
            const languageToUse = locale === "en" ? "es" : "en";
            localStorage.setItem("lang", languageToUse);
            setLocale(languageToUse);
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
