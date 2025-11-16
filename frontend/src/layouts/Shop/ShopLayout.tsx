import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const ShopLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ShopLayout;
