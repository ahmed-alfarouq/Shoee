import React from "react";

import { IoMdArrowDroprightCircle } from "react-icons/io";

const ProductInfo = React.memo(({ item }) => {
  return (
    <ul className="info">
      <li>Free shipping on orders over $100!</li>
      <li>
        <IoMdArrowDroprightCircle aria-hidden="true" /> {item.returnPolicy}
      </li>
      <li>
        <IoMdArrowDroprightCircle aria-hidden="true" />{" "}
        {item.shippingInformation}
      </li>
      <li>
        <IoMdArrowDroprightCircle aria-hidden="true" />{" "}
        {item.warrantyInformation}
      </li>
    </ul>
  );
});

export default ProductInfo;
