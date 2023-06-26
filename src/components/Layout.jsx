import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <main className="lg:container mx-auto px-2 pb-8 md:pt-28 pt-20 text-gray-700">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
