import React from "react";
import { Field, ErrorMessage } from "formik";

const countries = [
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "USA",
  "UK",
];

const FormSelect = ({ label, name }) => {
  return (
    <div className="form_control">
      <Field as="select" name={name} className="form_input">
        <option value="">{label}</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </Field>
      <div className="error">
        <ErrorMessage name={name} component="" className="error" />
      </div>
    </div>
  );
};

export default FormSelect;
