import { useState } from "react";
import { Formik, Form } from "formik";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "../FormMessage";

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
      <Form className={styles.form} name="forgotPassword">
        <Input type="email" label="Email" name="email" placeholder=" " />

        <FormMessage type="error" message={formError} />
        <Button type="submit">Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
