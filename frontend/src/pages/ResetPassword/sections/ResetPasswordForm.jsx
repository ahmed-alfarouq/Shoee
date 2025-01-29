import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
          Reset Password
        </button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
