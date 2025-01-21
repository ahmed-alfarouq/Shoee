import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  const products = useSelector((state) => state.products.products);
  const [reviews, setReviews] = useState([]);
  const extractBestReviews = (products) => {
    const allReviews = products.flatMap((product) =>
      product.reviews.map((review) => ({
        ...review,
        id: uuidv4(),
      }))
    );

    const sortedReviews = allReviews.sort((a, b) => b.rating - a.rating);

    return sortedReviews.slice(0, 4);
  };

  useEffect(() => {
    setReviews(extractBestReviews(products));
  }, [products]);

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title">Our Happy Clients!</h2>
        <div className="reviews-cards">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              rating={review.rating}
              comment={review.comment}
              reviewerName={review.reviewerName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
