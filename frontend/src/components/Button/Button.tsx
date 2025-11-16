import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./Button.module.scss";

import type { ButtonProps } from "./Button.types";

const buttonVariants = cva(styles.btn, {
  variants: {
    variant: {
      secondary: styles.secondary,
      outline: styles.outline,
      ghost: styles.ghost,
    },
    size: {
      icon: styles.icon,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

const Button = ({
  asChild = false,
  children,
  size,
  variant,
  isLoading,
  className,
  ...props
}: ButtonProps & VariantProps<typeof buttonVariants>) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </Component>
  );
};

export default Button;
