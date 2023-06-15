import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGoods } from '../../store/goodsSlice';
import ItemCard from '../../components/itemCard/ItemCard';
import './Catalogue.css';

function Catalogue() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.storeState.goods);

  useEffect(() => {
    dispatch(getGoods(category));
  }, [category, dispatch]);

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
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Catalogue;
