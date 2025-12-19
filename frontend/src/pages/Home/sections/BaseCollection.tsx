import { Link } from "react-router-dom";

import styles from "../Home.module.scss";

import { Button } from "@/components/Button";

import collectionTwo from "@/assets/images/collection-02.webp";

const BaseCollection = () => {
  return (
    <section className={styles.base_collection}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div className={styles.left}>
          <img src={collectionTwo} alt="" />
          <div className={styles.content}>
            <span>Tshirts</span>
            <h2 className={styles.title}>
              The base collection - Ideal every day.
            </h2>
            <Button asChild className={styles.btn}>
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
};

export default BaseCollection;
