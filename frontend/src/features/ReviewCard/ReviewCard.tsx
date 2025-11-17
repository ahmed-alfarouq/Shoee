import styles from "./ReviewCard.module.scss";

import { RatingStars } from "@features/RatingStars";

import type { ReviewCardProps } from "./ReviewCard.types";

const ReviewCard = ({ rating, comment, reviewerName }: ReviewCardProps) => {
  return (
    <article className={styles.review_card}>
      <p className={styles.comment}>{comment}</p>
      <RatingStars title={reviewerName} rating={rating} />
      <h3 className={styles.reviewer_name}>{reviewerName}</h3>
    </article>
  );
};

export default ReviewCard;
