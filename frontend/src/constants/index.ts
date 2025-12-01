// import MainInfoForm from "pages/Account/sections/MainInfoForm";
// import SecurityForm from "pages/Account/sections/SecurityForm";
// import OrderInfoForm from "pages/Account/sections/OrderInfoForm";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const categories = ["mens-shirts", "mens-shoes", "mens-watches"];

export const settingsTabs = [
  { id: "main", label: "Main Info", component: null },
  { id: "security", label: "Security", component: null },
  { id: "order", label: "Order Info", component: null },
];

export const footerFirstMenu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "My Account",
    to: "/account",
  },
  {
    name: "All Products",
    to: "/products",
  },
  {
    name: "Contact",
    to: "/contact",
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
