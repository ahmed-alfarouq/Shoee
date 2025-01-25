import React from "react";

// Assets
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const ReviewRating = ({ rating, maxRating = 5, className }) => {
  const stars = Array.from({ length: maxRating }, (_, i) => {
    const starIndex = i + 1;
    if (starIndex <= rating) {
      return <IoIosStar className="full" key={`full-${starIndex}`} />;
    } else if (starIndex - 0.5 <= rating) {
      return <IoIosStarHalf className="half" key={`half-${starIndex}`} />;
    } else {
      return <IoIosStarOutline key={`outline-${starIndex}`} />;
    }
  });

  return <div className={`review-rating ${className}`}>{stars}</div>;
};

export default ReviewRating;
