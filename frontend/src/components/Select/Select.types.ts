import type { ChangeEventHandler, ComponentProps } from "react";

type Option = {
  /**
   * REQUIRED: The visible label shown to the user
   */
  text: string;

  /**
   * REQUIRED: The value associated with this option
   * This is the value returned when the option is selected
   */
  value: string;
};

export interface SelectProps extends ComponentProps<"select"> {
  /**
   * REQUIRED: The list of options to display in the select
   * Each option should have a text (label) and value
   */
  options: Option[];

  /**
   * REQUIRED: Called when the user selects an option
   * @param e The change event from the select element
   */
  onSelect: ChangeEventHandler<HTMLSelectElement>;
}
