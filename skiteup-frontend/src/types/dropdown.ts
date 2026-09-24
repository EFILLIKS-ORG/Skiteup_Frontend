import type { ReactNode } from 'react'

export type DropdownSize = 'sm' | 'md' | 'lg'
export type DropdownVariant = 'default' | 'primary' | 'secondary' | 'accent'

export interface DropdownOption<T = string | number> {
  label: string
  value: T
  disabled?: boolean
  description?: string
  icon?: ReactNode
}

export interface DropdownProps<T = string | number> {
  options: DropdownOption<T>[]
  value?: T | T[]
  defaultValue?: T | T[]
  onChange?: (value: T | T[], selectedOption?: DropdownOption<T> | DropdownOption<T>[]) => void
  placeholder?: string
  label?: ReactNode
  error?: string
  size?: DropdownSize
  variant?: DropdownVariant
  isMulti?: boolean
  searchable?: boolean
  disabled?: boolean
  clearable?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  menuClassName?: string
}
