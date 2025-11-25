import type { ChangeEventHandler } from "react";

export interface PaymentMethodProps {
  setMethod: ChangeEventHandler<HTMLInputElement>;
}

export interface TotalProps {
  /**
   * REQUIRED: Final amount after applying the coupon
   */
  total: number;

  /**
   * REQUIRED: Whether the user selected cash on delivery
   * If true, an extra fee will be added
   */
  cash: boolean;

  /**
   * OPTIONAL: Additional fee applied when cash on delivery is selected
   * @default 10
   */
  amount?: number;

  /**
   * OPTIONAL: If greater than 0, a discount message appears
   * @default 0
   */
  discount?: number;
}
