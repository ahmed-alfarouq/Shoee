import { Link } from "react-router-dom";

import styles from "./EmptyCart.module.scss";

import { Button } from "@/components/Button";

import { IoCartOutline } from "react-icons/io5";

const EmptyCart = () => (
  <div className={styles.empty_cart}>
    <IoCartOutline className={styles.icon} />
    <h2>Your Cart is Empty</h2>
    <p>Looks like you haven't added anything to your cart yet.</p>
    <Button asChild>
      <Link to="/products">Explore Products</Link>
    </Button>
  </div>
);

export default EmptyCart;
