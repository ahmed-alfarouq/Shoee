import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";

let initialValues = { email: "" };

const validate = Yup.object({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
});

const ForgotPasswordForm = ({ submit, formError, disabled = false }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validate}
    >
      <Form name="forgot_password" className="forgot_password_form form">
        <FormInput label="Email" name="email" type="email" />

        <span className="error">{formError}</span>
        <button type="submit" className="btn" disabled={disabled}>
          Reset Password
        </button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
