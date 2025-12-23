import { MainInfoForm } from "@features/Settings/MainInfoForm";
import { SecurityForm } from "@features/Settings/SecurityForm";
import BillingDetails from "@/pages/Account/sections/BillingDetails";

import useUserStore from "@/stores/user";

const token = useUserStore.getState().token;

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
  { label: "Security", component: SecurityForm },
  { label: "Billing Details", component: BillingDetails },
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
    name: token ? "My Account" : "Sign In",
    to: token ? "/account" : "/sign-in",
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

export const countries = [
  { text: "United States", value: "United States" },
  { text: "Canada", value: "Canada" },
  { text: "United Kingdom", value: "United Kingdom" },
  { text: "Australia", value: "Australia" },
  { text: "Germany", value: "Germany" },
  { text: "France", value: "France" },
  { text: "Italy", value: "Italy" },
  { text: "Spain", value: "Spain" },
  { text: "Mexico", value: "Mexico" },
  { text: "Brazil", value: "Brazil" },
  { text: "Argentina", value: "Argentina" },
  { text: "India", value: "India" },
  { text: "China", value: "China" },
  { text: "Japan", value: "Japan" },
  { text: "South Korea", value: "South Korea" },
  { text: "Egypt", value: "Egypt" },
  { text: "South Africa", value: "South Africa" },
  { text: "Nigeria", value: "Nigeria" },
  { text: "Russia", value: "Russia" },
  { text: "Turkey", value: "Turkey" },
  { text: "Saudi Arabia", value: "Saudi Arabia" },
  { text: "United Arab Emirates", value: "United Arab Emirates" },
  { text: "Sweden", value: "Sweden" },
  { text: "Norway", value: "Norway" },
  { text: "Denmark", value: "Denmark" },
  { text: "Netherlands", value: "Netherlands" },
  { text: "Belgium", value: "Belgium" },
  { text: "Switzerland", value: "Switzerland" },
  { text: "Poland", value: "Poland" },
  { text: "Greece", value: "Greece" },
];
