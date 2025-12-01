import type { CheckoutAction, CheckoutStateProps } from "./index.types";

export const checkoutReducer = (
  state: CheckoutStateProps,
  action: CheckoutAction
): CheckoutStateProps => {
  switch (action.type) {
    case "SET_BILLING_DETAILS":
      return { ...state, billingDetails: action.payload };

    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };

    case "SET_TOTAL": {
      const { total, discount } = action.payload;
      if (discount) return { ...state, total, discount };
      return { ...state, total };
    }

    default:
      return state;
  }
};
