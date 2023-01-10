import { useState } from "react";
import HamburgerMenu from "../../icons/HamburgerMenu";
import { DropdownMenu, SelectionOptions } from "./subcomponents";

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
            <SelectionOptions />
          </div>
          <div className='block md:hidden'>
            <button
              id='dropdown-menu'
              onClick={() => setShowDropdown(!showDropdown)}
              className='px-3 py-2 font-bold text-gray-900 rounded-full'
              type='button'
            >
              <HamburgerMenu />
              <DropdownMenu
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
