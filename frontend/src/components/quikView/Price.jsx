import React from "react";

import OnSale from "./OnSale";

const Price = ({ item }) => {
  const onSale = Math.round(item.discountPercentage) >= 10;
  return (
    <div className="price">
      {onSale && <OnSale item={item} />}
      <span className="sr-only">Current price is: ${item.price}.</span>
      <ins aria-hidden="true" className="current-price">
        ${item.price}
      </ins>
    </div>
  );
};

export default Price;
