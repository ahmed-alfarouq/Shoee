import type { ComponentProps } from "react";

export interface BadgeProps extends ComponentProps<"span"> {
  text: string;
}
