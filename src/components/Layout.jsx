import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Loading from './loading/Loading';

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2 py-10 pt-28 text-gray-700">
        <Outlet />
      </main>
      <Loading />
      <Footer />
    </>
  );
}

export default Layout;
