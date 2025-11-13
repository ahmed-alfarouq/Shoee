import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Price from "./card/Price";
import QuickView from "./QuickView";
import Thumbnail from "./card/Thumbnail";
import ReviewRating from "./ReviewRating";

// Utils
import formatText from "utils/formatText";

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="card">
      <Thumbnail item={item} toggleModal={toggleModal} />
      <div className="card-content">
        {Math.round(item.discountPercentage) >= 9 && (
          <span className="onsale">Sale!</span>
        )}
        <span className="category">{formatText(item.category)}</span>
        <h2 className="title">
          <Link
            to={`/products/${item.id}`}
            aria-label={`View details for ${item.title}`}
          >
            {item.title}
          </Link>
        </h2>
        <ReviewRating rating={item.rating} />
        <Price item={item} />
      </div>
      <QuickView hidden={!isOpen} close={toggleModal} item={item} />
    </div>
  );
};

export default Card;
