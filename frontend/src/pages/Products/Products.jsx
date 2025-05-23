import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "lodash";

// Components
import Card from "../../components/Card";
import Filter from "../../components/Filter";

// Assets
import { IoMenuSharp } from "react-icons/io5";

// Utils
import sortProducts from "../../utils/sortProducts";
import filterProductsByCategory from "../../utils/filterProductsByCategory";
import filterProductsByRating from "../../utils/filterProductsByRating";
import filterProductsByPrice from "../../utils/filterProductsByPrice";

const CATEGORIES = ["mens-shirts", "mens-shoes", "mens-watches"];

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const [filter, setFilter] = useState({ type: null, value: null });
  const [sortType, setSortType] = useState("menu_order");
  const [shownProducts, setShownProducts] = useState(10);
  const [isFilterHidden, setIsFilterHidden] = useState(true);

  const filteredProducts = useMemo(() => {
    if (!filter.type) return products;
    switch (filter.type) {
      case "category":
        return filterProductsByCategory(products, filter.value);
      case "price":
        return filterProductsByPrice(products, filter.value);
      case "rating":
        return filterProductsByRating(products, filter.value);
      default:
        return products;
    }
  }, [products, filter]);

  const sortedProducts = useMemo(() => {
    return sortProducts(filteredProducts, sortType);
  }, [filteredProducts, sortType]);

  const loadMore = () => {
    setShownProducts((prev) => Math.min(prev + 5, filteredProducts.length));
  };

  const applyFilter = debounce((type, value) => {
    setFilter({ type, value });
  }, 300);

  const filterHandler = (type, value) => {
    applyFilter(type, value);
    setIsFilterHidden(true);
  };

  const clearFilters = () => {
    setFilter({ type: null, value: null });
    setSortType("menu_order");
    setShownProducts(10);
  };

  useEffect(() => {
    shownProducts === 0
      ? setShownProducts(Math.min(10, sortedProducts.length))
      : setShownProducts(Math.min(shownProducts, sortedProducts.length));
  }, [sortedProducts, shownProducts]);

  return (
    <main className="products">
      <div className="container">
        <div className="filtering-container">
          <Filter
            hidden={isFilterHidden}
            categories={CATEGORIES}
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
            Showing {filteredProducts.length ? 1 : 0}–{shownProducts} of{" "}
            {filteredProducts.length} results
          </p>
          {(filter.type || sortType !== "menu_order") && (
            <button
              type="button"
              className="btn clear-filters-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
          <select
            className="shop-order"
            name="orderby"
            onChange={(e) => setSortType(e.target.value)}
            aria-label="Shop order"
            value={sortType}
          >
            <option value="menu_order">Default sorting</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
        <section className="products-container">
          {sortedProducts.slice(0, shownProducts).map((product) => (
            <Card key={product.id} item={product} />
          ))}
        </section>
        {shownProducts >= filteredProducts.length ? (
          <p className="no-more-products">No more products to show.</p>
        ) : (
          <button type="button" className="btn load-more" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </main>
  );
};

export default Products;
