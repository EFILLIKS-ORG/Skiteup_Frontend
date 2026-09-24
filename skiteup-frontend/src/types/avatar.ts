export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  initials: string;
  size?: AvatarSize;
}

export const sizeStyles: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-(--text-sm)',
  md: 'h-10 w-10 text-(--text-base)',
  lg: 'h-12 w-12 text-(--text-xl)',
};
