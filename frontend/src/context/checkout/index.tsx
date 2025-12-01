import { checkoutReducer } from "./reducer";
import { useReducer, type ReactNode } from "react";

import { CheckoutDipatchContext, CheckoutStateContext } from "./context";

const initialState = {
  billingDetails: {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    streetName: "",
    apartment: "",
    phoneNumber: "",
  },
};

const CheckoutProvider = ({
  children,
  total,
}: {
  children: ReactNode;
  total: number;
}) => {
  const [state, dispatch] = useReducer(checkoutReducer, {
    ...initialState,
    total,
  });

  return (
    <CheckoutStateContext value={state}>
      <CheckoutDipatchContext value={dispatch}>
        {children}
      </CheckoutDipatchContext>
    </CheckoutStateContext>
  );
};

export default CheckoutProvider;
