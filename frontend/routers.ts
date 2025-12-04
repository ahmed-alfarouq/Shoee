import { createBrowserRouter } from "react-router-dom";

import { ShopLayout } from "@/layouts/Shop";
import { DashboardLayout } from "@/layouts/Dashboard";

import { Home } from "@pages/Home";
import { Cart } from "@/pages/Cart";
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

import authLoader from "@/loaders/authLoader";

import { ErrorProvider } from "@/providers/ErrorProvider";

export const router = createBrowserRouter([
  {
    Component: ErrorProvider,
    children: [
      {
        path: "/admin",
        Component: DashboardLayout,
      },
      {
        path: "/",
        Component: ShopLayout,
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
            loader: authLoader,
          },
          {
            path: "/contactus",
            Component: ContactUs,
          },
          {
            path: "/account",
            Component: Account,
            loader: authLoader,
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
    ],
  },
]);
