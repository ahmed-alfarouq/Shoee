import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Checkout.module.scss";

import Sidebar from "./sections/Sidebar";
import Addresses from "./sections/Addresses";

import { useCartState } from "@/hooks/useCart";

const Checkout = () => {
  const { items } = useCartState();

  const navigate = useNavigate();

  useEffect(() => {
    if (items.length <= 0) navigate("/products", { replace: true });
  }, [items.length, navigate]);

  return (
    <section className={`${styles.checkout} container`}>
      <h1 className={styles.title}>Checkout</h1>
      <section className={styles.content}>
        <Addresses />
        <Sidebar />
      </section>
    </section>
  );
};

export default Checkout;
