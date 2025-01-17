import React from "react";

// Assets
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const ReviewRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i < rating) {
      stars.push(<IoIosStar className="full" key={i} />);
    } else if (i > rating && i - 1 < rating) {
      stars.push(<IoIosStarHalf className="half" key={i} />);
    } else {
      stars.push(<IoIosStarOutline key={i} />);
    }
  }

  return <div className="review-rating">{stars}</div>;
};

export default ReviewRating;
