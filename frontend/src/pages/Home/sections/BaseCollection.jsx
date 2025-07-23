import React from "react";
import { Link } from "react-router-dom";

import collectionTwo from "assets/images/collection-02.webp";

const BaseCollection = () => {
  return (
    <section className="base-collection">
      <div className="container">
        <div className="left">
          <img src={collectionTwo} alt="Collection 1" />
          <div className="content">
            <span>Tshirts</span>
            <h2 className="title">The base collection - Ideal every day.</h2>
            <Link to="/products" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default BaseCollection;
