import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { Activity, useState, type ChangeEventHandler } from "react";

import styles from "./SearchOverlay.module.scss";

import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { SearchInput } from "@/components/SearchInput";

import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import { useProducts } from "@/query/products/useProducts";

import type { ProductProps } from "@/types/index.types";

const SearchOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = debounce(
    (e) => setSearchValue(e.target.value),
    300
  );

  const switchSearchBox = () => setIsOpen((prev) => !prev);

  const { data, isLoading, error } = useProducts({ s: searchValue });

  const products = searchValue && data?.pages[0].products;

  const renderItem = (item: unknown) => {
    const product = item as ProductProps;
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
        <BiSearch />
      </Button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <div
          className={styles.search_box}
          onClick={switchSearchBox}
          role="dialog"
          aria-modal="true"
        >
          <Button
            variant="ghost"
            size="icon"
            className={styles.close}
            onClick={switchSearchBox}
            aria-label="Close search overlay"
          >
            <IoMdClose />
          </Button>
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
                  searchValue || isLoading || !products.length ? 0 : 3,
                borderBottomLeftRadius:
                  searchValue || isLoading || !products.length ? 0 : 3,
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
