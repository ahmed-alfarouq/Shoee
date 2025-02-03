import React, { useState, forwardRef, useRef } from "react";
import { Link } from "react-router-dom";

const SearchForm = forwardRef(({ options, close }, ref) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const optionsRef = useRef([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      setFilteredOptions(
        options.filter((option) =>
          option.title.toLowerCase().startsWith(value.toLowerCase())
        )
      );
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const handleKeyDown = (e) => {
    const focusedOptionIndex = optionsRef.current.findIndex(
      (option) => option === document.activeElement
    );
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = focusedOptionIndex + 1;
      if (nextIndex < filteredOptions.length) {
        optionsRef.current[nextIndex].focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = focusedOptionIndex - 1;
      if (prevIndex >= 0) {
        optionsRef.current[prevIndex].focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedOptionIndex >= 0) {
        optionsRef.current[focusedOptionIndex].children[0].click();
      }
    }
  };

  const handleOptionClick = () => {
    setInputValue("");
    setShowOptions(false);
    setFilteredOptions([]);
  };

  return (
    <form className="search-form" name="search-form" ref={ref}>
      <label className="sr-only" htmlFor="search-product" aria-label="Search">
        Search
      </label>
      <input
        type="text"
        name="search-product"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(true)}
        placeholder="Search..."
        style={{
          borderBottomRightRadius: showOptions ? 0 : 3,
          borderBottomLeftRadius: showOptions ? 0 : 3,
        }}
        aria-controls="dropdown"
        onKeyDown={handleKeyDown}
      />
      {showOptions && (
        <ul
          className="dropdown"
          role="listbox"
          aria-live="polite"
          aria-labelledby="search-product"
        >
          {filteredOptions.length ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={handleOptionClick}
                role="option"
                aria-selected={inputValue === option.title ? "true" : "false"}
                ref={(el) => (optionsRef.current[index] = el)}
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                <Link
                  to={`/products/${option.id}`}
                  aria-label={`Go to product: ${option.title}`}
                  onClick={close}
                >
                  {option.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="dropdown-item no-match" aria-live="assertive">
              No matches found
            </li>
          )}
        </ul>
      )}
    </form>
  );
});

export default SearchForm;
