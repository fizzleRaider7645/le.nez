import { useContext, useState } from "react";
import { useIntl } from "react-intl";
import Arrow from "../../icons/Arrow";
import Main from "../Main";
import Globe from "../../icons/Globe";
import { AppContext } from "../../../App";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { formatMessage } = useIntl();
  const { locale, setLocale } = useContext(AppContext);
  const items = [<Main />];

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handleLanguageChange = () => {
    const languageToUse = locale === "en" ? "es" : "en";
    localStorage.setItem("lang", languageToUse);
    setLocale(languageToUse);
  };

  const shouldRenderArrowButton = items.length > 1;

  return (
    <div className='min-h-screen'>
      {items[activeIndex]}
      <div className='fixed bottom-5 right-5 mx-auto mb-4 mr-4 p-2 flex justify-between'>
        {shouldRenderArrowButton ? (
          <button
            onClick={handleNextClick}
            className='p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
          >
            <Arrow activeIndex={activeIndex} items={items} />
          </button>
        ) : (
          ""
        )}
        <button
          title={formatMessage({ id: "toggleLanguage" })}
          onClick={handleLanguageChange}
          className='p-2 rounded-full bg-white shadow-xl hover:shadow-2xl focus:outline-none opacity-60'
        >
          <Globe />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
