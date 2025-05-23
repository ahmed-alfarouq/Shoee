import React from "react";
import { Link } from "react-router-dom";

const SecondaryBanner = () => {
  return (
    <section className="secondary-banner">
      <div className="container full-container">
        <div className="inner">
          <span>New Products</span>
          <h2 className="title">
            Be different in your own way!
            <span>Find your unique style.</span>
          </h2>
          <Link className="btn" to="/products">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondaryBanner;
