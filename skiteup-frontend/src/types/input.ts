import React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: InputSize;
}

export const sizeStyles: Record<InputSize, string> = {
  sm: 'h-8 px-3 text-(--text-xs)',
  md: 'h-10 px-3 text-(--text-sm)',
  lg: 'h-12 px-4 text-(--text-base)',
};
