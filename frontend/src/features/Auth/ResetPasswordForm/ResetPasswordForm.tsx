import { useEffect, useState, useTransition } from "react";
import { Formik, Form } from "formik";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "../FormMessage";

import { resetPasswordSchema, type ResetPasswordSchema } from "@/schema/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUserActions } from "@/stores/user";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [URLSearchParams] = useSearchParams();
  const token = URLSearchParams.get("token");

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const { resetPassword } = useUserActions();

  const onSubmit = ({ password }: ResetPasswordSchema) => {
    startTransition(async () => {
      setFormError("");
      setFormSuccess("");

      if (!token) {
        setFormError("Invalid or missing token.");
        return;
      }

      const [err, data] = await resetPassword(token, password);

      if (err) {
        setFormError(err.message);
        return;
      }

      setFormSuccess(data?.msg || "Password has been reset successfully.");
    });
  };

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={resetPasswordSchema}
    >
      <Form className={styles.form} name="resetPassword">
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder=" "
          disabled={isPending || formSuccess.length > 0}
        />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
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

export default ResetPasswordForm;
