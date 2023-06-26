import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGoods } from '../../store/goodsSlice';
import ItemCard from '../../components/itemCard/ItemCard';
import './Catalogue.css';
import Preloader from '../../components/preloader/Preloader';
import PageNavigation from '../../components/page-navigation/PageNavigation';

function Catalogue() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { goods, status } = useSelector((state) => state.storeState);

  useEffect(() => {
    dispatch(getGoods(category));
  }, [category, dispatch]);

  if (status === 'pending') {
    return <Preloader />;
  }

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
          category={item.category}
        />
      ))}
      <PageNavigation />
    </div>
  );
}

export default Catalogue;
