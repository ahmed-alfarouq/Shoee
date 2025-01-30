import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";

const initialValues = { oldPassword: "", newPassword: "", confirmPassword: "" };

const validation = Yup.object({
  oldPassword: Yup.string().required("Old Password is required!"),
  newPassword: Yup.string()
    .min(8, "Must be at least 8 characters!")
    .required("New Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match!")
    .required("Confirm Password is required!"),
});

const SecurityForm = () => {
  const submit = (values) => {
    console.log("Updated Password:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={submit}
    >
      <Form className="account-form form">
        <FormInput label="Old Password" name="oldPassword" type="password" />
        <FormInput label="New Password" name="newPassword" type="password" />
        <FormInput
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
        />

        <button type="submit" className="btn">
          Update Password
        </button>
      </Form>
    </Formik>
  );
};

export default SecurityForm;
