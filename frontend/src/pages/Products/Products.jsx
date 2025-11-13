import { useState } from "react";

// Components
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import SortList from "../../components/SortList";

// Assets
import { IoMenuSharp } from "react-icons/io5";

// Utils
import { useProducts } from "../../query/products/useProducts";
import useFilterOptions from "hooks/useFilterOptions";

import { categories } from "constants";
import sortProducts from "utils/sortProducts";
import ProductsSkeleton from "components/ProductsSkeleton";

const Products = () => {
  const { filters, updateFilter, clearFilters } = useFilterOptions();
  const { data, isLoading, hasNextPage, fetchNextPage } = useProducts(filters);

  const [sortType, setSortType] = useState("menu_order");
  const [isFilterHidden, setIsFilterHidden] = useState(true);

  const products = data?.pages.flatMap((p) => p.products);

  const metadata = data?.pages[data.pages.length - 1];

  const changeSortType = (e) => setSortType(e.target.value);

  const filterHandler = (type, value) => {
    updateFilter(type, value);
    setIsFilterHidden(true);
  };

  const sortedProducts = sortProducts(products, sortType);

  return (
    <main className="products">
      <div className="container">
        <div className="filtering-container">
          <Filter
            hidden={isFilterHidden}
            categories={categories}
            close={() => setIsFilterHidden(true)}
            filter={filterHandler}
          />
          <button
            type="button"
            className="btn filter-btn"
            onClick={() => setIsFilterHidden(false)}
          >
            <IoMenuSharp />
            Filter
          </button>
          <p className="result-count">
            Showing {metadata?.count} of{" "}
            {metadata?.totalCount} results
          </p>
          {(filters || sortType !== "menu_order") && (
            <button
              type="button"
              className="btn clear-filters-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
          <SortList sortType={sortType} sort={changeSortType} />
        </div>
        <section className="products-container">
          {isLoading ? <ProductsSkeleton count={9} /> : sortedProducts.map((product) => (
            <Card key={product.id} item={product} />
          ))}
        </section>
        {hasNextPage ? (
          <button type="button" className="btn load-more" onClick={fetchNextPage}>
            Load More
          </button>
        ) : (
          <p className="no-more-products">No more products to show.</p>
        )}
      </div>
    </main>
  );
};

export default Products;
