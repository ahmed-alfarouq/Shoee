import type { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
  /**
   * OPTIONAL: The displayed lable
   */
  label?: string;

  /**
   * OPTIONAL: Extra className for the div container
   */
  className?: string;
}
