import { Link } from "react-router-dom";
import styles from "../Navbar.module.scss";

const NavItems = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.nav_item}>
        <Link to="/" className={styles.nav_link}>
          Home
        </Link>
      </li>
      <li className={styles.nav_item}>
        <Link to="/products" className={styles.nav_link}>
          All products
        </Link>
      </li>
      <li className={styles.nav_item}>
        <Link to="/contactus" className={styles.nav_link}>
          Contact
        </Link>
      </li>

      <li className={styles.nav_item}>
        <Link to="/account" className={styles.nav_link}>
          My account
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
