import React from 'react';

function ItemPage(prop) {
  const { title, price, image, description, rate, count } = prop;

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
