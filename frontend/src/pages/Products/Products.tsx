import { useMemo, useState, type ChangeEventHandler } from "react";

import styles from "./Products.module.scss";

import { LoadMoreButton } from "@/features/LoadMoreButton";
import { FiltersContainer } from "@/features/FiltersContainer";
import { ProductsContainer } from "@/features/ProductsContainer";

import { useProducts } from "@/query/products/useProducts";

import useFilterOptions from "@/hooks/useFilters";

import sortProducts from "@/utils/sortProducts";

const Products = () => {
  const { filters } = useFilterOptions();
  const [sortType, setSortType] = useState("menu_order");

  const changeSortType: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setSortType(e.target.value);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useProducts(filters);

  const products = useMemo(
    () => data?.pages.flatMap((p) => p.products) ?? [],
    [data]
  );

  const totalReturnedCount = useMemo(
    () => data?.pages.reduce((acc, p) => acc + p.count, 0),
    [data?.pages]
  );

  const totalCount = data?.pages[0]?.totalCount ?? 0;

  const sortedProducts = useMemo(
    () => products && sortProducts(products, sortType),
    [products, sortType]
  );

  return (
    <section className={styles.products}>
      <div className="container">
        <FiltersContainer sortType={sortType} setSortType={changeSortType} />
        <p className={styles.result_count}>
          Showing {totalReturnedCount} of {totalCount} results
        </p>
        <ProductsContainer
          skeletonCount={9}
          isLoading={isLoading}
          products={sortedProducts}
        />
        <LoadMoreButton
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </section>
  );
};

export default Products;
