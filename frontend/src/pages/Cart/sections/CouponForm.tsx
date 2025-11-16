import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  couponCode: "",
};

const validationSchema = Yup.object({
  couponCode: Yup.string().required("Coupon code is required!"),
});

const CouponForm = ({ submit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      <Form className="coupon_form form">
        <div className="form_control">
          <Field
            type="text"
            name="couponCode"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="couponCode">
            Coupon Code
          </label>
        </div>
        <button type="submit" className="btn">
          Apply Coupon
        </button>
        <ErrorMessage name="couponCode" component="div" className="error" />
      </Form>
    </Formik>
  );
};

export default CouponForm;
