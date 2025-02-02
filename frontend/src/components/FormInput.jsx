import React from "react";
import { Field, ErrorMessage } from "formik";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder = " ",
  autoComplete = false,
}) => {
  return (
    <div className="form_control">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="form_input"
        autoComplete={autoComplete}
      />
      <label htmlFor={name} className="form_label">
        {label}
      </label>
      <div className="error">
        <ErrorMessage name={name} component="" className="error" />
      </div>
    </div>
  );
};

export default FormInput;
