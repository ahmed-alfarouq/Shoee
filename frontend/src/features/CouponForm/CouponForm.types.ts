export interface CouponFormProps {
  /**
   * REQUIRED: A callback fires when code is valid
   * @param discount
   * */
  onSuccess: (discount: number) => void;
}
