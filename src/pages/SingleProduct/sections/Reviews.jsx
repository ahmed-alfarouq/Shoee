import React from "react";
import ReviewRating from "../../../components/ReviewRating";
import avatar from "../../../assets/images/avatar.png";

const Reviews = ({ reviews }) => {
  return (
    <section className="product-reviews">
      <div className="title-container">
        <h2 className="title">Reviews ({reviews.length})</h2>
      </div>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review">
            <img src={avatar} alt="avatar" />
            <div className="content">
              <p className="comment">
                <em>{review.comment}</em>
              </p>
              <ReviewRating rating={review.rating} />
              <h3 className="reviewer-name">{review.reviewerName}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
