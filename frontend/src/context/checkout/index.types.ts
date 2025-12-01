import type { BillingDetails } from "@/types/index.types";

export type PaymentMethod = "cash" | "stripe";

export type CheckoutStateProps = {
  total: number;
  discount?: number;
  paymentMethod?: PaymentMethod;
  billingDetails: BillingDetails;
};

export type CheckoutAction =
  | { type: "SET_PAYMENT_METHOD"; payload: PaymentMethod }
  | { type: "SET_BILLING_DETAILS"; payload: BillingDetails }
  | { type: "SET_TOTAL"; payload: { total: number; discount?: number } };
