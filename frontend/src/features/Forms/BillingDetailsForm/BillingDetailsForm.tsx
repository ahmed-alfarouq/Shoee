import { Formik, Form } from "formik";

import styles from "./BillingDetailsForm.module.scss";

import { Input } from "@/components/Input";

import customerInfoSchema from "@/schema/customerInfo";

import type { BillingDetailsFormProps } from "./BillingDetailsForm.types";

const initialValues = {
  first_name: "",
  last_name: "",
  country: "",
  city: "",
  state: "",
  zip_code: "",
  street_name: "",
  apartment: "",
  phone_number: "",
};

const BillingDetailsForm = ({
  id,
  onSubmit,
  className,
}: BillingDetailsFormProps) => {
  const handleSubmit = () => onSubmit?.();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={customerInfoSchema}
      onSubmit={handleSubmit}
    >
      <Form className={`${styles.customer_info_form} ${className}`} id={id}>
        <h3 className={styles.title}>Billing Details</h3>
        <Input label="First Name" name="first_name" placeholder=" " />
        <Input label="Last Name" name="last_name" placeholder=" " />
        <Input label="Town / City" name="city" placeholder=" " />
        <Input label="State" name="state" placeholder=" " />
        <Input label="Street Name" name="street_name" placeholder=" " />
        <Input label="Zip Code" name="zip_code" placeholder=" " />
        <Input label="Apartment (optional)" name="apartment" placeholder=" " />
        <Input label="Phone Number" name="phone_number" placeholder=" " />
      </Form>
    </Formik>
  );
};

export default BillingDetailsForm;
