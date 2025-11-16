import styles from "./SearchInput.module.scss";

import type { SearchInputProps } from "./SearchInput.types";

const SearchInput = ({
  name,
  hiddenLabel = false,
  label = "Search",
  ...props
}: SearchInputProps) => {
  return (
    <div className={styles.form_control}>
      <label className={hiddenLabel ? "sr-only" : styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        className={styles.search_input}
        {...props}
      />
    </div>
  );
};

export default SearchInput;
