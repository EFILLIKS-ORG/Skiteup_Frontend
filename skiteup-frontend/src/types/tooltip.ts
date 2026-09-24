import type { ReactNode } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: string;
  children: ReactNode;
  position?: TooltipPosition;
};