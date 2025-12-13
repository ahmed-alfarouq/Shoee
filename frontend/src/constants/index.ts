import { MainInfoForm } from "@features/Settings/MainInfoForm";
import { SecurityForm } from "@features/Settings/SecurityForm";
import BillingDetails from "@/pages/Account/sections/BillingDetails";

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

export const addresses = [
  {
    id: "1",
    default: true,
    firstName: "Omar",
    lastName: "Hassan",
    country: "Egypt",
    city: "Cairo",
    state: "Cairo",
    zipCode: "11511",
    streetName: "Tahrir Street",
    apartment: "12B",
    phoneNumber: "+20 1001234567",
  },
  {
    id: "2",
    default: false,
    firstName: "Omar",
    lastName: "Hassan",
    country: "Egypt",
    city: "Giza",
    state: "Giza",
    zipCode: "12511",
    streetName: "El Haram Street",
    apartment: "5A",
    phoneNumber: "+20 1009876543",
  },
  {
    id: "3",
    default: false,
    firstName: "Omar",
    lastName: "Hassan",
    country: "UAE",
    city: "Dubai",
    state: "Dubai",
    zipCode: "00000",
    streetName: "Sheikh Zayed Road",
    apartment: "21C",
    phoneNumber: "+971 501237890",
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
