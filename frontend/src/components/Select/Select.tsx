import styles from "./Select.module.scss";

import { Button } from "@components/Button";

import type { SelectProps } from "./Select.types";

const SortList = ({ options, onSelect, className, ...props }: SelectProps) => {
  return (
    <Button asChild>
      <select
        className={`${styles.select} ${className}`}
        onChange={onSelect}
        {...props}
      >
        {options.map((o, i) => (
          <option key={`${o.text} ${i}`} value={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </Button>
  );
};

export default SortList;
