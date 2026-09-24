export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-(--color-primary) text-(--color-text-inverse)',
  secondary: 'bg-(--color-secondary) text-(--color-text-inverse)',
  success: 'bg-(--color-success) text-(--color-text-inverse)',
  warning: 'bg-(--color-warning) text-(--color-text-inverse)',
  error: 'bg-(--color-error) text-(--color-text-inverse)',
  info: 'bg-(--color-info) text-(--color-text-inverse)',
};

export const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-(--text-xs)',
  md: 'px-2.5 py-1 text-(--text-sm)',
  lg: 'px-3 py-1.5 text-(--text-base)',
};
