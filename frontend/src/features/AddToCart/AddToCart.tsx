import { useState } from "react";
import { useCartDispatch } from "@/hooks/useCart";

import styles from "./AddToCart.module.scss";

import { Button } from "@/components/Button";

import { MdBookmarkAdded } from "react-icons/md";

import type { AddToCartProps } from "./AddToCart.types";

const AddToCart = ({ product, quantity, callback }: AddToCartProps) => {
  const dispatch = useCartDispatch();

  const [text, setText] = useState("add to cart");
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    if (quantity <= 0 || added) {
      return;
    }

    dispatch({ type: "ADD_ITEM", payload: { item: product, qty: quantity } });

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
