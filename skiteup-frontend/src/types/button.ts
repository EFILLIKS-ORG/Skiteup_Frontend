import type { ButtonHTMLAttributes, ChangeEvent, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isFullWidth?: boolean

  href?: string
  target?: string

  isUpload?: boolean
  accept?: string
  multiple?: boolean
  onFileSelect?: (files: FileList | null, event: ChangeEvent<HTMLInputElement>) => void
}
