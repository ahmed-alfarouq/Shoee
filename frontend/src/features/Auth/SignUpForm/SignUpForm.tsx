import { Formik, Form } from "formik";
import { useUserActions } from "@/stores/user";
import { useState, useTransition } from "react";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "@features/Auth/FormMessage";

import { registerSchema, type RegisterSchema } from "@/schema/auth";

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const { signUp } = useUserActions();

  const onSubmit = ({ username, email, password }: RegisterSchema) => {
    startTransition(async () => {
      setFormError("");
      const [err, data] = await signUp(username, email, password);

      if (err) {
        setFormError(err.message);
        return;
      }

      if (data) {
        setFormSuccess(
          "Account created successfully! Please verify your email before logging in."
        );
      }
    });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={registerSchema}
    >
      <Form className={styles.form} name="signUp">
        <Input
          label="Username"
          name="username"
          placeholder=" "
          disabled={isPending}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder=" "
          disabled={isPending}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder=" "
          disabled={isPending}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder=" "
          disabled={isPending}
        />
        <FormMessage type="error" message={formError} />
        <FormMessage type="success" message={formSuccess} />
        <Button type="submit" disabled={isPending}>
          Sign Up
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
