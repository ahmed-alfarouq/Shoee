import { Formik, Form, type FormikValues } from "formik";

import styles from "./BillingDetailsForm.module.scss";

import { Input } from "@/components/Input";

import customerInfoSchema from "@/schema/customerInfo";

import type { BillingDetailsFormProps } from "./BillingDetailsForm.types";

const initialValues = {
  firstName: "",
  lastName: "",
  country: "",
  city: "",
  state: "",
  zipCode: "",
  streetName: "",
  apartment: "",
  phoneNumber: "",
};

const BillingDetailsForm = ({
  id,
  onSubmit,
  className,
}: BillingDetailsFormProps) => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    onSubmit?.(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={customerInfoSchema}
      onSubmit={handleSubmit}
    >
      <Form className={`${styles.customer_info_form} ${className}`} id={id}>
        <h3 className={styles.title}>Billing Details</h3>
        <Input label="First Name" name="firstName" placeholder=" " />
        <Input label="Last Name" name="lastName" placeholder=" " />
        <Input label="Town / City" name="city" placeholder=" " />
        <Input label="State" name="state" placeholder=" " />
        <Input label="Street Name" name="streetName" placeholder=" " />
        <Input label="Zip Code" name="zipCode" placeholder=" " />
        <Input label="Apartment (optional)" name="apartment" placeholder=" " />
        <Input label="Phone Number" name="phoneNumber" placeholder=" " />
      </Form>
    </Formik>
  );
};

export default BillingDetailsForm;
