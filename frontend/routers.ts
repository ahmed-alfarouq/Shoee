import { createBrowserRouter, redirect } from "react-router-dom";

import { Home } from "@pages/Home";

import { ShopLayout } from "@/layouts/Shop";
import { DashboardLayout } from "@/layouts/Dashboard";

import { Cart } from "@/pages/Cart";
import { Error } from "@/pages/Error";
import { Account } from "@/pages/Account";
import { Checkout } from "@/pages/Checkout";
import { Products } from "@/pages/Products";
import { NotFound } from "@/pages/NotFound";
import { ContactUs } from "@/pages/ContactUs";
import { SingleProduct } from "@/pages/SingleProduct";

import { SignUp } from "@/pages/SignUp";
import { SignIn } from "@/pages/SignIn";
import { VerifyEmail } from "@/pages/VerifyEmail";
import { ResetPassword } from "@/pages/ResetPassword";
import { ForgotPassword } from "@/pages/ForgotPassword";

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
            return redirect(
              "/sign-in?message=You must login first to access checkout"
            );
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
            return redirect("/sign-in");
          }
          return null;
        },
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/reset-password",
        Component: ResetPassword,
      },
      {
        path: "/verify-email",
        Component: VerifyEmail,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
