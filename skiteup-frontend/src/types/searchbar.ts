import React from 'react';

export type SearchBarSize = 'sm' | 'md' | 'lg';

export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SearchBarSize;
  onClear?: () => void;
}

export const sizeStyles: Record<SearchBarSize, string> = {
  sm: 'h-8 text-(--text-sm)',
  md: 'h-10 text-(--text-base)',
  lg: 'h-12 text-(--text-lg)',
};

export const iconSizes: Record<SearchBarSize, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};
