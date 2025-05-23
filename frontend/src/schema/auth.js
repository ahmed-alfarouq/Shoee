import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export const registerSchema = Yup.object({
  username: Yup.string().required("User name Is Required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().min(8).required("Password is required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password doesn't match!")
    .required("Confirm password is required!"),
});
