import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider = ({ value, min, max, onChange }) => {
  return (
    <div className="price-range-slider">
      <Slider
        range
        min={min}
        max={max}
        step={10}
        value={value}
        onChange={onChange}
        tipFormatter={(value) => `$${value}`}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value[0]}
        aria-valuetext={`$${value[0]} to $${value[1]}`}
      />

      <div className="price-range-values">
        <span id="price-range-label" className="sr-only">
          Price range
        </span>
        <span aria-hidden="true">${value[0]} - </span>
        <span aria-hidden="true">${value[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
