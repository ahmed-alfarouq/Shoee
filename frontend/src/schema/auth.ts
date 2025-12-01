import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export type LoginSchema = Yup.InferType<typeof loginSchema>;

export const registerSchema = Yup.object({
  username: Yup.string().required("User name Is Required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().min(8).required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("Confirm password is required!"),
});

export type RegisterSchema = Yup.InferType<typeof registerSchema>;

export const updatePasswordSchema = Yup.object({
  oldPassword: Yup.string().required("Old Password is required!"),
  newPassword: Yup.string()
    .min(8, "Must be at least 8 characters!")
    .required("New Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match!")
    .required("Confirm Password is required!"),
});

export type UpdatePasswordSchema = Yup.InferType<typeof updatePasswordSchema>;

export const resetPasswordSchema = Yup.object({
  password: Yup.string().min(8).required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match!")
    .required("Confirm password is required!"),
});

export type ResetPasswordSchema = Yup.InferType<typeof resetPasswordSchema>;

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
});

export type ForgotPasswordSchema = Yup.InferType<typeof forgotPasswordSchema>;
