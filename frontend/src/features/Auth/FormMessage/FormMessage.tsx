import styles from "./FormMessage.module.scss";

import type { FormMessageProps } from "./FormMessage.types";

const FormMessage = ({
  type = "error",
  message,
  className,
}: FormMessageProps) => {
  if (!message) return null;

  return (
    <span className={`${styles.form_error} ${styles[type]} ${className}`}>
      {message}
    </span>
  );
};

export default FormMessage;
