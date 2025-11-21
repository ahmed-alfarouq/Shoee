import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./PriceSlider.module.scss";

import type { PriceSliderProps } from "./PriceSlider.types";

const PriceRangeSlider = ({ value, min, max, onChange }: PriceSliderProps) => {
  return (
    <div>
      <Slider
        range
        min={min}
        max={max}
        step={10}
        value={value}
        onChange={(val) => typeof val !== "number" && onChange(val)}
        aria-valuemin={min}
        aria-valuemax={max}
        classNames={{
          tracks: styles.rc_slider_tracks,
          track: styles.rc_slider_track,
          handle: styles.rc_slider_handle,
        }}
      />

      <div>
        <span aria-hidden="true">${value[0]} - </span>
        <span aria-hidden="true">${value[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
