import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type IconBoxVariant = 'normal' | 'safe' | 'danger'
export type IconBoxSize = 'sm' | 'md' | 'lg' | 'xl'
export type IconBoxShape = 'rounded' | 'circle' | 'square'
export type PopoverPlacement = 'bottom-left' | 'bottom-right' | 'bottom-center'

export interface IconBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  children?: ReactNode
  variant?: IconBoxVariant
  size?: IconBoxSize
  shape?: IconBoxShape
  label?: string
  isInteractive?: boolean
  badgeCount?: number
  hasNotification?: boolean
  badgeColor?: string
  popoverContent?: ReactNode
  popoverPlacement?: PopoverPlacement
  isPopoverOpen?: boolean
  onPopoverOpenChange?: (open: boolean) => void
  closeOnOutsideClick?: boolean
  className?: string
  popoverClassName?: string
}
