import { Link } from "react-router-dom";

// Forms
import { Formik, Form } from "formik";

// Redux
import { useDispatch } from "react-redux";
import { clearAll } from "../../../app/features/main/mainSlice";

// Components
import FormInput from "@/components/FormInput";

import { registerSchema } from "@/schema/auth";


let initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignupForm = ({ submit, formError }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={registerSchema}
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
