import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../store/goodsSlice';

function Catalogue() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.storeState.categories);

  useEffect(() => {
    console.log(dispatch(getGoods(categories[1])));
  }, []);

  return <div>Catalogue</div>;
}

export default Catalogue;
