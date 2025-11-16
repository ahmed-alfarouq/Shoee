import { IoMdArrowDroprightCircle } from "react-icons/io";

import type { ProductInfoProps } from "./ProductInfo.types";

const ProductInfo = ({ item }: ProductInfoProps) => {
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
};

export default ProductInfo;
