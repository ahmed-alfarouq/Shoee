import { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { loginSchema, type LoginSchema } from "@/schema/auth";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formError, setFormError] = useState("");

  const onSubmit = (values: LoginSchema) => {
    setFormError("");
    console.log(values);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={loginSchema}
    >
      <Form name="log_in" className={styles.form}>
        <h2 className="title">Sign In</h2>
        <Input type="email" label="Email" name="email" placeholder=" " />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder=" "
        />
        <span className={styles.error}>{formError}</span>
        <Button type="submit">Sign In</Button>
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/signup">Don't have an account?</Link>
      </Form>
    </Formik>
  );
};

export default SignInForm;
