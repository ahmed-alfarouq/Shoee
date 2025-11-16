import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { clearAll } from "@/app/features/main/mainSlice";

import { FormInput } from "../FormInput";

import styles from "../Form.module.scss";

import { loginSchema } from "@/schema/auth";

import type { LoginFormProps } from "./LoginForm.types";

const LoginForm = ({ submit, formError }: LoginFormProps) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submit}
      validationSchema={loginSchema}
    >
      <Form name="log_in" className={styles.form}>
        <h2 className="title">login</h2>
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />
        <span className={styles.error}>{formError}</span>
        <button type="submit" className="btn">
          Log In
        </button>
        <Link onClick={() => dispatch(clearAll())} to="/forgot-password">
          Forgot password?
        </Link>
        <Link onClick={() => dispatch(clearAll())} to="/signup">
          Don't have an account?
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
