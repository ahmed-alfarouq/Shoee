import ReviewRating from "./ReviewRating";

const ReviewCard = ({ rating, comment, reviewerName }) => {
  return (
    <div className="review-card">
      <p className="comment">{comment}</p>
      <ReviewRating rating={rating} />
      <h3 className="reviewer-name">{reviewerName}</h3>
    </div>
  );
};

export default ReviewCard;
