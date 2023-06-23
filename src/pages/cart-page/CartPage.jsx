import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './CartPage.css';

function CartPage() {
  const { shoppingСart } = useSelector((state) => state.storeState);
  const totalPrice = shoppingСart.reduce(
    (acc, cur) => cur.price * cur.count + acc,
    0,
  );

  return (
    <div className="cart-container mx-auto 2xl:max-w-5xl w-full lg:p-4 p-1 rounded-md">
      <div className="cart-items flex flex-col justify-start items-start gap-3">
        {shoppingСart.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            count={item.count}
          />
        ))}
      </div>
      <p className="total-price font-bold md:text-2xl text-xl w-full bg-teal-50 md:p-4 px-3 py-2 rounded-lg mt-10 md:text-right">
        Total price:{' '}
        <span className="text-red-400 pl-6 md:text-3xl text-2xl">
          {totalPrice} €
        </span>
      </p>
    </div>
  );
}

export default CartPage;
