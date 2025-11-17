import { useMemo } from "react";

import styles from "./RatingStars.module.scss";

import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

import type { RatingStarsProps } from "./RatingStars.types";

const RatingStars = ({
  title,
  rating,
  maxRating = 5,
  className,
}: RatingStarsProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: maxRating }, (_, i) => {
        const starIndex = i + 1;
        if (starIndex <= rating) {
          return (
            <IoIosStar
              role="img"
              className={styles.full}
              key={`full-star-${starIndex}`}
              aria-hidden="true"
              tabIndex={0}
            />
          );
        } else if (starIndex - 0.5 <= rating) {
          return (
            <IoIosStarHalf
              role="img"
              className={styles.half}
              key={`half-star-${starIndex}`}
              aria-hidden="true"
              tabIndex={0}
            />
          );
        } else {
          return (
            <IoIosStarOutline
              key={`empty-star-${starIndex}`}
              role="img"
              aria-hidden="true"
              tabIndex={0}
            />
          );
        }
      }),
    [maxRating, rating]
  );

  return (
    <div
      className={`${styles.rating_container} ${className}`}
      aria-live="polite"
    >
      <span className="sr-only">
        The rating of {title} is {rating} out of {maxRating}
      </span>
      {stars}
    </div>
  );
};

export default RatingStars;
