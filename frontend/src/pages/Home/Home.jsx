import React from "react";

// Components
import MainBanner from "./sections/MainBanner";
import TopRatedProducts from "./sections/TopRatedProducts";
import BaseCollection from "./sections/BaseCollection";
import OnSaleProducts from "./sections/OnSaleProducts";
import SecondaryBanner from "./sections/SecondaryBanner";
import Reviews from "../../features/Reviews";

const Home = () => {
  return (
    <main>
      <MainBanner />
      <BaseCollection />
      <TopRatedProducts />
      <SecondaryBanner />
      <OnSaleProducts />
      <Reviews />
    </main>
  );
};

export default Home;
