import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import back from '../../components/icon-back.png';

function ItemPage() {
  const { state } = useLocation();
  const { title, price, image, description, rate, count } = state;
  const navigate = useNavigate();

  return (
    <div className="max-w-lg flex flex-col justify-center mx-auto ">
      <div className="relative">
        {' '}
        <img src={image} alt="" className="mb-10 mx-auto w-4/6" />
        <img
          src={back}
          alt=""
          onClick={() => navigate(-1)}
          aria-hidden
          className="absolute top-0 left-0 w-12 hover:border-slate-600 border-2 border-transparent rounded-full active:scale-95 bg-teal-50 active:bg-teal-100"
        />
      </div>
      <div className="description">
        <h4 className="text-xl font-bold text-center mb-5 ">{title}</h4>
        <p className="text-justify mb-5">{description}</p>
        <div className="flex justify-between font-bold">
          <div>
            <p>rate: {rate}</p>
            <p>count: {count}</p>
          </div>
          <span className="underline underline-offset-4 text-rose-700 text-xl">
            Price: {price} €
          </span>
        </div>
      </div>
      <button
        type="button"
        className="inline-block rounded bg-teal-700 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.1)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] mt-4"
        data-te-ripple-init
        data-te-ripple-color="rgba(20, 184, 166, 0.1)"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemPage;
