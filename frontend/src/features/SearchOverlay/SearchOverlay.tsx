import debounce from "lodash/debounce";
import { Link } from "react-router-dom";
import { Activity, useState, type ChangeEventHandler } from "react";

import styles from "./SearchOverlay.module.scss";

import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { SearchInput } from "@/components/SearchInput";

import { BiSearch } from "react-icons/bi";

import { useProducts } from "@/query/products/useProducts";

import type { Product } from "@/types/index.types";

const SearchOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = debounce(
    (e) => setSearchValue(e.target.value),
    300
  );

  const switchSearchBox = () => setIsOpen((prev) => !prev);

  const { data, isLoading, error } = useProducts({ s: searchValue });

  const products = searchValue.length ? data?.pages[0].products : [];

  const renderItem = (item: unknown) => {
    const product = item as Product;
    return (
      <Link to={`/products/${product.id}`} onClick={switchSearchBox}>
        {product.title}
      </Link>
    );
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={switchSearchBox}
        className={styles.toggler}
        aria-label="Open search overlay"
      >
        <BiSearch aria-hidden="true" />
      </Button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <div
          className={styles.search_box}
          onClick={switchSearchBox}
          role="dialog"
          aria-modal="true"
        >
          <section
            className={styles.search_form}
            onClick={(e) => e.stopPropagation()}
          >
            <SearchInput
              hiddenLabel={true}
              name="search-products"
              placeholder="Search..."
              style={{
                borderBottomRightRadius:
                  searchValue || isLoading || !products?.length ? 0 : 3,
                borderBottomLeftRadius:
                  searchValue || isLoading || !products?.length ? 0 : 3,
              }}
              onChange={handleInputChange}
            />
            <Dropdown
              list={products}
              isLoading={isLoading}
              error={error?.message}
              renderItem={renderItem}
            />
          </section>
        </div>
      </Activity>
    </>
  );
};

export default SearchOverlay;
