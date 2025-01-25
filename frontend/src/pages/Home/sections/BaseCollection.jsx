import React from "react";
import collectionTwo from "../../../assets/images/collection-02.jpg";
import { Link } from "react-router-dom";

const BaseCollection = () => {
  return (
    <section className="base-collection">
      <div className="container">
        <div className="left">
          <img src={collectionTwo} alt="Collection 1" />
          <div className="content">
            <span>Tshirts</span>
            <h2 className="title">The base collection - Ideal every day.</h2>
            <Link to="/products/category/mens-shirts" className="btn">
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
