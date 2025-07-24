import React, { useMemo } from "react";

import calcOriginalPrice from "utils/calcOriginalPrice";

const Price = React.memo(({ item }) => {
  const hasDiscount = Math.round(item.discountPercentage) >= 9;
  const price = useMemo(
    () => calcOriginalPrice(item.price, item.discountPercentage),
    [item]
  );

  return (
    <div className="price">
      {hasDiscount && (
        <>
          <span className="sr-only">Original price was: ${price}.</span>
          <del aria-hidden="true" className="original-price">
            ${price}
          </del>
        </>
      )}
      <span className="sr-only">Current price is: ${item.price}.</span>
      <ins aria-hidden="true" className="current-price">
        ${item.price}
      </ins>
    </div>
  );
});

export default Price;
