import { Formik, Form } from "formik";

import styles from "./CouponForm.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { couponSchema } from "@/schema/coupon";

import type { CouponFormProps } from "./CouponForm.types";

const initialValues = {
  coupon: "",
};

const CouponForm = ({ onSuccess }: CouponFormProps) => {
  const onSubmit = () => {
    /**
     * TODO: check code in the backend
     */
    onSuccess(10);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={couponSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.coupon_form}>
        <Input type="text" name="coupon" placeholder=" " label="Coupon Code" />
        <Button type="submit" style={{ maxHeight: 48 }}>
          Apply Coupon
        </Button>
      </Form>
    </Formik>
  );
};

export default CouponForm;
