import { useSearchParams } from "react-router-dom";

import styles from "./FilterList.module.scss";

import { Checkbox } from "@/components/Checkbox";

import type { FilterListProps } from "./FilterList.types";

const FilterList = ({ title, options, children }: FilterListProps) => {
  const [searchParams] = useSearchParams();
  const checkedFilters = searchParams.getAll(options?.[0]?.key ?? "");

  return (
    <div>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children ? (
        children
      ) : (
        <ul className={styles.list}>
          {options?.map((opt, i) => (
            <li key={`${opt.key} ${i}`} className={styles.list_item}>
              <Checkbox
                name={opt.key}
                value={opt.value}
                defaultChecked={checkedFilters.includes(opt.value)}
                key={`${opt.key}-${checkedFilters.includes(opt.value)}`}
              >
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
