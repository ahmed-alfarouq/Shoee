import bannerImage from "@/assets/images/boy.webp";

import { Banner } from "@/features/Banner";
import BaseCollection from "./sections/BaseCollection";
import OnSaleProducts from "./sections/OnSaleProducts";
import TopRatedProducts from "./sections/TopRatedProducts";
import SecondaryBanner from "./sections/SecondaryBanner";

// import Reviews from "features/Reviews";

const Home = () => {
  return (
    <>
      <Banner
        title="All you need is here!"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            consequuntur, mollitia culpa repudiandae voluptatem ullam dicta nisi
            laborum voluptates veniam vero non tempore dignissimos."
        image={bannerImage}
        style={{ marginBottom: 50 }}
      />
      <BaseCollection />
      <TopRatedProducts />
      <SecondaryBanner />
      <OnSaleProducts />

      {/* 
      
      
      
      <Reviews /> */}
    </>
  );
};

export default Home;
