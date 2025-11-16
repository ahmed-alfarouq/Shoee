import { memo } from "react";

import styles from "./RatingStars.module.scss";

import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

import type { RatingStarsProps } from "./RatingStars.types";

const RatingStars = memo(
  ({ rating, maxRating = 5, className }: RatingStarsProps) => {
    const stars = Array.from({ length: maxRating }, (_, i) => {
      const starIndex = i + 1;
      if (starIndex <= rating) {
        return (
          <IoIosStar
            role="img"
            className={styles.full}
            key={`full-star-${starIndex}`}
            aria-label={`Full star, ${starIndex} out of ${maxRating}`}
            tabIndex={0}
          />
        );
      } else if (starIndex - 0.5 <= rating) {
        return (
          <IoIosStarHalf
            role="img"
            className={styles.half}
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
      <div
        className={`${styles.rating_container} ${className}`}
        aria-live="polite"
      >
        {stars}
      </div>
    );
  }
);

export default RatingStars;
