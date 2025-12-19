import styles from "./PageLoader.module.scss";

import { Spinner } from "@/shared/Spinner";

const PageLoader = () => {
  return (
    <div className={styles.page_loader}>
      <Spinner size="lg" />
    </div>
  );
};

export default PageLoader;
