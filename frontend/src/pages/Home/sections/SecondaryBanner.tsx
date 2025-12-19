import { Link } from "react-router-dom";

import styles from "../Home.module.scss";

import { Button } from "@/components/Button";

const SecondaryBanner = () => {
  return (
    <section className={styles.secondary_banner}>
      <div className={styles.inner}>
        <span>New Products</span>
        <h2 className={styles.title}>
          Be different in your own way!
          <span>Find your unique style.</span>
        </h2>
        <Button asChild className={styles.btn}>
          <Link to="/products">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default SecondaryBanner;
