import type { ChangeEventHandler, ComponentProps } from "react";

import type { Option } from "@components/Select/Select.types";

export interface SelectInputProps extends ComponentProps<"select"> {
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
