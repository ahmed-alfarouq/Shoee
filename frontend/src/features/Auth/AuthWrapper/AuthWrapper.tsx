import type { ReactNode } from "react";

import styles from "./AuthWrapper.module.scss";

const AuthWrapper = ({
  title,
  message,
  children,
}: {
  children: ReactNode;
  title: string;
  message?: string | null;
}) => {
  return (
    <section className={styles.auth}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {message && <p className={styles.description}>{message}</p>}
        {children}
      </div>
    </section>
  );
};

export default AuthWrapper;
