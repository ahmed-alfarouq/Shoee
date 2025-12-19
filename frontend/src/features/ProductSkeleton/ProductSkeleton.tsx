import styles from "./ProductSkeleton.module.scss";

const ProductSkeleton = () => (
  <div className={styles.card}>
    <div className={styles.blur_image_wrapper}>
      <img
        src="https://placehold.co/300x300"
        alt=""
        className={styles.placeholder}
      />
    </div>
    <div className={styles.card_content}>
      <span
        className={`${styles.loading_skeleton} mx-auto my-3`}
        style={{ width: "35%" }}
      />
      <span
        className={`${styles.loading_skeleton} mx-auto my-3`}
        style={{ width: "60%" }}
      />
      <span
        className={`${styles.loading_skeleton} mx-auto my-3`}
        style={{ width: "35%" }}
      />
      <span
        className={`${styles.loading_skeleton} mx-auto my-3`}
        style={{ width: "45%" }}
      />
    </div>
  </div>
);

export default ProductSkeleton;
