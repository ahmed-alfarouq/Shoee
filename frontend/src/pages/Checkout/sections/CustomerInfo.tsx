import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";

import FormInput from "../../../components/FormInput";
import FormSelect from "../../../components/FormSelect";

import customerInfoSchema from "../../../schema/customerInfo";

const CustomerInfo = () => {
  const userEmail = useSelector((state) => state.user.email);
  const billingDetails = useSelector((state) => state.user.billingDetails);

  return (
    <Formik
      initialValues={{
        email: userEmail || "",
        first_name: billingDetails.first_name || "",
        last_name: billingDetails.last_name || "",
        country: billingDetails.country || "",
        city: billingDetails.city || "",
        state: billingDetails.state || "",
        zip_code: billingDetails.zip_code || "",
        street_name: billingDetails.street_name || "",
        apartment: billingDetails.apartment || "",
        phone_number: billingDetails.phone_number || "",
        notes: "",
      }}
      validationSchema={customerInfoSchema}
    >
      <Form className="customer-info-form form">
        <section className="form-section">
          <h3 className="title">Contact Information</h3>
          <Field
            type="email"
            name="email"
            disabled
            className="disabled-field"
          />
        </section>

        <section className="form-section">
          <h3 className="title">Billing Details</h3>
          <FormInput label="First Name" name="first_name" />
          <FormInput label="Last Name" name="last_name" />
          <FormSelect label="Select Country" name="country" />
          <FormInput label="Town / City" name="city" />
          <FormInput label="State" name="state" />
          <FormInput label="Street Name" name="street_name" />
          <FormInput label="Zip Code" name="zip_code" />
          <FormInput label="Apartment (optional)" name="apartment" />
          <FormInput label="Phone Number" name="phone_number" />
        </section>
        <section className="form-section">
          <h3 className="title">Additional Information</h3>
          <Field
            as="textarea"
            name="notes"
            placeholder="Order Notes (Optional)"
          />
        </section>
      </Form>
    </Formik>
  );
};

export default CustomerInfo;
