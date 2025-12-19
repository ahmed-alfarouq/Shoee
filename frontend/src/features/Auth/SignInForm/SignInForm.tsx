import { Formik, Form } from "formik";
import { useState, useTransition } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "@features/Auth/FormMessage";

import { useUserActions } from "@/stores/user";

import { loginSchema, type LoginSchema } from "@/schema/auth";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [URLSearchParams] = useSearchParams();

  const [formError, setFormError] = useState("");
  const [isPending, startTransition] = useTransition();

  const { signIn } = useUserActions();

  const onSubmit = ({ email, password }: LoginSchema) => {
    startTransition(async () => {
      setFormError("");

      const [err] = await signIn(email, password);

      if (err) {
        setFormError(err.message);
        return;
      }
    
      const redirectTo = URLSearchParams.get("redirectTo") || "/";
      navigate(redirectTo, { replace: true });
    });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={loginSchema}
    >
      <Form className={styles.form} name="logIn">
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
        <FormMessage type="error" message={formError} />
        <Button type="submit" disabled={isPending}>
          Sign In
        </Button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
