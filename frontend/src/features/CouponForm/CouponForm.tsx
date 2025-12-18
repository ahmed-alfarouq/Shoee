import { Formik, Form } from "formik";
import { useCallback, useState, useTransition } from "react";

import styles from "./CouponForm.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "@features/Auth/FormMessage";

import { useCheckoutActions, useCheckoutState } from "@/stores/checkout";

import { couponSchema, type CouponSchema } from "@/schema/coupon";

import type { CouponFormProps } from "./CouponForm.types";

import type { FormMessageProps } from "@features/Auth/FormMessage/FormMessage.types";

const CouponForm = ({ className }: CouponFormProps) => {
  const [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    message: string;
  }>({ type: "error", message: "" });

  const { couponCode } = useCheckoutState();
  const { applyCoupon } = useCheckoutActions();

  const onSubmit = useCallback(
    ({ coupon }: CouponSchema) => {
      startTransition(async () => {
        const [err, data] = await applyCoupon(coupon);

        if (err) {
          setMessage({ type: "error", message: err.message });
          return;
        }
        setMessage({
          type: "success",
          message: data?.msg || "Coupon applied successfylly.",
        });
      });
    },
    [applyCoupon]
  );

  const initialValues = {
    coupon: couponCode || "",
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={couponSchema}
    >
      <Form className={`${styles.coupon_form} ${className}`}>
        <Input
          type="text"
          name="coupon"
          placeholder=" "
          label="Coupon Code"
          disabled={isPending}
          className={styles.input}
        />
        <Button type="submit" disabled={isPending} className={styles.btn}>
          {isPending ? "Applying..." : "Apply Coupon"}
        </Button>
        <FormMessage
          type={message.type}
          message={message.message}
          className={styles.error}
        />
      </Form>
    </Formik>
  );
};

export default CouponForm;
