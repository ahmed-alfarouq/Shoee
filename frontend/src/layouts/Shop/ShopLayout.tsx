import { Outlet } from "react-router-dom";

import CartProdiver from "@/context/cart";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const ShopLayout = () => {
  return (
    <CartProdiver>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProdiver>
  );
};

export default ShopLayout;
