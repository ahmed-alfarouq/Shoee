import type { ComponentProps, ReactNode, Ref } from "react";

/**
 * Represents the three possible states of a checkbox:
 *
 * - `true`  → checked
 * - `false` → unchecked
 * - `"indeterminate"` → partially checked (used when some child items are selected)
 */
export type CheckedState = boolean | "indeterminate";

export interface CheckboxContextProps {
  /**
   * REQUIRED: The current state of the checkbox
   */
  checked: CheckedState;

  /**
   * REQUIRED: Function to update the checkbox state
   */
  setChecked: (v: CheckedState) => void;

  /**
   * OPTIOANL: flag to disable the checkbox
   */
  disabled?: boolean;
}

export interface CheckboxProviderProps {
  /**
   * OPTIONAL: if it has value, this will be a controlled component
   */
  checked?: CheckedState;

  /**
   * OPTIONAL: if it has value, this will be a controlled component
   */
  defaultChecked?: CheckedState;

  /**
   * OPTIONAL: flag to disable the checkbox
   */
  disabled?: boolean;

  /**
   * OPTIONAL: Callback to update the checkbox state
   */
  onCheckedChange?: (v: CheckedState) => void;

  /**
   * REQIORED: Checkbox context (Trigger, Indicator, ...etc)
   */
  children: ReactNode;
}

export interface CheckboxTriggerProps extends ComponentProps<"button"> {
  /**
   * OPTIONAL: Used to control the trigger button
   */
  ref?: Ref<HTMLButtonElement>;
}

export interface CheckboxIndicatorProps extends ComponentProps<"span"> {
  /**
   * OPTIONAL: Used to control the indicator
   */
  ref?: Ref<HTMLButtonElement>;
}

export interface CheckboxBubbleInputProps {
  /**
   * REQUIRED: The name of the form fiel, this allows the checkbox value
   * to be included in native form submissions.
   */
  name: string;

  /**
   * REQUIRED: The value submitted when the checkbox is checked
   */
  value: string;
}

export interface CheckboxProps
  extends CheckboxProviderProps,
    Omit<CheckboxTriggerProps, "defaultChecked" | "children"> {
  /**
   * OPTIONAL: Children can be passed as a checkbox label
   */
  label?: ReactNode;

  /**
   * REQUIRED: The value submitted when the checkbox is checked
   */
  name: string;

  /**
   * REQUIRED: The value submitted when the checkbox is checked
   */
  value: string;
}
