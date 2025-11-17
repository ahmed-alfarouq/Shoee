import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./QuickView.module.scss";

import { Price } from "@features/Price";
import { Modal } from "@/components/Modal";
import { Badge } from "@/components/Badge";
import { AddToCart } from "@features/AddToCart";
import { QtySelector } from "@features/QtySelector";
import { ProductInfo } from "@features/ProductInfo";

import formatText from "@/utils/formatText";

import type { QuickViewProps } from "./QuickView.types";

const QuickView = ({ item, onSale, hidden, close }: QuickViewProps) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);
  const resetQuantity = () => setQuantity(0);

  return (
    <Modal isOpen={!hidden} onClose={close} className={styles.modal_container}>
      <figure className={styles.image}>
        <img src={item.thumbnail} alt={item.title} />
        {onSale && <Badge text="sale!" position="tl" />}
      </figure>
      <article className={styles.modal_content}>
        <section className={styles.content_body}>
          <h2 className={styles.title}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </h2>

          <Price item={item} hasDiscount={onSale} />
          <p className={styles.description} tabIndex={0}>
            {item.description}
          </p>
          <p className={styles.category}>
            Category:
            <Link to={`/products?category=${item.category}`}>
              {formatText(item.category)}
            </Link>
          </p>
          <ProductInfo item={item} />
        </section>
        <section className={styles.content_footer}>
          <QtySelector
            increment={increment}
            decrement={decrement}
            count={quantity}
          />
          <AddToCart
            product={item}
            quantity={quantity}
            callback={resetQuantity}
          />
        </section>
      </article>
    </Modal>
  );
};

export default QuickView;
