import HamburgerMenu from "../../icons/HamburgerMenu";

function Header() {
  return (
    <header className='bg-gray-200 py-4 shadow-lg'>
      <div className='container mx-auto flex items-center justify-between flex-wrap'>
        <div className='w-1/2 text-center text-gray-700 text-sm'>
          <a href='#' className='text-gray-900 font-bold text-xl'>
            le.nez
          </a>
        </div>
        <div className='w-1/2 flex justify-end'>
          <div className='hidden md:block'>
            <a
              href='#'
              className='px-3 py-2 text-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800 active:bg-gray-800'
            >
              Home
            </a>
            <a
              href='#'
              className='px-3 py-2 text-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800 active:bg-gray-800'
            >
              About
            </a>
            <a
              href='#'
              className='px-3 py-2 text-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800 active:bg-gray-800'
            >
              Contact
            </a>
          </div>
          <div className='block md:hidden'>
            <button
              className='px-3 py-2 font-bold text-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800 active:bg-gray-800'
              type='button'
            >
              <HamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
