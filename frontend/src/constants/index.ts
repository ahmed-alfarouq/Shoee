// import SecurityForm from "pages/Account/sections/SecurityForm";
// import OrderInfoForm from "pages/Account/sections/OrderInfoForm";
import { MainInfoForm } from "@/features/Settings/MainInfoForm";

import useUserStore from "@/stores/user";

const user = useUserStore.getState().user;

import {
  FaGoogle,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const categories = ["mens-shirts", "mens-shoes", "mens-watches"];

export const settingsTabs = [
  { label: "Main Info", component: MainInfoForm },
  { label: "Security", component: null },
  { label: "Order Info", component: null },
];

export const footerFirstMenu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "All Products",
    to: "/products",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  {
    name: user ? "My Account" : "Sign In",
    to: user ? "/account" : "/sign-in",
  },
];

export const footerSocialMenu = [
  {
    name: "",
    to: "#",
    icon: FaFacebook,
  },
  {
    name: "",
    to: "#",
    icon: FaTwitter,
  },
  {
    name: "",
    to: "#",
    icon: FaInstagram,
  },
  {
    name: "",
    to: "#",
    icon: FaGoogle,
  },
  {
    name: "",
    to: "#",
    icon: FaYoutube,
  },
];
