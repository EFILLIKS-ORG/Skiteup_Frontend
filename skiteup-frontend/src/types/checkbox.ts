import type { InputHTMLAttributes, ReactNode } from 'react'

export type CheckboxSize = 'sm' | 'md' | 'lg'
export type CheckboxVariant = 'primary' | 'secondary' | 'accent'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode
  description?: ReactNode
  error?: string
  indeterminate?: boolean
  size?: CheckboxSize
  variant?: CheckboxVariant
  containerClassName?: string
}
