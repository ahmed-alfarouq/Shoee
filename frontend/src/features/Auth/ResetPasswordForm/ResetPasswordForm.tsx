import { useState } from "react";
import { Formik, Form } from "formik";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "../FormMessage";

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
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={resetPasswordSchema}
    >
      <Form className={styles.form} name="resetPassword">
        <Input type="password" label="Password" name="password" />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
        />

        <FormMessage type="error" message={formError} />
        <Button type="submit">Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
