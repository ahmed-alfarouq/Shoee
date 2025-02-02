import { Link } from "react-router-dom";

// Forms
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Redux
import { useDispatch } from "react-redux";
import { clearAll } from "../../../app/features/main/mainSlice";

// Components
import FormInput from "../../../components/FormInput";


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
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validate}
    >
      <Form name="log_in" className="log_in_form form">
        <h2 className="title">signup</h2>
        <FormInput label="Username" name="username" type="text" />
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Password" name="password" type="password" />
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
        />
        <span className="error">{formError}</span>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <Link to="/login" onClick={() => dispatch(clearAll())}>
          Already have an account!
        </Link>
      </Form>
    </Formik>
  );
};

export default SignupForm;
