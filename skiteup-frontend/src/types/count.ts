import type React from "react";

export type CountVariant = "outlined" | "filled";

export interface CountProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  variant?: CountVariant;
  disabled?: boolean;
  className?: string;
  formatValue?: (value: number) => string | React.ReactNode;
  displayValue?: React.ReactNode;
  loop?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
