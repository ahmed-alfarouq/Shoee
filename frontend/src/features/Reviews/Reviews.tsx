import styles from "./Reviews.module.scss";

import { RatingStars } from "@/features/RatingStars";

import avatar from "@/assets/images/avatar.png";

import type { Product } from "@/types/index.types";

const Reviews = ({ reviews }: { reviews: Product["reviews"] }) => {
  return (
    <section className={styles.reviews}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Reviews ({reviews.length})</h2>
      </div>
      <div className={styles.reviews_container}>
      {reviews.map((review, i) => (
          <div className={styles.review} key={`review-${review.rating}-${i}`}>
            <img src={avatar} alt="avatar" />
            <div className={styles.content}>
              <p className={styles.comment}>
                <em>{review.comment}</em>
              </p>
              <RatingStars rating={review.rating} />
              <h3 className={styles.reviewer_name}>{review.user.username}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
