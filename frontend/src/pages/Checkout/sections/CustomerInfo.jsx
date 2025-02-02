import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";

const countries = [
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "USA",
  "UK",
];

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  country: Yup.string().required("Country is required!"),
  city: Yup.string().required("City is required!"),
  state: Yup.string().required("State is required!"),
  street_name: Yup.string().required("Street name is required!"),
  apartment: Yup.string(),
  zip_code: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Zip code is not valid!")
    .required("ZIP Code is required!"),
  phone_number: Yup.string()
    .required("Phone Number is required!")
    .matches(/^\+?[1-9]\d{1,3}(\s)?\d{1,14}$/, "Phone number is not valid!"),
  notes: Yup.string(),
});

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
      validationSchema={validationSchema}
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

          <Field as="select" name="country">
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Field>
          <ErrorMessage name="country" component="div" className="error" />

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
