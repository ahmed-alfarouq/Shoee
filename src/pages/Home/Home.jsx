import React from "react";
import MainBanner from "./sections/MainBanner";
import TopRatedProducts from "./sections/TopRatedProducts";
import BaseCollection from "./sections/BaseCollection";
// import Slide from "./Slide";
// import TopSelling from "./TopSelling";
// import SingleSection from "./SingleSection";

const Home = () => {
  return (
    <main>
      <MainBanner />
      <BaseCollection />
      <TopRatedProducts />
    </main>
  );
};

export default Home;
