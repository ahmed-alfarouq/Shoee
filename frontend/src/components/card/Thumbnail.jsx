import React from "react";

import { Link } from "react-router-dom";

import BlurImage from "../BlurImage";

const Thumbnail = React.memo(({ item, toggleModal }) => {
  return (
    <div className="card-thumbnail">
      <Link
        to={`/products/${item.id}`}
        aria-label={`View details for ${item.title}`}
      >
        <BlurImage
          src={item.thumbnail}
          placeholder="https://placehold.co/300x300"
          alt={item.title}
        />
      </Link>
      <button
        type="button"
        className="quick-view"
        onClick={toggleModal}
        aria-label={`Quick view for ${item.title}`}
      >
        quick view
      </button>
    </div>
  );
});

export default Thumbnail;
