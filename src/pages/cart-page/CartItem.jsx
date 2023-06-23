import React from 'react';

function CartItem(prop) {
  const { title, price, image, count } = prop;
  return (
    <div className="cartItem flex lg:justify-between  justify-around gap-x-2 gap-y-4 lg:gap-10 py-5 w-full items-center flex-wrap lg:flex-nowrap">
      <img src={image} alt="item" className="w-14" />
      <p className="  basis-3/5  flex-grow-0 flex-shrink-0 lg:text-lg text-sm">
        {title}
      </p>
      <div className="item-handler flex gap-8 text-center">
        <div className="countToggle-container flex justify-center align-middle gap-3 font-bold bg-gray-50 px-2 py-1 rounded-lg">
          <span className="cursor-pointer p-1">-</span>
          <p className="item-count text-xl">{count}</p>
          <span className="cursor-pointer p-1">+</span>
        </div>
        <p className="font-bold text-xl w-24 flex-grow-0 flex-shrink-0">
          {price * count} €
        </p>
        <span className="font-bold text-xl text-pink-600 cursor-pointer p-1">
          Х
        </span>
      </div>
    </div>
  );
}

export default CartItem;
