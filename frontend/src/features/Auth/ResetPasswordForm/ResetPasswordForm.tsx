import { useState } from "react";
import { Formik, Form } from "formik";

import { Button } from "@/components/Button";

import { Input } from "@/components/Input";
import { resetPasswordSchema, type ResetPasswordSchema } from "@/schema/auth";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const ResetPasswordForm = () => {
  const [formError, setFormError] = useState("");
  const onSubmit = (values: ResetPasswordSchema) => {
    setFormError("");
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={resetPasswordSchema}
    >
      <Form name="reset_password" className="reset_password_form form">
        <Input type="password" label="Password" name="password" />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
        />

        <span className="error">{formError}</span>
        <Button type="submit">Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
