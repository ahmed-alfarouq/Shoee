import { ErrorMessage, Field } from "formik";

import styles from "./Input.module.scss";

import type { InputProps } from "./Input.types";

const Input = ({ label, type, name, placeholder, ...props }: InputProps) => {
  const isTextarea = type === "textarea";

  return (
    <div className={styles.form_control}>
      <Field
        id={name}
        as={isTextarea ? "textarea" : "input"}
        type={isTextarea ? undefined : type}
        name={name}
        placeholder={placeholder}
        className={styles.form_input}
        {...props}
      />

      <ErrorMessage
        name={name || ""}
        component="span"
        className={styles.error}
      />

      {label && (
        <label className={styles.form_label} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
