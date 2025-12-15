import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createCouponSlice } from "./coupon";
import { createPaymentSlice } from "./payment";
import { createCustomerSlice } from "./customer";

import type { CheckoutStore } from "./checkoutStore.types";

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (...s) => ({
      ...createCouponSlice(...s),
      ...createPaymentSlice(...s),
      ...createCustomerSlice(...s),
    }),
    { name: "checkout-store" }
  )
);

export const useCheckoutActions = (): Pick<
  CheckoutStore,
  | "setAddress"
  | "setCustomer"
  | "applyCoupon"
  | "removeCoupon"
  | "resetCustomer"
  | "setPaymentMethod"
> => {
  return useCheckoutStore((state) => ({
    setAddress: state.setAddress,
    setCustomer: state.setCustomer,
    applyCoupon: state.applyCoupon,
    removeCoupon: state.removeCoupon,
    resetCustomer: state.resetCustomer,
    setPaymentMethod: state.setPaymentMethod,
  }));
};
