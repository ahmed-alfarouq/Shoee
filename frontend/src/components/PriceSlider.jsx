import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider = ({ min, max, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleSliderChange = (value) => {
    setRange(value);
    onChange(value);
  };

  return (
    <div className="price-range-slider">
      <Slider
        range
        min={min}
        max={max}
        step={10}
        defaultValue={[min, max]}
        value={range}
        onChange={handleSliderChange}
        tipFormatter={(value) => `$${value}`}
      />

      <div className="price-range-values">
        <span>${range[0]}</span> - <span>${range[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
