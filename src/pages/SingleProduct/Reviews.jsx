import React from "react";
import ReviewRating from "../../components/ReviewRating";

const Reviews = ({ reviews }) => {
  return (
    <section className="reviews">
      <h2>Reviews({reviews.length})</h2>
      <div className="content">
        {reviews.map((review) => (
          <div className="review">
            <p className="comment">{review.comment}</p>
            <ReviewRating rating={review.rating} />
            <h3>{review.reviewerName}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
