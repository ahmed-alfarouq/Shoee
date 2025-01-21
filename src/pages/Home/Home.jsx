import React from "react";
import MainBanner from "./sections/MainBanner";
import FeaturedProducts from "./sections/FeaturedProducts";
import BaseCollection from "./sections/BaseCollection";
// import Slide from "./Slide";
// import TopSelling from "./TopSelling";
// import SingleSection from "./SingleSection";

const Home = () => {
  return (
    <main>
      <MainBanner />
      <BaseCollection />
      <FeaturedProducts />
    </main>
  );
};

export default Home;
