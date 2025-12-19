import { createContext, useContext } from "react";

import type { CheckboxContextProps } from "../Checkbox.types";

export const CheckboxContext = createContext<CheckboxContextProps | null>(null);

export const useCheckbox = () => {
  const ctx = useContext(CheckboxContext);

  if (!ctx)
    throw new Error("Checkbox components must be inside <CheckboxProvider>");

  return ctx;
};
