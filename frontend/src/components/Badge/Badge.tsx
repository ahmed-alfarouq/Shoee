import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Badge.module.scss";

import type { BadgeProps } from "./Badge.types";

const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      sale: styles.onsale,
    },
    position: {
      tr: styles.tr,
      tl: styles.tl,
      br: styles.br,
      bl: styles.bl,
      center: styles.center,
    },
    size: {
      md: styles.md,
      sm: styles.sm,
    },
  },
  defaultVariants: {
    variant: "sale",
    size: "md",
    position: "tr",
  },
});

const Badge = ({
  text,
  size,
  variant,
  position,
  className,
  ...props
}: BadgeProps & VariantProps<typeof badgeVariants>) => {
  return (
    <span
      className={badgeVariants({ variant, position, size, className })}
      {...props}
    >
      {text}
    </span>
  );
};

export default Badge;
