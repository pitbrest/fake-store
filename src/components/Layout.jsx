import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <main className="container text-gray-700">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
