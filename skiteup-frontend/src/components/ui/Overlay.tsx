import { useEffect } from 'react'
import { Danger } from 'reicon-react/icons/Danger'
import { ShieldCheck } from 'reicon-react/icons/ShieldCheck'
import { Button } from './Button'
import type { OverlayProps, OverlaySize, OverlayVariant } from '../../types/overlay'
import type { ButtonSize } from '../../types/button'

const sizeStyles: Record<
  OverlaySize,
  {
    modal: string
    iconBox: string
    iconSize: number
    title: string
    subtitle: string
    padding: string
    buttonSize: ButtonSize
  }
> = {
  sm: {
    modal: 'max-w-[320px]',
    iconBox: 'w-12 h-12',
    iconSize: 22,
    title: 'text-[var(--text-lg)] font-bold',
    subtitle: 'text-[var(--text-xs)]',
    padding: 'p-6',
    buttonSize: 'sm',
  },
  md: {
    modal: 'max-w-[390px]',
    iconBox: 'w-16 h-16',
    iconSize: 28,
    title: 'text-[var(--text-2xl)] font-bold',
    subtitle: 'text-[var(--text-sm)]',
    padding: 'p-7',
    buttonSize: 'md',
  },
  lg: {
    modal: 'max-w-[460px]',
    iconBox: 'w-20 h-20',
    iconSize: 34,
    title: 'text-[var(--text-3xl)] font-extrabold',
    subtitle: 'text-[var(--text-base)]',
    padding: 'p-8',
    buttonSize: 'lg',
  },
}

const variantStyles: Record<
  OverlayVariant,
  {
    glowColor: string
    iconBg: string
    iconColor: string
    primaryBtnClass: string
    border: string
  }
> = {
  danger: {
    glowColor: 'var(--color-error)',
    iconBg: 'bg-[var(--color-error)]',
    iconColor: 'text-[var(--color-text-inverse)]',
    primaryBtnClass:
      'bg-[var(--color-error)]! hover:opacity-90! text-[var(--color-text-inverse)]! border-transparent! focus-visible:ring-[var(--color-error)]/30 shadow-md',
    border: 'border-[var(--color-border-light)]',
  },
  safe: {
    glowColor: 'var(--color-success)',
    iconBg: 'bg-[var(--color-success)]',
    iconColor: 'text-[var(--color-text-inverse)]',
    primaryBtnClass:
      'bg-[var(--color-success)]! hover:opacity-90! text-[var(--color-text-inverse)]! border-transparent! focus-visible:ring-[var(--color-success)]/30 shadow-md',
    border: 'border-[var(--color-border-light)]',
  },
}

export function Overlay({
  isOpen,
  onClose,
  variant = 'danger',
  size = 'md',
  title = 'Title',
  subtitle = 'Subheading',
  icon,
  primaryButtonText = 'Ok',
  onPrimaryClick,
  showSecondaryButton = false,
  secondaryButtonText = 'Cancel',
  onSecondaryClick,
  closeOnBackdropClick = true,
  showCloseButton = false,
  className = '',
}: OverlayProps) {
  useEffect(() => {
    if (!isOpen) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalStyle
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const currentSize = sizeStyles[size]
  const currentVariant = variantStyles[variant]

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdropClick) {
      onClose?.()
    }
  }

  const handlePrimary = () => {
    if (onPrimaryClick) {
      onPrimaryClick()
    } else {
      onClose?.()
    }
  }

  const handleSecondary = () => {
    if (onSecondaryClick) {
      onSecondaryClick()
    } else {
      onClose?.()
    }
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 w-screen h-screen min-h-screen z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
    >
      <div
        className={`relative w-full ${currentSize.modal} bg-[var(--color-cardbg)] rounded-[var(--radius-2xl)] ${currentSize.padding} ${currentVariant.border} border shadow-2xl overflow-hidden flex flex-col items-center text-center font-manrope ${className}`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[317px] h-[170px] pointer-events-none select-none overflow-hidden">
          <svg
            width="317"
            height="170"
            viewBox="0 0 317 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <filter
                id="radial_glow_filter"
                x="-80"
                y="-60"
                width="477"
                height="290"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="35" result="effect1_foregroundBlur" />
              </filter>
            </defs>
            <g filter="url(#radial_glow_filter)">
              <path
                d="M315 0C315 0 224.984 69.7564 157.773 70C90.0102 70.2456 -1 0 -1 0C-1 0 94.9427 26.0985 157.773 26C220.008 25.9024 315 0 315 0Z"
                fill={currentVariant.glowColor}
                fillOpacity="0.45"
              />
            </g>
          </svg>
        </div>

        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] rounded-full transition-colors cursor-pointer z-10"
            title="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="relative z-10 flex flex-col items-center w-full mt-1">
          <div
            className={`flex items-center justify-center rounded-full ${currentSize.iconBox} ${currentVariant.iconBg} ${currentVariant.iconColor} shadow-md mb-4.5`}
          >
            {icon ? (
              icon
            ) : variant === 'danger' ? (
              <Danger size={currentSize.iconSize} />
            ) : (
              <ShieldCheck size={currentSize.iconSize} />
            )}
          </div>

          <h3 className={`${currentSize.title} text-[var(--color-text-primary)] tracking-tight mb-1.5`}>
            {title}
          </h3>

          <div className={`${currentSize.subtitle} text-[var(--color-text-secondary)] font-normal max-w-[280px] leading-relaxed mb-6`}>
            {subtitle}
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center gap-3">
            {showSecondaryButton && (
              <div className="w-full order-2 sm:order-1">
                <Button
                  variant="outline"
                  size={currentSize.buttonSize}
                  isFullWidth
                  onClick={handleSecondary}
                  className="rounded-[var(--radius-xl)] bg-[var(--color-background)] hover:bg-[var(--color-border-light)]/40 text-[var(--color-text-primary)] border-transparent shadow-xs"
                >
                  {secondaryButtonText}
                </Button>
              </div>
            )}

            <div className="w-full order-1 sm:order-2">
              <Button
                variant="primary"
                size={currentSize.buttonSize}
                isFullWidth
                onClick={handlePrimary}
                className={`rounded-[var(--radius-xl)] ${currentVariant.primaryBtnClass}`}
              >
                {primaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
