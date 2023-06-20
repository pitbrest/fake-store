import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGoods } from '../../store/goodsSlice';
import ItemCard from '../../components/itemCard/ItemCard';
import './Catalogue.css';

function Catalogue() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { goods, shoppingСart } = useSelector((state) => state.storeState);

  const saveUserCartData = () => {
    const newUserCartData = JSON.stringify(shoppingСart.map((item) => item.id));
    localStorage.userCart = newUserCartData;
  };

  useEffect(() => {
    dispatch(getGoods(category));
  }, [category, dispatch]);

  useEffect(() => saveUserCartData());

  return (
    <div className="goods-container">
      {goods.map((item) => (
        <ItemCard
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          count={item.rating.count}
          rate={item.rating.rate}
          key={item.id}
        />
      ))}
      <button
        type="button"
        className="top-arrow rounded-full w-min border-2 border-teal-700 lg:hidden"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        ▲
      </button>
      <button
        type="button"
        className="bottom-arrow rounded-full inline-block w-min border-2 border-teal-700 lg:hidden"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        ▼
      </button>
    </div>
  );
}

export default Catalogue;
