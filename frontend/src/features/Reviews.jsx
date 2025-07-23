import React, { useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import ReviewCard from "../components/ReviewCard";

import { useProducts } from "query/products/useProducts";

const Reviews = () => {
  const { data: products } = useProducts();

  const reviews = useMemo(() => {
    const allReviews = products.flatMap((product) =>
      product.reviews.map((review) => ({
        ...review,
        id: uuidv4(),
      }))
    );

    const sortedReviews = allReviews.sort((a, b) => b.rating - a.rating);

    return sortedReviews.slice(0, 4);
  }, [products]);

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title under-line">Our Happy Clients!</h2>
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
