import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";

let initialValues = {
  password: "",
  confirm_password: "",
};

const validate = Yup.object({
  password: Yup.string().min(8).required("Password is required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password doesn't match!")
    .required("Confirm password is required!"),
});

const ResetPasswordForm = ({ submit, formError }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validate}
    >
      <Form name="reset_password" className="reset_password_form form">
        <FormInput label="Password" name="password" type="password" />
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
        />

        <span className="error">{formError}</span>
        <button type="submit" className="btn">
          Reset Password
        </button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
