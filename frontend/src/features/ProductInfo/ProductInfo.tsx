import styles from "./ProductInfo.module.scss";

import { IoMdArrowDroprightCircle } from "react-icons/io";

import type { ProductInfoProps } from "./ProductInfo.types";

const ProductInfo = ({ item }: ProductInfoProps) => {
  return (
    <ul className={styles.info}>
      <li className={styles.info_item}>Free shipping on orders over $100!</li>
      <li className={styles.info_item}>
        <IoMdArrowDroprightCircle aria-hidden="true" /> {item.returnPolicy}
      </li>
      <li className={styles.info_item}>
        <IoMdArrowDroprightCircle aria-hidden="true" />{" "}
        {item.shippingInformation}
      </li>
      <li className={styles.info_item}>
        <IoMdArrowDroprightCircle aria-hidden="true" />{" "}
        {item.warrantyInformation}
      </li>
    </ul>
  );
};

export default ProductInfo;
