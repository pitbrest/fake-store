import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isBurgerShowing, setIsBurgerShowing] = useState(false);

  const dropdownVisibilityToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const dropdownState = isDropdownVisible ? 'show' : 'hide';

  const burgerToggle = () => {
    if (isBurgerShowing) {
      setIsDropdownVisible(false);
    }
    setIsBurgerShowing(!isBurgerShowing);
  };
  const burgerState = isBurgerShowing ? 'open' : 'close';

  return (
    <header className="bg-teal-600 py-2 px-10 text-teal-50">
      <nav className="section-container flex items-center justify-between">
        <h1 className="logo text-3xl">
          <Link to="/">Logo</Link>
        </h1>

        <ul className={`navigation gap-3 p-3 ${burgerState} bg-teal-600`}>
          <li className="hover:text-orange-100 ease-in duration-100">
            <NavLink
              to="/"
              className="p-3 text-lg font-medium hover:-translate-y-1"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-orange-100 ease-in duration-100">
            <div className="relative inline-block text-left dropdown-container ">
              <div
                onClick={dropdownVisibilityToggle}
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
              >
                <button
                  type="button"
                  className="px-3 text-lg font-medium  inline-flex w-full justify-center gap-x-1.5"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Сatalogue
                  <svg
                    className="-mr-1 h-5 w-5 text-teal-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right bg-teal-600 ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownState} dropdown-list`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <NavLink
                    to="/catalogue/electronics"
                    className="text-teal-5 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={dropdownVisibilityToggle}
                  >
                    Electronics
                  </NavLink>
                  <NavLink
                    to="/catalogue/jewelery"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={dropdownVisibilityToggle}
                  >
                    Jewelery
                  </NavLink>
                  <NavLink
                    to="/catalogue/men's-clothing"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={dropdownVisibilityToggle}
                  >
                    Men&apos;s clothing
                  </NavLink>
                  <NavLink
                    to="/catalogue/women's-clothing"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={dropdownVisibilityToggle}
                  >
                    Women&apos;s clothing
                  </NavLink>
                </div>
              </div>
            </div>
          </li>
          <li className="hover:text-orange-100 ease-in duration-100">
            <NavLink
              to="/about"
              className="p-3 text-lg font-medium "
              aria-current="page"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <label
          className="burger-container"
          htmlFor="burger-toggler"
          onChange={burgerToggle}
        >
          <input className="hidden" id="burger-toggler" type="checkbox" />
          <div className="burger-button"> </div>
        </label>
      </nav>
    </header>
  );
}

export default Header;
