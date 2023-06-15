import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGoods } from '../../store/goodsSlice';

function Catalogue() {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods(category));
  }, [category, dispatch]);

  return <div>Catalogue</div>;
}

export default Catalogue;
