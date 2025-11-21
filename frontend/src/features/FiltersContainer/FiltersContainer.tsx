import { useState, type ChangeEventHandler } from "react";

import styles from "./FiltersContainer.module.scss";

import { Filters } from "@features/Filters";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";

import { IoMenuSharp } from "react-icons/io5";

import { sortOptions } from "./constants";

const FiltersContainer = ({
  sortType,
  setSortType,
}: {
  sortType: string;
  setSortType: ChangeEventHandler<HTMLSelectElement>;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFilters = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${styles.filters_container}`}>
      <Filters hidden={isOpen} onClose={toggleFilters} />
      <Button onClick={toggleFilters}>
        <IoMenuSharp />
        Filters
      </Button>
      <Select
        value={sortType}
        options={sortOptions}
        onSelect={setSortType}
        style={{
          marginLeft: "auto",
        }}
      />
    </div>
  );
};

export default FiltersContainer;
