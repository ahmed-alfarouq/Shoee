import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const countries = [
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "USA",
  "UK",
];

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  country: Yup.string().required("Country is required!"),
  town: Yup.string().required("Town is required!"),
  state: Yup.string().required("State is required!"),
  zipCode: Yup.string().required("ZIP Code is required!"),
  street: Yup.string().required("Street name is required!"),
  apartment: Yup.string(),
  notes: Yup.string(),
});

const CustomerInfo = () => {
  const userEmail = useSelector((state) => state.auth.user.email);

  return (
    <Formik
      initialValues={{
        email: userEmail || "",
        firstName: "",
        lastName: "",
        country: "",
        town: "",
        state: "",
        zipCode: "",
        street: "",
        apartment: "",
        notes: "",
      }}
      validationSchema={validationSchema}
    >
      <Form className="customer-info-form from">
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

          <Field type="text" name="firstName" placeholder="First Name" />
          <ErrorMessage name="firstName" component="div" className="error" />

          <Field type="text" name="lastName" placeholder="Last Name" />
          <ErrorMessage name="lastName" component="div" className="error" />

          <Field as="select" name="country">
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Field>
          <ErrorMessage name="country" component="div" className="error" />

          <Field type="text" name="town" placeholder="Town / City" />
          <ErrorMessage name="town" component="div" className="error" />

          <Field type="text" name="state" placeholder="State" />
          <ErrorMessage name="state" component="div" className="error" />

          <Field type="text" name="zipCode" placeholder="ZIP Code" />
          <ErrorMessage name="zipCode" component="div" className="error" />

          <Field type="text" name="street" placeholder="Street Name" />
          <ErrorMessage name="street" component="div" className="error" />

          <Field
            type="text"
            name="apartment"
            placeholder="Apartment (Optional)"
          />
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
