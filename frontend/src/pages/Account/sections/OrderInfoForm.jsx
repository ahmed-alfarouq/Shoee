import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import { updateBillingDetails } from "../../../app/features/user/userAPI";
import { clearAll } from "../../../app/features/main/mainSlice";

import FormInput from "../../../components/FormInput";
import FloatingAlert from "../../../components/FloatingAlert";
import FormSelect from "../../../components/FormSelect";

import customerInfoSchema from "../../../schema/customerInfo";

const OrderInfoForm = () => {
  const billingDetails = useSelector((state) => state.user.billingDetails);
  const dispatch = useDispatch();

  const error = useSelector((state) => state.main.authError);
  const message = useSelector((state) => state.main.message);

  const initialValues = billingDetails || {
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

  const submit = (values) => {
    dispatch(updateBillingDetails(values));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={customerInfoSchema}
      onSubmit={submit}
    >
      <Form className="billing-form form">
        <FormInput label="First Name" name="first_name" />
        <FormInput label="Last Name" name="last_name" />
        <FormSelect label="Select Country" name="country" />
        <FormInput label="Town / City" name="city" />
        <FormInput label="State" name="state" />
        <FormInput label="Street Name" name="street_name" />
        <FormInput label="Zip Code" name="zip_code" />
        <FormInput label="Apartment (optional)" name="apartment" />
        <FormInput label="Phone Number" name="phone_number" />

        <span className="error">{error}</span>

        <FloatingAlert
          message={message}
          seconds={5}
          callback={() => dispatch(clearAll())}
        />

        <button type="submit" className="btn">
          Save Billing Details
        </button>
      </Form>
    </Formik>
  );
};

export default OrderInfoForm;
