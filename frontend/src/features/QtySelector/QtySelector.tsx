import { Button } from "@/components/Button";

import styles from "./QtySelector.module.scss";

import type { QtySelectorProps } from "./QtySelector.types";

const QtySelector = ({ count, increment, decrement }: QtySelectorProps) => {
  return (
    <div className={styles.increment_decrement_counter}>
      <Button
        onClick={decrement}
        className={styles.decrement_btn}
        disabled={count <= 0}
        aria-disabled={count <= 0 ? "true" : "false"}
        aria-label="Decrease Quantity"
      >
        -
      </Button>
      <span className={styles.count} aria-live="polite">
        {count}
      </span>
      <Button
        onClick={increment}
        className={styles.increment_btn}
        aria-label="Increase Quantity"
      >
        +
      </Button>
    </div>
  );
};

export default QtySelector;
