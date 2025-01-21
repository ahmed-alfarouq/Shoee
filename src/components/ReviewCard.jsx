import React from "react";
import ReviewRating from "./ReviewRating";

const ReviewCard = ({ rating, comment, reviewerName }) => {
  return (
    <div className="review-card">
      <p className="comment">{comment}</p>
      <ReviewRating rating={rating} />
      <h3>{reviewerName}</h3>
    </div>
  );
};

export default ReviewCard;
