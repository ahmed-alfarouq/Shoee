import { useState } from "react";
import { Formik, Form } from "formik";

import styles from "../Form.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "../FormMessage";

import { registerSchema, type RegisterSchema } from "@/schema/auth";


const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formError, setFormError] = useState("");
  const onSubmit = (values: RegisterSchema) => {
    setFormError("");
    console.log(values);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={registerSchema}
    >
      <Form className={styles.form} name="signUp">
        <Input label="Username" name="username" placeholder=" " />
        <Input type="email" label="Email" name="email" placeholder=" " />
        <Input type="password" label="Password" name="password" placeholder=" " />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder=" " />
        <FormMessage type="error" message={formError} />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
