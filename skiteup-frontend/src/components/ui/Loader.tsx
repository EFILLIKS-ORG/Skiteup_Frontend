import type { LoaderProps, LoaderSize, LoaderVariant } from '../../types/loader'

const sizeStyles: Record<LoaderSize, { ring: string; spinner: string; text: string }> = {
  sm: {
    ring: 'w-5 h-5 border-2',
    spinner: 'w-5 h-5 border-2',
    text: 'text-xs',
  },
  md: {
    ring: 'w-8 h-8 border-[3px]',
    spinner: 'w-8 h-8 border-[3px]',
    text: 'text-sm',
  },
  lg: {
    ring: 'w-12 h-12 border-4',
    spinner: 'w-12 h-12 border-4',
    text: 'text-base font-medium',
  },
  xl: {
    ring: 'w-16 h-16 border-4',
    spinner: 'w-16 h-16 border-4',
    text: 'text-lg font-semibold',
  },
}

const variantStyles: Record<LoaderVariant, { ring: string; head: string; text: string }> = {
  primary: {
    ring: 'border-[var(--color-primary)]/20',
    head: 'border-[var(--color-primary)]',
    text: 'text-[var(--color-text-secondary)]',
  },
  secondary: {
    ring: 'border-[var(--color-secondary)]/20',
    head: 'border-[var(--color-secondary)]',
    text: 'text-[var(--color-secondary)]',
  },
  accent: {
    ring: 'border-[var(--color-accent)]/20',
    head: 'border-[var(--color-accent)]',
    text: 'text-[var(--color-accent)]',
  },
  white: {
    ring: 'border-white/25',
    head: 'border-white',
    text: 'text-white',
  },
}

export function Loader({
  size = 'md',
  variant = 'primary',
  label,
  fullScreen = false,
  blur = true,
  className = '',
}: LoaderProps) {
  const currentSize = sizeStyles[size]
  const currentVariant = variantStyles[variant]

  const spinner = (
    <div className={`inline-flex flex-col items-center justify-center gap-3 font-[var(--font-manrope)] ${className}`}>
      <div className="relative flex items-center justify-center">
        <div
          className={`rounded-full ${currentSize.ring} ${currentVariant.ring}`}
        />
        <div
          className={`absolute rounded-full border-transparent border-t-current animate-spin ${currentSize.spinner} ${currentVariant.head}`}
        />
      </div>
      {label && (
        <span className={`tracking-normal animate-pulse select-none ${currentSize.text} ${currentVariant.text}`}>
          {label}
        </span>
      )}
    </div>
  )
  if (fullScreen) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          blur
            ? 'bg-[var(--color-background)]/80 backdrop-blur-sm'
            : 'bg-[var(--color-background)]/90'
        }`}
      >
        <div className="p-8 rounded-[var(--radius-2xl)] bg-[var(--color-cardbg)] shadow-lg border border-[var(--color-border-light)] flex flex-col items-center">
          {spinner}
        </div>
      </div>
    )
  }
  return (
    <div role="status" aria-live="polite" className="inline-flex items-center justify-center">
      {spinner}
    </div>
  )
}
export default Loader
