import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {
  About,
  Catalogue,
  ItemPage,
  Main,
  NotFoundPage,
  OrderPreparation,
} from './pages';
import CartPage from './pages/cart-page/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalogue/:category" element={<Catalogue />} />
        <Route path="catalogue/:category/:id" element={<ItemPage />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="order" element={<OrderPreparation />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
