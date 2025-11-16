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

const Card = ({ item }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  const onSale = Math.round(item.discountPercentage) >= 10;

  return (
    <div className={styles.card}>
      <Thumbnail
        to={`/products/${item.id}`}
        src={item.thumbnail}
        alt={item.title}
        onQuickView={toggleModal}
      />
      <div className={styles.card_content}>
        {Math.round(item.discountPercentage) >= 9 && <Badge text="sale!" />}
        <span className={styles.category}>{formatText(item.category)}</span>
        <h2 className={styles.title}>
          <Link
            to={`/products/${item.id}`}
            aria-label={`View details for ${item.title}`}
          >
            {item.title}
          </Link>
        </h2>
        <RatingStars rating={item.rating} />
        <Price item={item} hasDiscount={onSale} />
      </div>
      <QuickView hidden={!isOpen} close={toggleModal} item={item} />
    </div>
  );
};

export default Card;
