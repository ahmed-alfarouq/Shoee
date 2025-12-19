import { useState } from "react";
import { useCartActions } from "@/stores/cart";

import styles from "./AddToCart.module.scss";

import { Button } from "@/components/Button";

import { MdBookmarkAdded } from "react-icons/md";

import type { AddToCartProps } from "./AddToCart.types";

const AddToCart = ({ product, quantity, callback }: AddToCartProps) => {
  const { addItem } = useCartActions();

  const [text, setText] = useState("add to cart");
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    if (quantity <= 0 || added) {
      return;
    }

    addItem(product, quantity);

    callback?.();

    setAdded(true);
    setText("added to the cart");

    setTimeout(() => {
      setAdded(false);
      setText("add to cart");
    }, 3000);
  };

  return (
    <Button
      size="lg"
      className={added ? styles.added : ""}
      onClick={addToCart}
      aria-live="polite"
      style={{
        paddingBlock: 8,
      }}
    >
      {text}
      <MdBookmarkAdded className={styles.icon} aria-hidden="true" />
    </Button>
  );
};

export default AddToCart;
