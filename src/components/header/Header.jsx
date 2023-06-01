import React from 'react';
import './Header.css';
// import { Route, Routes, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <nav className="section-container flex items-center justify-between">
        <h1 className="logo text-3xl">
          <a href="/">Logo</a>
        </h1>
        <div className="navigation">
          <a
            href="/"
            className="hover:bg-slate-50 hover:shadow-md p-3 text-lg font-medium active-btn"
            aria-current="page"
          >
            На главную
          </a>
          <a
            href="/"
            className="hover:bg-slate-50 hover:shadow-md p-3 text-lg font-medium active-btn"
            aria-current="page"
          >
            Контакты
          </a>
          <a
            href="/"
            className="hover:bg-slate-50 hover:shadow-md p-3 text-lg font-medium active-btn"
            aria-current="page"
          >
            Каталог
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
