import MainInfoForm from "pages/Account/sections/MainInfoForm";
import SecurityForm from "pages/Account/sections/SecurityForm";
import OrderInfoForm from "pages/Account/sections/OrderInfoForm";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const categories = ["mens-shirts", "mens-shoes", "mens-watches"];

export const settingsTabs = [
  { id: "main", label: "Main Info", component: MainInfoForm },
  { id: "security", label: "Security", component: SecurityForm },
  { id: "order", label: "Order Info", component: OrderInfoForm },
];

export const footerFirstMenu = [
  {
    name: "Home",
    to: "/",
    icon: null,
  },
  {
    name: "My Account",
    to: "/my-account",
    icon: null,
  },
];

export const footerSecondMenu = [
  {
    name: "All Products",
    to: "/shop",
    icon: null,
  },
  {
    name: "Contact",
    to: "/contact",
    icon: null,
  },
  {
    name: "Cart",
    to: "/cart",
    icon: null,
  },
];

export const footerSocialMenu = [
  {
    name: "",
    to: "#",
    icon: <FaFacebook />,
  },
  {
    name: "",
    to: "#",
    icon: <FaTwitter />,
  },
  {
    name: "",
    to: "#",
    icon: <FaInstagram />,
  },
  {
    name: "",
    to: "#",
    icon: <FaGoogle />,
  },
  {
    name: "",
    to: "#",
    icon: <FaYoutube />,
  },
];
