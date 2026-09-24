import type { InputHTMLAttributes, ReactNode } from 'react'

export type RadioSize = 'sm' | 'md' | 'lg'
export type RadioVariant = 'primary' | 'secondary' | 'accent'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode
  description?: ReactNode
  error?: string
  size?: RadioSize
  variant?: RadioVariant
  containerClassName?: string
}

export interface RadioOption {
  label: ReactNode
  value: string
  description?: ReactNode
  disabled?: boolean
}

export interface RadioGroupProps {
  name: string
  options?: RadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  size?: RadioSize
  variant?: RadioVariant
  direction?: 'horizontal' | 'vertical'
  error?: string
  disabled?: boolean
  className?: string
  children?: ReactNode
}
