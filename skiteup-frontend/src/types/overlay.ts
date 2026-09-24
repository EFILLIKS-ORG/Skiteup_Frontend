import type { ReactNode } from 'react'

export type OverlayVariant = 'danger' | 'safe'
export type OverlaySize = 'sm' | 'md' | 'lg'

export interface OverlayProps {
  isOpen: boolean
  onClose?: () => void
  variant?: OverlayVariant
  size?: OverlaySize
  title?: ReactNode
  subtitle?: ReactNode
  icon?: ReactNode
  primaryButtonText?: string
  onPrimaryClick?: () => void
  showSecondaryButton?: boolean
  secondaryButtonText?: string
  onSecondaryClick?: () => void
  closeOnBackdropClick?: boolean
  showCloseButton?: boolean
  className?: string
}
