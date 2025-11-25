import * as Yup from "yup";

const customerInfoSchema = Yup.object({
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
});

export default customerInfoSchema;
