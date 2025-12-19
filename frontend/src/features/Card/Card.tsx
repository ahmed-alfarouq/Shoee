import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

import styles from "./Card.module.scss";

import { Price } from "@features/Price";
import { Badge } from "@components/Badge";
import { QuickView } from "@features/QuikView";
import { Thumbnail } from "@features/Thumbnail";
import { RatingStars } from "@features/RatingStars";

import formatText from "@/utils/formatText";

import type { CardProps } from "./Card.types";

const Card = ({ item, className }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  const onSale = Math.round(item.discountPercentage) >= 9;

  return (
    <article className={`${styles.card} ${className}`}>
      <Thumbnail
        to={`/products/${item.id}`}
        src={item.thumbnail}
        alt={item.title}
        onQuickView={toggleModal}
      />
      <section className={styles.card_content}>
        {onSale && <Badge text="sale!" />}
        <span className={styles.category}>{formatText(item.category)}</span>
        <h2 className={styles.title}>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </h2>
        <RatingStars title={item.title} rating={item.rating} />
        <Price item={item} hasDiscount={onSale} />
      </section>
      <QuickView
        item={item}
        onSale={onSale}
        hidden={!isOpen}
        close={toggleModal}
      />
    </article>
  );
};

export default Card;
