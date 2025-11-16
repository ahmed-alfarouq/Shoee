import type { ComponentProps } from "react";

export interface SearchInputProps extends ComponentProps<"input"> {
  /**
   * The input name attribute.
   */
  name: string;

  /**
   * Text displayed inside the <label>.
   * @default "Search"
   */
  label?: string;

  /**
   * Whether the visible label should be hidden
   * (still available for screen readers).
   * @default false
   */
  hiddenLabel?: boolean;

  /**
   * The input placeholder text.
   * @default "Search..."
   */
  placeholder?: string;
}
