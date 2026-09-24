import { forwardRef, useId } from 'react'
import type { RadioProps, RadioSize, RadioVariant } from '../../types/radio'

const sizeStyles: Record<
  RadioSize,
  {
    outer: string
    dot: string
    text: string
    desc: string
    gap: string
    paddingTop: string
  }
> = {
  sm: {
    outer: 'w-4 h-4',
    dot: 'w-2 h-2',
    text: 'text-xs',
    desc: 'text-[11px]',
    gap: 'gap-2',
    paddingTop: 'pt-0.5',
  },
  md: {
    outer: 'w-5 h-5',
    dot: 'w-2.5 h-2.5',
    text: 'text-sm',
    desc: 'text-xs',
    gap: 'gap-2.5',
    paddingTop: 'pt-0.5',
  },
  lg: {
    outer: 'w-6 h-6',
    dot: 'w-3 h-3',
    text: 'text-base',
    desc: 'text-sm',
    gap: 'gap-3',
    paddingTop: 'pt-1',
  },
}

const variantBorderColors: Record<RadioVariant, string> = {
  primary: 'border-[var(--color-primary)]',
  secondary: 'border-[var(--color-secondary)]',
  accent: 'border-[var(--color-accent)]',
}

const variantDotColors: Record<RadioVariant, string> = {
  primary: 'bg-[var(--color-primary)]',
  secondary: 'bg-[var(--color-secondary)]',
  accent: 'bg-[var(--color-accent)]',
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      label,
      description,
      error,
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
    const currentSize = sizeStyles[size]

    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        <label
          htmlFor={inputId}
          className={`inline-flex items-start ${currentSize.gap} select-none ${
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
        >
          <div className={`relative flex items-center justify-center shrink-0 ${currentSize.paddingTop}`}>
            <input
              ref={forwardedRef}
              type="radio"
              id={inputId}
              disabled={disabled}
              checked={checked}
              onChange={onChange}
              className={`peer sr-only ${className}`}
              {...restProps}
            />
            <div
              className={`
                flex peer-checked:hidden items-center justify-center rounded-full border transition-all duration-150
                bg-[var(--color-cardbg)]
                ${currentSize.outer}
                ${error ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'}
                ${!disabled && !error ? 'hover:border-[var(--color-primary)]' : ''}
                peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-primary)]/40
              `}
            />
            <div
              className={`
                hidden peer-checked:flex items-center justify-center rounded-full border transition-all duration-150
                bg-[var(--color-cardbg)]
                ${currentSize.outer}
                ${variantBorderColors[variant]}
                peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-primary)]/40
                ${disabled ? 'opacity-60' : ''}
              `}
            >
              <div
                className={`
                  rounded-full
                  ${currentSize.dot}
                  ${variantDotColors[variant]}
                `}
              />
            </div>
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

Radio.displayName = 'Radio'

export function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  variant = 'primary',
  direction = 'vertical',
  error,
  disabled = false,
  className = '',
  children,
}: import('../../types/radio').RadioGroupProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div
        role="radiogroup"
        className={`flex ${direction === 'horizontal' ? 'flex-row flex-wrap gap-6' : 'flex-col gap-3'}`}
      >
        {options.map((option) => {
          const isChecked = value !== undefined ? value === option.value : undefined
          const isDefaultChecked = defaultValue !== undefined ? defaultValue === option.value : undefined

          return (
            <Radio
              key={option.value}
              name={name}
              value={option.value}
              label={option.label}
              description={option.description}
              size={size}
              variant={variant}
              disabled={disabled || option.disabled}
              checked={isChecked}
              defaultChecked={isDefaultChecked}
              onChange={(e) => {
                if (e.target.checked && onChange) {
                  onChange(option.value)
                }
              }}
            />
          )
        })}
        {children}
      </div>
      {error && (
        <span className="text-xs text-[var(--color-error)] font-medium">
          {error}
        </span>
      )}
    </div>
  )
}

export default Radio
