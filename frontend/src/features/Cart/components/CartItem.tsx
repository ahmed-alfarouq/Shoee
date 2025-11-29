import { debounce, truncate } from "lodash";
import { useCartDispatch } from "@/hooks/useCart";

import styles from "../Cart.module.scss";

import { Button } from "@/components/Button";
import { QtySelector } from "@features/QtySelector";

import { IoCloseCircleOutline } from "react-icons/io5";

import type { Product } from "@/types/index.types";

const CartItem = ({ item }: { item: Product }) => {
  const dispatch = useCartDispatch();

  const increment = () =>
    dispatch({
      type: "UPDATE_QTY",
      payload: { id: item.id, qty: item.qty + 1 },
    });

  const decrement = debounce(
    () =>
      dispatch({
        type: "UPDATE_QTY",
        payload: { id: item.id, qty: item.qty - 1 },
      }),
    50
  );

  const removeItem = debounce(
    () => dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } }),
    50
  );

  return (
    <li className={styles.cart_item}>
      <img src={item.thumbnail} alt={item.title} />
      <div className={styles.content}>
        <span className={styles.title}>
          {truncate(item.title, { length: 20 })}
        </span>
        <QtySelector
          count={item.qty}
          increment={increment}
          decrement={decrement}
        />
        <div className={styles.price}>
          <bdi>
            <span className={styles.currency_symbol}>$</span>
            {(item.qty * item.price).toFixed(2)}
          </bdi>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={styles.remove}
        onClick={removeItem}
      >
        <span className="sr-only">Close Cart</span>
        <IoCloseCircleOutline aria-hidden="true" />
      </Button>
    </li>
  );
};

export default CartItem;
