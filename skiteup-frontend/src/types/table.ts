import type { ReactNode } from 'react'

export type TableSize = 'sm' | 'md' | 'lg'

export interface Column<T = Record<string, unknown>> {
  key: string
  header: ReactNode
  width?: string
  align?: 'left' | 'center' | 'right'
  render?: (value: unknown, record: T, index: number) => ReactNode
}

export interface TableProps<T = Record<string, unknown>> {
  columns: Column<T>[]
  data: T[]
  size?: TableSize
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  emptyText?: ReactNode
  isLoading?: boolean
  className?: string
  containerClassName?: string
}
