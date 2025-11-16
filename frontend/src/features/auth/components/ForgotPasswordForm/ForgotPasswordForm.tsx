import { Formik, Form } from "formik";

import { FormInput } from "../FormInput";

import styles from "./ForgotPassowrdForm.module.scss";

import { forgotFormSchema } from "@/schema/auth";

import type { ForgotFormPasswordFormProps } from "./ForgotPasswordForm.types";

const ForgotPasswordForm = ({
  submit,
  formError,
  disabled = false,
}: ForgotFormPasswordFormProps) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={submit}
      validationSchema={forgotFormSchema}
    >
      <Form name="forgot_password" className={styles.form}>
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
