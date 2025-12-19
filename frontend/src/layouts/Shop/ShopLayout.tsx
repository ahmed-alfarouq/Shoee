import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/shared/ScrollToTop";

const ShopLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ShopLayout;
