import { Link } from "react-router-dom";

import styles from "./AuthWrapper.module.scss";

import type { AuthWrapperProps } from "./AuthWrapper.types";

const AuthWrapper = ({
  title,
  message,
  children,
  formTitle,
  bottomLinks,
}: AuthWrapperProps) => {
  return (
    <section className={styles.auth}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {message && <p className={styles.description}>{message}</p>}
        <div className={styles.form}>
          {formTitle && <h2 className={styles.form_title}>{formTitle}</h2>}
          {children}
          {bottomLinks && (
            <div className={styles.bottom_links}>
              {bottomLinks.map((link) => (
                <Link key={link.url} to={link.url} className={styles.bottom_link}>
                  {link.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthWrapper;
