import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

//Redux
import Menu from "../components/Menu";

const Footer = () => {
  const firstMenu = [
    {
      name: "Home",
      to: "/",
      icon: null,
    },
    {
      name: "About",
      to: "/about",
      icon: null,
    },
    {
      name: "My Account",
      to: "/my-account",
      icon: null,
    },
  ];
  const secondMenu = [
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
  const socialMenu = [
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
  return (
    <footer>
      <div className="primary-footer-wrap">
        <Menu style="vertical" items={firstMenu} />
        <Menu style="vertical" items={secondMenu} />
        <Menu style="horizontal" items={socialMenu} />
      </div>
      <p>Copyright © 2025 Custom Printing Pro</p>
    </footer>
  );
};

export default Footer;
