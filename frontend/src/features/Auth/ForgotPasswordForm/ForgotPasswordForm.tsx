import { Formik, Form } from "formik";
import { useUserActions } from "@/stores/user";
import { useState, useTransition } from "react";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "@features/Auth/FormMessage";

import { forgotPasswordSchema, type ForgotPasswordSchema } from "@/schema/auth";

const initialValues = { email: "" };

const ForgotPasswordForm = () => {
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const { forgotPassword } = useUserActions();

  const onSubmit = ({ email }: ForgotPasswordSchema) => {
    startTransition(async () => {
      setFormError("");
      setFormSuccess("");
      const [err, data] = await forgotPassword(email);

      if (err) {
        setFormError(err.message);
        return;
      }

      setFormSuccess(
        data?.msg || "If that email is registered, a reset link has been sent."
      );
    });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={forgotPasswordSchema}
    >
      <Form className={styles.form} name="forgotPassword">
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder=" "
          disabled={isPending || formSuccess.length > 0}
        />

        <FormMessage type="error" message={formError} />
        <FormMessage type="success" message={formSuccess} />
        <Button type="submit" disabled={isPending || formSuccess.length > 0}>
          Reset Password
        </Button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
