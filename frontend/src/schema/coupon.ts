import * as Yup from "yup";

export const couponSchema = Yup.object({
  coupon: Yup.string().required("Code is required!"),
});
