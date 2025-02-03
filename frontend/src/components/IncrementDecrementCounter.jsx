import React from "react";

const IncrementDecrementCounter = ({ count, increment, decrement }) => {
  return (
    <div className="increment-decrement-counter">
      <button
        type="button"
        onClick={decrement}
        className="decrement-btn"
        disabled={count <= 0}
        aria-disabled={count <= 0 ? "true" : "false"}
        aria-label="Decrease Quantity"
      >
        -
      </button>
      <span className="count" aria-live="polite">
        {count}
      </span>
      <button
        type="button"
        onClick={increment}
        className="increment-btn"
        aria-label="Increase Quantity"
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrementCounter;
