import type { TableProps, TableSize } from '../../types/table'
import { Loader } from './Loader'

const sizeStyles: Record<
  TableSize,
  {
    headerCell: string
    bodyCell: string
    textSize: string
  }
> = {
  sm: {
    headerCell: 'px-4 py-2.5',
    bodyCell: 'px-4 py-2.5',
    textSize: 'text-[var(--text-xs)]',
  },
  md: {
    headerCell: 'px-6 py-4.5',
    bodyCell: 'px-6 py-4.5',
    textSize: 'text-[var(--text-sm)]',
  },
  lg: {
    headerCell: 'px-8 py-5',
    bodyCell: 'px-8 py-5',
    textSize: 'text-[var(--text-base)]',
  },
}

export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  data,
  size = 'md',
  striped = true,
  hoverable = true,
  bordered = false,
  emptyText = 'No data available',
  isLoading = false,
  className = '',
  containerClassName = '',
}: TableProps<T>) {
  const currentSize = sizeStyles[size]

  return (
    <div
      className={`w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-cardbg)] font-manrope ${
        bordered ? 'border border-[var(--color-border-light)]' : ''
      } ${containerClassName}`}
    >
      <div className="w-full overflow-x-auto scrollbar-thin">
        <table className={`w-full border-collapse text-left ${className}`}>
          <thead>
            <tr className="bg-[var(--color-background)] border-b border-[var(--color-border-light)]/40">
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={col.width ? { width: col.width } : undefined}
                  className={`${currentSize.headerCell} ${currentSize.textSize} font-semibold text-[var(--color-text-primary)] tracking-tight ${
                    col.align === 'center'
                      ? 'text-center'
                      : col.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y-0">
            {isLoading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center"
                >
                  <div className="flex items-center justify-center">
                    <Loader size={size === 'lg' ? 'md' : 'sm'} variant="secondary" label="Loading data..." />
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-12 text-center text-[var(--text-sm)] text-[var(--color-text-tertiary)]"
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => {
                const isEven = rowIndex % 2 === 1
                return (
                  <tr
                    key={(row.id as string) || rowIndex}
                    className={`transition-colors duration-150 ${
                      striped && isEven ? 'bg-[var(--color-background)]/60' : 'bg-[var(--color-cardbg)]'
                    } ${hoverable ? 'hover:bg-slate-100/60' : ''}`}
                  >
                    {columns.map((col) => {
                      const value = row[col.key]
                      return (
                        <td
                          key={col.key}
                          className={`${currentSize.bodyCell} ${currentSize.textSize} text-[var(--color-text-primary)] font-normal whitespace-nowrap ${
                            col.align === 'center'
                              ? 'text-center'
                              : col.align === 'right'
                                ? 'text-right'
                                : 'text-left'
                          }`}
                        >
                          {col.render ? col.render(value, row, rowIndex) : String(value ?? '')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
