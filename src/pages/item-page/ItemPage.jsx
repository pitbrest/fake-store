import React from 'react';
import { useLocation } from 'react-router-dom';

function ItemPage() {
  const { state } = useLocation();
  const { title, price, image, description, rate, count } = state;

  return (
    <div>
      <img src={image} alt="" />
      <div className="description">
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <p>rate {rate}</p>
          <p>count {count}</p>
        </div>
        <div className="price font-bold pb-5 flex justify-between text-xl">
          <span>Price: </span>
          <span>{price} €</span>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
