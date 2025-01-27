import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

let initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};
const validate = Yup.object({
  username: Yup.string().required("User name Is Required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().min(8).required("Password is required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password doesn't match!")
    .required("Confirm password is required!"),
});

const SignupForm = ({ submit, formError }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validate}
    >
      <Form name="log_in" className="log_in_form form">
        <h2 className="title">signup</h2>
        <div className="form_control">
          <Field
            type="text"
            name="username"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="username">
            Username
          </label>
        </div>
        <ErrorMessage name="username" component="div" className="error" />
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
        <div className="form_control">
          <Field
            type="password"
            name="confirm_password"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="confirm_password">
            Confirm Password
          </label>
        </div>
        <ErrorMessage
          name="confirm_password"
          component="div"
          className="error"
        />
        <span className="error">{formError}</span>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <Link to="/login">Already have an account!</Link>
      </Form>
    </Formik>
  );
};

export default SignupForm;
