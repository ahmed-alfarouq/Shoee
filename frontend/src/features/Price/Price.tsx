import { useMemo } from "react";

import styles from "./Price.module.scss";

import calcOriginalPrice from "@/utils/calcOriginalPrice";

import type { PriceProps } from "./Price.types";

const Price = ({ item, hasDiscount = false }: PriceProps) => {
  const price = useMemo(
    () => calcOriginalPrice(item.price, item.discountPercentage || 0),
    [item]
  );

  return (
    <div className={styles.price}>
      {hasDiscount && (
        <>
          <span className="sr-only">Original price was: ${price}.</span>
          <del aria-hidden="true" className={styles.original_price}>
            ${price}
          </del>
        </>
      )}
      <span className="sr-only">Current price is: ${item.price}.</span>
      <ins aria-hidden="true" className={styles.current_price}>
        ${item.price}
      </ins>
    </div>
  );
};

export default Price;
