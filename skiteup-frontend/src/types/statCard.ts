import type React from "react";

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
}
