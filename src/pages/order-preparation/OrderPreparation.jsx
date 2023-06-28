/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Input, initTE } from 'tw-elements';
import './OrderPreparation.css';

function OrderPreparation() {
  const order = useSelector((state) => state.storeState.shoppingСart);
  const totalPrice = order
    .reduce((acc, cur) => acc + cur.count * cur.price, 0)
    .toFixed(2);

  useEffect(() => initTE({ Input }));

  return (
    <div className="order-container max-w-screen-lg sm:mx-auto py-4">
      <div className="user-data">
        <div
          className="relative mb-3 max-w-max sm:w-3/6"
          data-te-input-wrapper-init
        >
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputText"
            placeholder="Example label"
          />
          <label
            htmlFor="exampleFormControlInputText"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-teal-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Enter your name
          </label>
        </div>
        <div
          className="relative mb-3 max-w-max sm:w-3/6"
          data-te-input-wrapper-init
        >
          <input
            type="email"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail"
            placeholder="Example label"
          />
          <label
            htmlFor="exampleFormControlInputEmail"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-teal-600 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Enter your e-mail
          </label>
        </div>
      </div>
      <div className="order-data text-xs md:text-lg text-neutral-800">
        <hr className="bg-red-500 my-5" />
        <h4 className="text-2xl font-bold pb-5">Your order list</h4>
        <ul className="list-decimal list-inside px">
          <div className="flex font-bold text-sm md:text-xl py-2 border-y-2 mb-2 pl-1">
            <span className="basis-4/6 pl-2">item</span>
            <span className="basis-1/6 text-center border-x">price</span>
            <span className="basis-1/6 text-center ">count</span>
          </div>
          {order.map((i, idx) => (
            <li className="flex mb-1 border-b last:border-0">
              <h5 className="basis-4/6">
                <span className="pr-4 pl-2">{idx + 1}.</span>
                {i.title}
              </h5>
              <span className="basis-1/6 text-center border-x">{i.price}</span>
              <span className="basis-1/6 text-center ">{i.count}</span>
            </li>
          ))}
        </ul>
        <div className="flex font-bold text-xs md:text-xl pb-2 border-y-2 mt-4 pl-1">
          <span className="basis-4/6 pl-2">Total price</span>
          <span className="basis-1/6 text-center border-x">{totalPrice} €</span>
          <span className="basis-1/6 text-center" />
        </div>
      </div>
    </div>
  );
}

export default OrderPreparation;
