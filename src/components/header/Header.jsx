import React, { useState } from 'react';
import './Header.css';
// import { Route, Routes, Link } from 'react-router-dom';

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isBurgerShowing, setIsBurgerShowing] = useState(false);

  const dropdownVisibilityToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const dropdownState = isDropdownVisible ? 'show' : 'hide';

  const burgerToggle = () => {
    setIsBurgerShowing(!isBurgerShowing);
  };
  const burgerState = isBurgerShowing ? 'open' : 'close';

  return (
    <header className="bg-teal-600 py-2 px-10 text-teal-50">
      <nav className="section-container flex items-center justify-between">
        <h1 className="logo text-3xl">
          <a href="/">Logo</a>
        </h1>

        <ul className={`navigation gap-3 p-3 pt-5 ${burgerState} bg-teal-600`}>
          <li>
            <a
              href="/"
              className="hover:drop-shadow-md p-3 text-lg font-medium "
              aria-current="page"
            >
              На главную
            </a>
          </li>
          <li>
            <div className="relative inline-block text-left dropdown-container ">
              <div>
                <button
                  type="button"
                  className="hover:drop-shadow-md p-3 pt-0 text-lg font-medium  inline-flex w-full justify-center gap-x-1.5"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={dropdownVisibilityToggle}
                >
                  Каталог
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
                  <a
                    href="/"
                    className="text-teal-5 block px-4 py-2 text-sm hover:font-semibold"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="/"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="/"
                    className="text-teal-50 block px-4 py-2 text-sm hover:font-semibold"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a
              href="/"
              className="hover:drop-shadow-md p-3 text-lg font-medium "
              aria-current="page"
            >
              Контакты
            </a>
          </li>
        </ul>
        <label className="burger-container" htmlFor="burger-toggler">
          <input
            className="hidden"
            id="burger-toggler"
            type="checkbox"
            onChange={burgerToggle}
          />
          <div className="burger-button"> </div>
        </label>

        {/* <div className={`burger-container ${burgerState}`}>
          <section className="top-nav">
            <label className="menu-button-container" htmlFor="menu-toggle">
              <input id="menu-toggle" type="checkbox" onChange={burgerToggle} />
              <div className="menu-button"> </div>
            </label>
            <ul className="menu">
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
              <li>Five</li>
            </ul>
          </section>
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
