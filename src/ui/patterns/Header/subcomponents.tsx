import { useEffect } from "react";
import { DropDownMenuProps, SelectionOption } from "./types";

export function DropdownMenu({
  showDropdown,
  setShowDropdown,
}: DropDownMenuProps) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#dropdown-menu")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDropdown]);

  return showDropdown ? (
    <div
      id='dropdown-menu'
      className='absolute right-0 mt-2 py-2 bg-white rounded-lg shadow-xl z-2'
    >
      <a
        id='dropdown-menu'
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
  ) : (
    <></>
  );
}

export function SelectionOptions() {
  const options: SelectionOption[] = [
    { route: "/", text: "Home" },
    { route: "/", text: "About" },
    { route: "/", text: "Contact" },
  ];

  return (
    <div className='w-1/2 flex justify-end'>
      {options.map((option) => {
        return (
          <a
            key={option.text}
            id='dropdown-menu'
            href={option.route}
            className='block px-4 py-2 text-gray-900 rounded-full hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
          >
            {option.text}
          </a>
        );
      })}
    </div>
  );
}
