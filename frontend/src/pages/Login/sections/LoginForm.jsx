import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { clearAll } from "../../../app/features/main/mainSlice";

import FormInput from "../../../components/FormInput";

let initialValues = {
  email: "",
  password: "",
};

const validate = Yup.object({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const LoginForm = ({ submit, formError }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validate}
    >
      <Form name="log_in" className="log_in_form form">
        <h2 className="title">login</h2>
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />
        <span className="error">{formError}</span>
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
