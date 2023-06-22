import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isBurgerShowing, setIsBurgerShowing] = useState(false);
  const { shoppingСart } = useSelector((state) => state.storeState);

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

  const burgerActionsTogler = () => {
    dropdownVisibilityToggle();
    burgerToggle();
  };

  return (
    <header className="bg-teal-600 py-2 px-10 text-teal-50 fixed top-0 w-full">
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
              onClick={burgerToggle}
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
                    onClick={burgerActionsTogler}
                  >
                    Electronics
                  </NavLink>
                  <NavLink
                    to="/catalogue/jewelery"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={burgerActionsTogler}
                  >
                    Jewelery
                  </NavLink>
                  <NavLink
                    to="/catalogue/men's clothing"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={burgerActionsTogler}
                  >
                    Men&apos;s clothing
                  </NavLink>
                  <NavLink
                    to="/catalogue/women's clothing"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold hover:text-orange-100 ease-in duration-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={burgerActionsTogler}
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
              onClick={burgerToggle}
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
          <input
            className="hidden"
            id="burger-toggler"
            type="checkbox"
            checked={isBurgerShowing}
            readOnly
          />
          <div className="burger-button"> </div>
        </label>
        <div className="cart-container relative">
          <svg
            className="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{' '}
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="absolute -top-2 -right-6 font-bold text-xl">
            {shoppingСart.length}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
