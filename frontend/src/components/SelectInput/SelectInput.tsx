import { ErrorMessage } from "formik";

import styles from "./SelectInput.module.scss";

import { Select } from "@components/Select";

import type { SelectInputProps } from "./SelectInput.types";

const SelectInput = ({
  name,
  className,
  options,
  onSelect,
  ...props
}: SelectInputProps) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor="country" className={styles.form_label}>
        Country
      </label>
      <Select
        name={name}
        options={options}
        onSelect={onSelect}
        className={`${styles.form_input} ${className}`}
        {...props}
      />
      <ErrorMessage
        name={name || ""}
        component="span"
        className={styles.error}
      />
    </div>
  );
};

export default SelectInput;
