import React, { useRef, useState, forwardRef } from "react";

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

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowOptions(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowOptions(false), 100); // Delay to allow option click
  };

  return (
    <form name="search-form" ref={ref}>
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
          "border-bottom-right-radius": showOptions ? 0 : 3,
          "border-bottom-left-radius": showOptions ? 0 : 3,
        }}
      />
      {showOptions && (
        <ul className="dropdown">
          {filteredOptions.length ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option.title}
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
