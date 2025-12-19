import styles from "../Home.module.scss";

import { ReviewCard } from "@/features/ReviewCard";

import { useTopRatedReviews } from "@/query/products/useTopRatedReviews";

const Reviews = () => {
  const { data: reviews } = useTopRatedReviews();

  if (!reviews) return;

  return (
    <section className={`${styles.reviews} container`}>
      <h2 className={`${styles.title} under-line`}>Our Happy Clients!</h2>
      <div className={styles.reviews_cards}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            rating={review.rating}
            comment={review.comment}
            reviewerName={`${review.user.username}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
