import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { resetErrorAndMessage } from "../../../app/features/auth/authSlice";

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
        <div className="form_control">
          <Field
            type="email"
            name="email"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="email">
            Email
          </label>
        </div>
        <ErrorMessage name="email" component="div" className="error" />
        <div className="form_control">
          <Field
            type="password"
            name="password"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="password">
            password
          </label>
        </div>
        <ErrorMessage name="password" component="div" className="error" />
        <span className="error">{formError}</span>
        <button type="submit" className="btn">
          Log In
        </button>
        <Link
          onClick={() => dispatch(resetErrorAndMessage())}
          to="/forgot-password"
        >
          Forgot password?
        </Link>
        <Link onClick={() => dispatch(resetErrorAndMessage())} to="/signup">
          Don't have an account?
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
