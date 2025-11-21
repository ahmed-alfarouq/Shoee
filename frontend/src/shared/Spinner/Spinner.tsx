import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Spinner.module.scss";

const spinnerVariants = cva(styles.spinner, {
  variants: {
    size: {
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },
  defaultVariants: {
    size: "md",
  },
});
const Spinner = ({ size }: VariantProps<typeof spinnerVariants>) => {
  return <span className={spinnerVariants({ size })}></span>;
};

export default Spinner;
