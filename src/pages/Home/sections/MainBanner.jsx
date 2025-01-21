import React from "react";
import { Link } from "react-router-dom";

// Assets
import bannerImage from "../../../assets/images/boy.png";
import { FaAnglesRight } from "react-icons/fa6";

const MainBanner = () => {
  return (
    <section className="banner container">
      <div className="left-wrap">
        <h1 className="title">All you need is here!</h1>
        <p className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          consequuntur, mollitia culpa repudiandae voluptatem ullam dicta nisi
          laborum voluptates veniam vero non tempore dignissimos.
        </p>

        <Link to="/shop" className="btn">
          <FaAnglesRight />
          explore store
        </Link>
      </div>
      <div className="right-wrap">
        <img src={bannerImage} alt="Banner" loading="lazy" />
      </div>
    </section>
  );
};

export default MainBanner;
