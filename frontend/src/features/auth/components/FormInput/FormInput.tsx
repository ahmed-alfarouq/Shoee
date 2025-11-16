import { Field, ErrorMessage } from "formik";

import styles from "./FormInput.module.scss";

import type { FormInputProps } from "./FormInput.types";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder = " ",
}: FormInputProps) => {
  return (
    <div className={styles.form_control}>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.form_input}
        aria-describedby={`${name}-error`}
      />
      <label htmlFor={name} className={styles.form_label}>
        {label}
      </label>
      <ErrorMessage name={name} className={styles.error} />
    </div>
  );
};

export default FormInput;
