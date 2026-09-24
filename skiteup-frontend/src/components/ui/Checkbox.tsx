import { forwardRef, useEffect, useId, useRef } from 'react'
import { CheckSquare } from 'reicon-react/icons/CheckSquare'
import type { CheckboxProps, CheckboxSize, CheckboxVariant } from '../../types/checkbox'

const sizeStyles: Record<CheckboxSize, { iconSize: number; text: string; desc: string; gap: string }> = {
  sm: {
    iconSize: 18,
    text: 'text-xs',
    desc: 'text-[11px]',
    gap: 'gap-2',
  },
  md: {
    iconSize: 22,
    text: 'text-sm',
    desc: 'text-xs',
    gap: 'gap-2.5',
  },
  lg: {
    iconSize: 26,
    text: 'text-base',
    desc: 'text-sm',
    gap: 'gap-3',
  },
}

const variantIconColors: Record<CheckboxVariant, string> = {
  primary: 'text-[var(--color-primary)]',
  secondary: 'text-[var(--color-secondary)]',
  accent: 'text-[var(--color-accent)]',
}

const variantBgColors: Record<CheckboxVariant, string> = {
  primary: 'bg-[var(--color-primary)] border-[var(--color-primary)]',
  secondary: 'bg-[var(--color-secondary)] border-[var(--color-secondary)]',
  accent: 'bg-[var(--color-accent)] border-[var(--color-accent)]',
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      description,
      error,
      indeterminate = false,
      size = 'md',
      variant = 'primary',
      disabled = false,
      className = '',
      containerClassName = '',
      checked,
      onChange,
      ...restProps
    },
    forwardedRef
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const innerRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
      const element = innerRef.current
      if (element) {
        element.indeterminate = Boolean(indeterminate)
      }
    }, [indeterminate])
    const currentSize = sizeStyles[size]
    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        <label
          htmlFor={inputId}
          className={`inline-flex items-start ${currentSize.gap} select-none ${
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
        >
          <div className="relative flex items-center justify-center pt-0.5">
            <input
              ref={(node) => {
                innerRef.current = node
                if (typeof forwardedRef === 'function') {
                  forwardedRef(node)
                } else if (forwardedRef) {
                  forwardedRef.current = node
                }
              }}
              type="checkbox"
              id={inputId}
              disabled={disabled}
              checked={checked}
              onChange={onChange}
              className={`peer sr-only ${className}`}
              {...restProps}
            />
            <div
              className={`
                flex items-center justify-center border transition-all duration-150 rounded-[var(--radius-xs)]
                bg-[var(--color-cardbg)]
                ${error ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'}
                ${!disabled && !error ? 'hover:border-[var(--color-primary)]' : ''}
                peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-primary)]/40
                ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
                peer-checked:hidden
                ${indeterminate ? '!hidden' : ''}
              `}
            />
            <div
              className={`
                hidden peer-checked:flex items-center justify-center transition-all duration-150
                ${variantIconColors[variant]}
                ${disabled ? 'opacity-60' : ''}
                ${indeterminate ? '!hidden' : ''}
              `}
            >
              <CheckSquare size={currentSize.iconSize} />
            </div>
            {indeterminate && (
              <div
                className={`
                  flex items-center justify-center border rounded-[var(--radius-xs)] transition-all duration-150
                  ${variantBgColors[variant]}
                  ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
                `}
              >
                <svg
                  className="w-3 h-3 text-[var(--color-text-inverse)]"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="8" x2="13" y2="8" />
                </svg>
              </div>
            )}
          </div>
          {(label || description) && (
            <div className="flex flex-col">
              {label && (
                <span
                  className={`${currentSize.text} font-medium text-[var(--color-text-primary)] leading-tight`}
                >
                  {label}
                </span>
              )}
              {description && (
                <span
                  className={`${currentSize.desc} text-[var(--color-text-secondary)] mt-0.5 leading-normal`}
                >
                  {description}
                </span>
              )}
            </div>
          )}
        </label>
        {error && (
          <span className="text-xs text-[var(--color-error)] pl-6 font-medium">
            {error}
          </span>
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
export default Checkbox
