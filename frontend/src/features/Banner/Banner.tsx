import styles from "./Banner.module.scss";

import type { BannerProps } from "./Banner.types";

const Banner = ({
  children,
  title,
  description,
  image,
  ...props
}: BannerProps) => {
  return (
    <section className={styles.banner} {...props}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.left_wrap}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          {children}
        </div>
        <div className={styles.right_wrap}>
          <img src={image} alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
