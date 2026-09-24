import { forwardRef, useRef } from 'react'
import { Upload } from 'reicon-react/icons/Upload'
import type { ButtonProps, ButtonSize, ButtonVariant } from '../../types/button'

const sizeStyles: Record<ButtonSize, { btn: string; icon: string; spinner: string }> = {
  sm: {
    btn: 'px-3 py-1.5 text-xs gap-1.5 rounded-[var(--radius-sm)]',
    icon: 'text-sm',
    spinner: 'w-3.5 h-3.5',
  },
  md: {
    btn: 'px-4 py-2.5 text-sm gap-2 rounded-[var(--radius-md)]',
    icon: 'text-base',
    spinner: 'w-4 h-4',
  },
  lg: {
    btn: 'px-6 py-3.5 text-base gap-2.5 rounded-[var(--radius-lg)]',
    icon: 'text-lg',
    spinner: 'w-5 h-5',
  },
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-text-inverse)] border border-transparent
    hover:bg-[var(--color-hover-primary)]
    active:bg-[var(--color-pressed-primary)]
    focus-visible:ring-3 focus-visible:ring-[var(--color-primary)]/30
  `,
  secondary: `
    bg-[var(--color-secondary)] text-[var(--color-text-inverse)] border border-transparent
    hover:bg-[var(--color-hover-secondary)]
    active:bg-[var(--color-pressed-secondary)]
    focus-visible:ring-3 focus-visible:ring-[var(--color-secondary)]/30
  `,
  tertiary: `
    bg-[var(--color-accent)] text-[var(--color-text-inverse)] border border-transparent
    hover:bg-[var(--color-hover-tertiary)]
    active:bg-[var(--color-pressed-tertiary)]
    focus-visible:ring-3 focus-visible:ring-[var(--color-accent)]/30
  `,
  outline: `
    bg-[var(--color-cardbg)] text-[var(--color-text-primary)] border border-[var(--color-border)]
    hover:bg-[var(--color-background)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]
    active:bg-[var(--color-border-light)]/40
    focus-visible:ring-3 focus-visible:ring-[var(--color-primary)]/30
  `,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      isFullWidth = false,
      disabled = false,
      className = '',
      href,
      target,
      isUpload = false,
      accept,
      multiple = false,
      onFileSelect,
      type = 'button',
      onClick,
      ...restProps
    },
    ref
  ) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const isDisabled = disabled || isLoading
    const effectiveVariant = isUpload && variant === 'primary' ? 'outline' : variant
    const currentSize = sizeStyles[size]
    const handleUploadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return
      if (fileInputRef.current) {
        fileInputRef.current.click()
      }
      if (onClick) onClick(e)
    }
    const resolvedLeftIcon = isUpload && !leftIcon ? (
      <Upload size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
    ) : (
      leftIcon
    )
    const baseClasses = `
      inline-flex items-center justify-center font-medium font-[var(--font-manrope)]
      transition-all duration-150 ease-in-out cursor-pointer select-none outline-none
      ${isFullWidth ? 'w-full' : 'w-auto'}
      ${currentSize.btn}
      ${variantStyles[effectiveVariant]}
      ${
        isDisabled
          ? '!bg-[var(--color-disable)]/40 !text-[var(--color-text-tertiary)] !border-[var(--color-disable)] !cursor-not-allowed !shadow-none'
          : ''
      }
      ${className}
    `
    const content = (
      <>
        {isLoading && (
          <svg
            className={`animate-spin ${currentSize.spinner} text-current`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3.5"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {!isLoading && resolvedLeftIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">{resolvedLeftIcon}</span>
        )}
        {children && <span className="truncate">{children}</span>}
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 items-center justify-center">{rightIcon}</span>
        )}
      </>
    )
    if (href && !isDisabled) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={baseClasses}
        >
          {content}
        </a>
      )
    }
    return (
      <>
        <button
          ref={ref}
          type={type}
          disabled={isDisabled}
          onClick={isUpload ? handleUploadClick : onClick}
          className={baseClasses}
          {...restProps}
        >
          {content}
        </button>
        {isUpload && (
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            className="hidden"
            onChange={(e) => {
              if (onFileSelect) {
                onFileSelect(e.target.files, e)
              }
            }}
          />
        )}
      </>
    )
  }
)

Button.displayName = 'Button'
export default Button