import { useState } from "react";
import { Formik, Form } from "formik";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "../FormMessage";

import { loginSchema, type LoginSchema } from "@/schema/auth";


const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formError, setFormError] = useState("we are having some error");

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
      <Form className={styles.form} name="logIn">
        <Input type="email" label="Email" name="email" placeholder=" " />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder=" "
        />
        <FormMessage type="error" message={formError} />
        <Button type="submit">Sign In</Button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
