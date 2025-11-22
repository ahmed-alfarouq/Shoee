import { useState, type FormEventHandler } from "react";

import styles from "./Filters.module.scss";

import { Button } from "@/components/Button";
import { FilterList } from "@features/FilterList";
import { PriceSlider } from "@features/PriceSlider";

import { IoClose } from "react-icons/io5";

import { categoriesFilter, ratingsOptions } from "./Filters.constants";

import useFilters from "@/hooks/useFilters";

import type { FilterProps } from "./Filters.types";

const Filters = ({ hidden, onClose }: FilterProps) => {
  const { filters, updateFilters, clearFilters } = useFilters();

  const [priceRange, setPriceRange] = useState<number[]>([
    filters.price?.[0] ?? 0,
    filters.price?.[1] ?? 10000,
  ]);

  const applyFilters: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const rating = formData.getAll("rating") as string[];
    const category = formData.getAll("category") as string[];

    const price = [priceRange[0], priceRange[1]];

    updateFilters({
      rating,
      category,
      price,
    });
  };

  const hasActiveFilters =
    filters.rating?.length ||
    filters.category?.length ||
    (filters.price && (filters.price[0] != 0 || filters.price[1] != 10000));

  return (
    <form
      className={`${styles.filter} ${hidden ? "" : styles.open}`}
      aria-hidden={hidden}
      aria-expanded={!hidden}
      onSubmit={applyFilters}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={styles.close}
        onClick={onClose}
        aria-label="Close filter menu."
      >
        <IoClose aria-hidden="true" />
      </Button>

      <FilterList title="Filter by categories" options={categoriesFilter} />
      <FilterList title="Filter by price">
        <PriceSlider
          min={0}
          max={10000}
          value={priceRange}
          onChange={setPriceRange}
        />
      </FilterList>
      <FilterList title="Filter by rating" options={ratingsOptions} />

      <div className="flex gap-1 justify-between">
        <Button type="submit" className="mt-4">
          Apply Filters
        </Button>
        {hasActiveFilters && (
          <Button type="button" className="mt-4" onClick={clearFilters}>
            Clear Filters
          </Button>
        )}
      </div>
    </form>
  );
};

export default Filters;
