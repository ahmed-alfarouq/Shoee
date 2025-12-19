import { memo, useState, type MouseEventHandler } from "react";

import { CheckboxContext, useCheckbox } from "./context";

import styles from "./Checkbox.module.scss";

import type {
  CheckboxBubbleInputProps,
  CheckboxIndicatorProps,
  CheckboxProps,
  CheckboxProviderProps,
  CheckboxTriggerProps,
  CheckedState,
} from "./Checkbox.types";

const CheckboxProvider = ({
  checked: controlled,
  defaultChecked = false,
  disabled,
  onCheckedChange,
  children,
}: CheckboxProviderProps) => {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);

  const isControlled = controlled !== undefined;

  const value = isControlled ? controlled : uncontrolled;

  const setChecked = (v: CheckedState) => {
    if (isControlled) onCheckedChange?.(v);

    setUncontrolled(v);
  };

  return (
    <CheckboxContext.Provider value={{ checked: value, setChecked, disabled }}>
      <div className={styles.form_control}>{children}</div>
    </CheckboxContext.Provider>
  );
};

const CheckboxTrigger = ({ onClick, ref, ...props }: CheckboxTriggerProps) => {
  const { checked, setChecked, disabled } = useCheckbox();

  const onToggle: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    onClick?.(e);
    setChecked(checked === "indeterminate" ? true : !checked);
  };

  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role="checkbox"
      onClick={onToggle}
      disabled={disabled}
      className={styles.checkbox}
      aria-checked={checked === "indeterminate" ? "mixed" : checked}
    />
  );
};

const CheckboxIndicator = ({ ref, ...props }: CheckboxIndicatorProps) => {
  const { checked } = useCheckbox();

  const classNames = `
  ${styles.indicator}
  ${checked === "indeterminate" && styles.indeterminate}
  ${checked === true && styles.checked}
  `;

  return <span ref={ref} className={classNames} {...props} />;
};

const CheckboxBubbleInput = ({ name, value }: CheckboxBubbleInputProps) => {
  const { checked } = useCheckbox();
  return (
    <input
      type="checkbox"
      readOnly={true}
      name={name}
      value={value}
      tabIndex={-1}
      aria-hidden="true"
      checked={checked === true}
      style={{ display: "none" }}
    />
  );
};

const Checkbox = memo(
  ({ name, value, children, ref, ...props }: CheckboxProps) => {
    return (
      <CheckboxProvider {...props}>
        <CheckboxTrigger ref={ref}>
          <CheckboxIndicator />
          {children}
        </CheckboxTrigger>
        <CheckboxBubbleInput name={name} value={value} />
      </CheckboxProvider>
    );
  }
);

export default Checkbox;
