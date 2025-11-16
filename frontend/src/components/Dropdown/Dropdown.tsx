import styles from "./Dropdown.module.scss";

import Spinner from "../../shared/Spinner/Spinner";

import type { DropdownProps } from "./Dropdown.types";

const Dropdown = ({
  list,
  isLoading,
  error,
  selectedValue,
  onSelect,
  renderItem,
}: DropdownProps) => {
  if (isLoading)
    return (
      <div className={styles.dropdown}>
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className={styles.dropdown}>
        <p className={`${styles.dropdown_item} ${styles.error}`}>{error}</p>
      </div>
    );

  if (!list?.length)
    return (
      <div className={styles.dropdown}>
        <p className={`${styles.dropdown_item} ${styles.no_match}`}>
          No matches found
        </p>
      </div>
    );

  return (
    <ul role="listbox" className={styles.dropdown}>
      {list.map((item, index) => (
        <li
          key={index}
          role="option"
          onClick={() => onSelect?.(item)}
          className={`${styles.dropdown_item} ${
            selectedValue === item && styles.active
          }`}
          aria-selected={selectedValue === item}
        >
          {renderItem?.(item) ?? String(item)}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
