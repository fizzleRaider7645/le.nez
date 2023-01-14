import { useContext, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
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
        <FormattedMessage id='home' />
      </a>
      <a
        href={routes.ABOUT}
        className='block px-4 py-2 text-gray-900 rounded-full opacity-100 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
      >
        <FormattedMessage id='about' />
      </a>
      <a
        href={routes.ABOUT}
        className='block px-4 py-2 text-gray-900 rounded-full opacity-100 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont'
      >
        <FormattedMessage id='contact' />
      </a>
    </div>
  ) : (
    <></>
  );
}

export function SelectionOptions() {
  const { formatMessage } = useIntl();

  const options: SelectionOption[] = [
    { route: routes.HOME, id: "home" },
    { route: routes.ABOUT, id: "about" },
    { route: routes.CONTACT, id: "contact" },
  ];

  return (
    <div className='w-1/2 flex justify-end'>
      {options.map(({ id, route }, _index) => {
        return (
          <a
            key={id}
            id='dropdown-menu'
            href={route}
            className='block px-4 py-2 text-center text-gray-900 rounded-full bg-transparent hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 active:bg-yellow-400 font-headerFont transition-colors duration-300 ease-in-out whitespace-no-wrap text-sm'
          >
            {formatMessage({ id })}
          </a>
        );
      })}
    </div>
  );
}
