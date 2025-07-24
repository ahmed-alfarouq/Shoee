import React, { useMemo } from "react";

import calcOriginalPrice from "utils/calcOriginalPrice";

const OnSale = React.memo(({ item }) => {
  const price = useMemo(
    () => calcOriginalPrice(item.price, item.discountPercentage),
    [item]
  );

  return (
    <>
      <span className="sr-only">Original price was: ${price}.</span>
      <del aria-hidden="true" className="original-price">
        ${price}
      </del>
    </>
  );
});

export default OnSale;
