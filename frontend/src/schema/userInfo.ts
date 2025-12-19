import * as Yup from "yup";

export const userInfoSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required("Username is required")
    .min(3, "At least 3 characters"),
});

export type UserInfoSchema = Yup.InferType<typeof userInfoSchema>;
