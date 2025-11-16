import ReviewCard from "../components/ReviewCard";

import { useTopRatedReviews } from "query/products/useTopRatedReviews";

const Reviews = () => {
  const { data: reviews } = useTopRatedReviews();

  if (!reviews) return;

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title under-line">Our Happy Clients!</h2>
        <div className="reviews-cards">
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              rating={review.rating}
              comment={review.comment}
              reviewerName={review.user.username}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
