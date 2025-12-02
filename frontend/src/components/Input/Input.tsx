import { useState } from "react";
import { ErrorMessage, Field } from "formik";

import styles from "./Input.module.scss";

import { Button } from "@components/Button";

import { BsEye, BsEyeSlash } from "react-icons/bs";

import type { InputProps } from "./Input.types";

const Input = ({ label, type, name, placeholder, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isTextarea = type === "textarea";

  return (
    <div className={styles.form_control}>
      <Field
        id={name}
        as={isTextarea ? "textarea" : "input"}
        type={isTextarea ? undefined : showPassword ? "text" : type}
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

      {type === "password" && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={styles.toggle_password}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </Button>
      )}
    </div>
  );
};

export default Input;
