import truncate from "lodash/truncate";
import debounce from "lodash/debounce";
import { useCartActions } from "@/stores/cart";

import styles from "../Cart.module.scss";

import { Button } from "@/components/Button";
import { QtySelector } from "@features/QtySelector";

import { IoCloseCircleOutline } from "react-icons/io5";

import type { Product } from "@/types/index.types";

const CartItem = ({ item }: { item: Product }) => {
  const { updateQty, removeItem } = useCartActions();

  const increment = debounce(() => updateQty(item.id, item.qty + 1), 50);

  const decrement = debounce(() => updateQty(item.id, item.qty - 1), 50);

  const handleRemoveItem = debounce(() => removeItem(item.id), 50);

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
        onClick={handleRemoveItem}
      >
        <span className="sr-only">Close Cart</span>
        <IoCloseCircleOutline aria-hidden="true" />
      </Button>
    </li>
  );
};

export default CartItem;
