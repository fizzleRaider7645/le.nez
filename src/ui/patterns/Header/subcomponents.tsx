import { useContext, useEffect } from "react";
import { DropDownConext } from ".";
import routes from "../../../const/router/routes";
import { SelectionOption } from "./types";

export function DropdownMenu() {
  const { showDropdown, setShowDropdown } = useContext(DropDownConext);

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
      className='z-10 absolute right-0 mt-2 py-2 bg-white opacity-50 rounded-lg shadow-xl'
    >
      <a
        id='dropdown-menu'
        href={routes.HOME}
        className='block px-4 py-2 text-gray-900 rounded-full opacity-100 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
      >
        Home
      </a>
      <a
        href={routes.ABOUT}
        className='block px-4 py-2 text-gray-900 rounded-full opacity-100 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
      >
        About
      </a>
      <a
        href={routes.ABOUT}
        className='block px-4 py-2 text-gray-900 rounded-full opacity-100 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
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
    { route: routes.HOME, content: "Home" },
    { route: routes.ABOUT, content: "About" },
    { route: routes.CONTACT, content: "Contact" },
  ];

  return (
    <div className='w-1/2 flex justify-end'>
      {options.map((option) => {
        return (
          <a
            key={option.content}
            id='dropdown-menu'
            href={option.route}
            className='block px-4 py-2 text-gray-900 rounded-full bg-transparent hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont transition-colors duration-300 ease-in-out'
          >
            {option.content}
          </a>
        );
      })}
    </div>
  );
}
