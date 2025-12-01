import { useState } from "react";
import { Formik, Form } from "formik";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { forgotPasswordSchema, type ForgotPasswordSchema } from "@/schema/auth";

const initialValues = { email: "" };

const ForgotPasswordForm = () => {
  const [formError, setFormError] = useState("");
  const onSubmit = (values: ForgotPasswordSchema) => {
    setFormError("");
    console.log(values);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={forgotPasswordSchema}
    >
      <Form name="forgot_password" className="form">
        <Input type="email" label="Email" name="email" placeholder=" " />

        <span className="error">{formError}</span>
        <Button type="submit">Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
