import type { Address } from "@/types/index.types";

type ErrorSuccessMessage = Promise<[Error | null, { msg: string } | null]>;

export interface CustomerSlice {
  address: Address | null;
  setAddress(address: Address): void;
}

export type PaymentMethod = "cash" | "stripe" | null;

export interface PaymentSlice {
  paymentMethod: PaymentMethod;

  setPaymentMethod: (method: PaymentMethod) => void;
}

export interface CouponSlice {
  couponCode: string | null;
  discount: number | null;

  applyCoupon: (couponCode: string) => ErrorSuccessMessage;
  removeCoupon: () => void;
}

export type CheckoutStore = PaymentSlice & CouponSlice & CustomerSlice;

export type CheckoutSet = (
  nextStateOrUpdater: CheckoutStore | Partial<CheckoutStore>,
  shouldReplace?: false
) => void;

// Actions
export interface ApplyCouponAction {
  coupon: string;
  set: CheckoutSet;
}
