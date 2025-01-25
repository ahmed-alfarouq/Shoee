import React from "react";

const IncrementDecrementCounter = ({ count, increment, decrement }) => {
  return (
    <div className="increment-decrement-counter">
      <span className="sr-only">Increase Quantity</span>
      <button
        type="button"
        onClick={decrement}
        className="decrement-btn"
        disabled={count <= 0}
      >
        -
      </button>
      <span className="count">{count}</span>
      <span className="sr-only">Decrease Quantity</span>
      <button type="button" onClick={increment} className="increment-btn">
        +
      </button>
    </div>
  );
};

export default IncrementDecrementCounter;
