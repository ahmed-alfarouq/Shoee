import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

import { Button } from "@/components/Button";

const NotFound = () => {
  return (
    <section className={styles.not_found}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops! Page not found.</h1>
        <p className={styles.sub_title}>
          The link you followed may be broken or the page might have been
          removed.
        </p>
        <Button asChild className={styles.link}>
          <Link to="/">Go to home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
