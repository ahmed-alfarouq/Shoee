import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";
import { updatePassword } from "../../../app/features/user/userAPI";
import FloatingAlert from "../../../components/FloatingAlert";
import { clearAll } from "../../../app/features/main/mainSlice";

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
  const dispatch = useDispatch();
  const error = useSelector((state) => state.main.authError);
  const message = useSelector((state) => state.main.message);
  const submit = (values, { resetForm }) => {
    dispatch(
      updatePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form className="account-form form">
          <FormInput label="Old Password" name="oldPassword" type="password" />
          <FormInput label="New Password" name="newPassword" type="password" />
          <FormInput
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
          />
          <span className="error">{error}</span>
          <FloatingAlert
            message={message}
            seconds={5}
            callback={() => dispatch(clearAll())}
          />
          <button type="submit" className="btn" disabled={isSubmitting}>
            Update Password
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SecurityForm;
