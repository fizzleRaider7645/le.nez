import { useState } from "react";
import HamburgerMenu from "../../icons/HamburgerMenu";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className='bg-gray-100 py-4 border-b border-gray-300 shadow-2xl'>
      <div className='container mx-auto flex items-center justify-between flex-wrap'>
        <div className='w-1/2 text-center text-gray-700 text-sm'>
          <a
            href='#'
            className='text-gray-900 font-bold text-xl font-headerFont'
          >
            le👃nez
          </a>
        </div>
        <div className='w-1/2 flex justify-end'>
          <div className='hidden md:block'>
            <a
              href='#'
              className='px-3 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
            >
              Home
            </a>
            <a
              href='#'
              className='px-3 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
            >
              About
            </a>
            <a
              href='#'
              className='px-3 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
            >
              Contact
            </a>
          </div>
          <div className='block md:hidden'>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className='px-3 py-2 font-bold text-gray-900 rounded-full  hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400'
              type='button'
            >
              <HamburgerMenu />
              {showDropdown && (
                <div className='absolute right-0 mt-2 py-2 bg-white rounded-lg shadow-xl'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
                  >
                    Home
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
                  >
                    Contact
                  </a>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
