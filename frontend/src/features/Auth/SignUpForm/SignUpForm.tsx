import { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

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
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registerSchema}
    >
      <Form name="log_in" className="log_in_form form">
        <h2 className="title">signup</h2>
        <Input label="Username" name="username" />
        <Input type="email" label="Email" name="email" />
        <Input type="password" label="Password" name="password" />
        <Input
          type="password"
          name="confirm_password"
          label="Confirm Password"
        />
        <span className="error">{formError}</span>
        <Button type="submit">Sign Up</Button>
        <Link to="/signin">Already have an account!</Link>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
