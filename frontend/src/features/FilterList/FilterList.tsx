import styles from "./FilterList.module.scss";

import { Checkbox } from "@/components/Checkbox";

import type { FilterListProps } from "./FilterList.types";

const FilterList = ({ title, options, children }: FilterListProps) => {
  return (
    <div>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children ? (
        children
      ) : (
        <ul className={styles.list}>
          {options?.map((opt, i) => (
            <li key={`${opt.key} ${i}`} className={styles.list_item}>
              <Checkbox name={opt.key} value={opt.value}>
                {opt.icon && <opt.icon aria-hidden="true" />}
                {opt.label}
              </Checkbox>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterList;
