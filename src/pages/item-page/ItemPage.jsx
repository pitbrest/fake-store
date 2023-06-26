import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import back from '../../components/icon-back.png';
import { saveUserCartData, addItemToCart } from '../../store/goodsSlice';

function ItemPage() {
  const { state } = useLocation();
  const { id, title, price, image, description, rate, count } = state;
  const navigate = useNavigate();

  const { shoppingСart } = useSelector((store) => store.storeState);

  const dispatch = useDispatch();

  const checkingCart = shoppingСart.filter((item) => item.id === id).length;
  const btnFontColorHandler = !checkingCart
    ? { color: 'white' }
    : { color: 'rgb(255 195 0)' };
  const btnText = !checkingCart ? 'Add to cart' : 'Already added';

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
          className="absolute top-0 left-0 w-12 hover:border-slate-600 border-2 border-transparent rounded-full active:scale-95 "
        />
      </div>
      <div className="description">
        <h4 className="text-xl font-bold text-center mb-5 ">{title}</h4>
        <p className="text-justify mb-5">{description}</p>
        <div className="flex justify-between font-bold">
          <div>
            <p>rate: {rate}</p>
            <p>in stock: {count}</p>
          </div>
          <span className="underline underline-offset-4 text-rose-700 text-xl">
            Price: {price} €
          </span>
        </div>
      </div>
      <button
        type="button"
        className="inline-block rounded bg-teal-700 px-4 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.1)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.1),0_4px_18px_0_rgba(59,113,202,0.1)] mt-4 font-bold"
        data-te-ripple-init
        data-te-ripple-color="rgba(20, 184, 166, 0.1)"
        onClick={() => {
          dispatch(addItemToCart({ item: state }));
          dispatch(saveUserCartData());
        }}
        style={btnFontColorHandler}
      >
        {btnText}
      </button>
    </div>
  );
}

export default ItemPage;
