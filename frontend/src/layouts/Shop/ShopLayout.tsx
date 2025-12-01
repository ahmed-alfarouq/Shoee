import { Outlet } from "react-router-dom";

import CartProdiver from "@/context/cart";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/shared/ScrollToTop";

const ShopLayout = () => {
  return (
    <CartProdiver>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProdiver>
  );
};

export default ShopLayout;
