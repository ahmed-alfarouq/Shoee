import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { ShopLayout } from "@/layouts/Shop";
import { DashboardLayout } from "@/layouts/Dashboard";

const Home = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.Home }))
);
const Cart = lazy(() =>
  import("@/pages/Cart").then((module) => ({ default: module.Cart }))
);
const Account = lazy(() =>
  import("@/pages/Account").then((module) => ({ default: module.Account }))
);
const Checkout = lazy(() =>
  import("@/pages/Checkout").then((module) => ({ default: module.Checkout }))
);
const Products = lazy(() =>
  import("@/pages/Products").then((module) => ({ default: module.Products }))
);
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((module) => ({ default: module.NotFound }))
);
const ContactUs = lazy(() =>
  import("@/pages/ContactUs").then((module) => ({ default: module.ContactUs }))
);
const SingleProduct = lazy(() =>
  import("@/pages/SingleProduct").then((module) => ({
    default: module.SingleProduct,
  }))
);

const SignUp = lazy(() =>
  import("@/pages/SignUp").then((module) => ({ default: module.SignUp }))
);
const SignIn = lazy(() =>
  import("@/pages/SignIn").then((module) => ({ default: module.SignIn }))
);
const VerifyEmail = lazy(() =>
  import("@/pages/VerifyEmail").then((module) => ({
    default: module.VerifyEmail,
  }))
);
const ResetPassword = lazy(() =>
  import("@/pages/ResetPassword").then((module) => ({
    default: module.ResetPassword,
  }))
);
const ForgotPassword = lazy(() =>
  import("@/pages/ForgotPassword").then((module) => ({
    default: module.ForgotPassword,
  }))
);

import { LazyLoad } from "@/features/LazyLoad";

import authLoader from "@/loaders/authLoader";

import { ErrorProvider } from "@/providers/ErrorProvider";

export const router = createBrowserRouter([
  {
    loader: authLoader,
    Component: ErrorProvider,
    shouldRevalidate: () => true, // Run loader on every navigation
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
            Component: LazyLoad(Home),
          },
          {
            path: "/products",
            Component: LazyLoad(Products),
          },
          {
            path: "/products/:id",
            Component: LazyLoad(SingleProduct),
          },
          {
            path: "/cart",
            Component: LazyLoad(Cart),
          },
          {
            path: "/checkout",

            Component: LazyLoad(Checkout),
          },
          {
            path: "/contactus",
            Component: LazyLoad(ContactUs),
          },
          {
            path: "/account",

            Component: LazyLoad(Account),
          },
          {
            path: "/sign-in",
            Component: LazyLoad(SignIn),
          },
          {
            path: "/sign-up",
            Component: LazyLoad(SignUp),
          },
          {
            path: "/forgot-password",
            Component: LazyLoad(ForgotPassword),
          },
          {
            path: "/reset-password",
            Component: LazyLoad(ResetPassword),
          },
          {
            path: "/verify-email",
            Component: LazyLoad(VerifyEmail),
          },
          {
            path: "*",
            Component: LazyLoad(NotFound),
          },
        ],
      },
    ],
  },
]);
