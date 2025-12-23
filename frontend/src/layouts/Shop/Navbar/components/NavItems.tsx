import { useUserToken } from "@/stores/user";
import { Link, useLocation } from "react-router-dom";

import styles from "../Navbar.module.scss";

const NavItems = () => {
  const pathname = useLocation().pathname;

  const token = useUserToken();

  return (
    <ul className={styles.menu}>
      <li className={styles.nav_item}>
        <Link
          to="/"
          className={`${styles.nav_link} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li className={styles.nav_item}>
        <Link
          to="/products"
          className={`${styles.nav_link} ${
            pathname === "/products" ? styles.active : ""
          }`}
        >
          All products
        </Link>
      </li>
      <li className={styles.nav_item}>
        <Link
          to="/contactus"
          className={`${styles.nav_link} ${
            pathname === "/contactus" ? styles.active : ""
          }`}
        >
          Contact
        </Link>
      </li>

      {token && (
        <li className={styles.nav_item}>
          <Link
            to="/account"
            className={`${styles.nav_link} ${
              pathname === "/account" ? styles.active : ""
            }`}
          >
            My account
          </Link>
        </li>
      )}

      {!token && (
        <li className={styles.nav_item}>
          <Link
            to="/sign-in"
            className={`${styles.nav_link} ${
              pathname === "/sign-in" ? styles.active : ""
            }`}
          >
            Sign In
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavItems;
