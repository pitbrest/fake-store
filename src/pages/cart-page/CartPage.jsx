import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import PageNavigation from '../../components/page-navigation/PageNavigation';
import Button from '../../components/button/Button';

function CartPage() {
  const { shoppingСart } = useSelector((state) => state.storeState);
  const navigate = useNavigate();
  const totalPrice = shoppingСart
    .reduce((acc, cur) => cur.price * cur.count + acc, 0)
    .toFixed(2);

  return (
    <div className="cart-container mx-auto 2xl:max-w-5xl w-full lg:p-4 p-1 rounded-md">
      <div className="cart-items flex flex-col justify-start items-start gap-3">
        {shoppingСart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            count={item.count}
            category={item.category}
            rate={item.rate}
          />
        ))}
      </div>
      <p className="total-price font-bold md:text-2xl text-xl w-full  md:p-4 px-3 py-2 rounded-lg mt-10 md:text-right border-b-2 border-neutral-200">
        Total price:{' '}
        <span className="text-red-400 sm:pl-6 pl-2 md:text-3xl text-2xl ">
          {totalPrice} €
        </span>
      </p>
      <Button label="place an order" cb={() => navigate('/order')} />

      <PageNavigation />
    </div>
  );
}

export default CartPage;
