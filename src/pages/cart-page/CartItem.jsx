import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  saveUserCartData,
  removeItemFromCart,
  cartItemCountHandler,
} from '../../store/goodsSlice';

function CartItem(prop) {
  const { id, title, price, image, count, category } = prop;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cartItem flex lg:justify-between justify-around gap-x-2 gap-y-4 lg:gap-10 py-5 w-full items-center flex-wrap lg:flex-nowrap border-b-2 border-neutral-200 ">
      <img src={image} alt="item" className="w-14" />
      <p
        className="basis-2/5  flex-grow-0 flex-shrink-0 lg:text-lg text-sm cursor-pointer"
        onClick={() =>
          navigate(`/catalogue/${category}/${id}`, { state: prop })
        }
        aria-hidden
      >
        {title}
      </p>
      <div className="item-handler flex sm:gap-8 gap-4">
        <div className="countToggle-container flex justify-between align-middle gap-2 sm:gap-3 font-bold bg-gray-50 px-2 py-1 rounded-lg">
          <span
            className="cursor-pointer  px-2"
            onClick={() => {
              dispatch(cartItemCountHandler({ item: prop, action: 'dec' }));
              dispatch(saveUserCartData());
            }}
            aria-hidden
          >
            -
          </span>
          <p className="item-count text-xl w-12 text-center">{count}</p>
          <span
            className="cursor-pointer p-1"
            onClick={() => {
              dispatch(cartItemCountHandler({ item: prop, action: 'inc' }));
              dispatch(saveUserCartData());
            }}
            aria-hidden
          >
            +
          </span>
        </div>
        <p className="font-bold text-xl text-center w-32 flex-grow-0 flex-shrink-0">
          {(price * count).toFixed(2)} €
        </p>
        <span
          className="font-bold text-xl text-pink-600 cursor-pointer p-1"
          onClick={() => {
            dispatch(removeItemFromCart({ item: prop }));
            dispatch(saveUserCartData());
          }}
          aria-hidden
        >
          Х
        </span>
      </div>
    </div>
  );
}

export default CartItem;
