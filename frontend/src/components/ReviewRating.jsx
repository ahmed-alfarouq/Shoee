import React from "react";

// Assets
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const ReviewRating = ({ rating, maxRating = 5, className }) => {
  const stars = Array.from({ length: maxRating }, (_, i) => {
    const starIndex = i + 1;
    if (starIndex <= rating) {
      return (
        <IoIosStar
          role="img"
          className="full"
          key={`full-star-${starIndex}`}
          aria-label={`Full star, ${starIndex} out of ${maxRating}`}
          tabIndex={0}
        />
      );
    } else if (starIndex - 0.5 <= rating) {
      return (
        <IoIosStarHalf
          role="img"
          className="half"
          key={`half-star-${starIndex}`}
          aria-label={`Half star, ${starIndex} out of ${maxRating}`}
          tabIndex={0}
        />
      );
    } else {
      return (
        <IoIosStarOutline
        key={`empty-star-${starIndex}`}
          role="img"
          aria-label={`Empty star, ${starIndex} out of ${maxRating}`}
          tabIndex={0}
        />
      );
    }
  });

  return (
    <div className={`review-rating ${className}`} aria-live="polite">
      {stars}
    </div>
  );
};

export default ReviewRating;
