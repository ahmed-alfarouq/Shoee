import { createBrowserRouter, redirect } from "react-router-dom";

import { Home } from "@pages/Home";

import { ShopLayout } from "@/layouts/Shop";
import { DashboardLayout } from "@/layouts/Dashboard";

import { Cart } from "@/pages/Cart";
import { Error } from "@/pages/Error";
import { SignIn } from "@/pages/SignIn";
import { Account } from "@/pages/Account";
import { Checkout } from "@/pages/Checkout";
import { Products } from "@/pages/Products";
import { NotFound } from "@/pages/NotFound";
import { ContactUs } from "@/pages/ContactUs";
import { SingleProduct } from "@/pages/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/admin",
    Component: DashboardLayout,
  },
  {
    path: "/",
    Component: ShopLayout,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/:id",
        Component: SingleProduct,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/checkout",
        Component: Checkout,
        loader: () => {
          const isLoggedIn = false;
          if (!isLoggedIn) {
            return redirect("/signin?message=You must login first to access checkout");
          }
          return null;
        },
      },
      {
        path: "/contactus",
        Component: ContactUs,
      },
      {
        path: "/account",
        Component: Account,
        loader: () => {
          const isLoggedIn = false;
          if (!isLoggedIn) {
            return redirect("/signin");
          }
          return null;
        },
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
