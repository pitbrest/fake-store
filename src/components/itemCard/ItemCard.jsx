import React, { useEffect } from 'react';
import { Ripple, initTE } from 'tw-elements';
import { useNavigate, useLocation } from 'react-router-dom';

function ItemCard(prop) {
  const { id, title, price, image } = prop;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const newPath = `${pathname.toString()}/${id.toString()}`;

  useEffect(() => initTE({ Ripple }));

  return (
    <div
      className="flex flex-col justify-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      id={id}
      onClick={() => navigate(newPath, { state: prop })}
      aria-hidden="true"
    >
      <a href="#!">
        <img className="rounded-t-lg mx-auto max-h-48" src={image} alt="" />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text font-medium leading-tight text-neutral-800 dark:text-neutral-50 pb-10 h-14 ">
          {title}
        </h5>
        <div className="price font-bold pb-5 flex justify-between text-xl">
          <span>Price: </span>
          <span>{price} €</span>
        </div>

        <button
          type="button"
          className="inline-block rounded bg-teal-700 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
