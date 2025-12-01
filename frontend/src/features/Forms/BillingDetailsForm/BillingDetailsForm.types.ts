import type { FormikValues } from "formik";

export interface BillingDetailsFormProps {
  /**
   * OPTIONAL: Callback triggered when the form is submitted
   * @returns values
   */
  onSubmit?: (values: FormikValues) => void;

  /**
   * OPTIONAL: Unique identifier for the form
   * Allows triggering form submission from a button located elsewhere in the DOM
   * using the HTML `form` attribute
   */
  id?: string;

  /**
   * OPTIONAL: Class name for the form container
   */
  className?: string;
}
