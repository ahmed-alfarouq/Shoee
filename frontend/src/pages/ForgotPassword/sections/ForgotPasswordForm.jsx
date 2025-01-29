import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

let initialValues = {
  email: "",
};
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

        <span className="error">{formError}</span>
        <button type="submit" className="btn" disabled={disabled}>
          Reset Password
        </button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
