import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

const SearchForm = forwardRef(({ options }, ref) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  const handleOptionClick = () => {
    setInputValue("");
    setShowOptions(false);
    setFilteredOptions([]);
  };

  const handleBlur = () => {
    setTimeout(() => setShowOptions(false), 100); // Delay to allow option click
  };

  return (
    <form className="search-form" name="search-form" ref={ref}>
      <label className="sr-only" htmlFor="search-product">
        Search
      </label>
      <input
        type="text"
        name="search-product"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowOptions(true)}
        onBlur={handleBlur}
        placeholder="Search..."
        style={{
          borderBottomRightRadius: showOptions ? 0 : 3,
          borderBottomLeftRadius: showOptions ? 0 : 3,
        }}
      />
      {showOptions && (
        <ul className="dropdown">
          {filteredOptions.length ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={handleOptionClick}
              >
                <Link to={`/products/${option.id}`}>{option.title}</Link>
              </li>
            ))
          ) : (
            <li className="dropdown-item no-match">No matches found</li>
          )}
        </ul>
      )}
    </form>
  );
});

export default SearchForm;
