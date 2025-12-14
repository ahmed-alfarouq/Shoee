import * as Yup from "yup";

const billingDetailsSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  country: Yup.string().required("Country is required!"),
  city: Yup.string().required("City is required!"),
  state: Yup.string().required("State is required!"),
  streetName: Yup.string().required("Street name is required!"),
  apartment: Yup.string().default(""),
  zipCode: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, "Zip code is not valid!")
    .required("ZIP Code is required!"),
  phoneNumber: Yup.string()
    .required("Phone Number is required!")
    .matches(/^\+?[1-9]\d{1,3}(\s)?\d{1,14}$/, "Phone number is not valid!"),
});

export type BillingDetailsSchema = Yup.InferType<typeof billingDetailsSchema>;

export default billingDetailsSchema;
