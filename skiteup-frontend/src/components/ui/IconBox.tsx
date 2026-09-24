import { forwardRef, useEffect, useRef, useState } from 'react'
import type {
  IconBoxProps,
  IconBoxShape,
  IconBoxSize,
  IconBoxVariant,
  PopoverPlacement,
} from '../../types/iconbox'

const sizeStyles: Record<
  IconBoxSize,
  {
    box: string
    iconSize: number
    badgeDot: string
    badgeText: string
  }
> = {
  sm: {
    box: 'w-8 h-8 min-w-[32px]',
    iconSize: 16,
    badgeDot: 'w-2 h-2 top-0 right-0',
    badgeText: 'text-[9px] px-1 min-w-[14px] h-[14px] -top-1 -right-1',
  },
  md: {
    box: 'w-11 h-11 min-w-[44px]',
    iconSize: 22,
    badgeDot: 'w-2.5 h-2.5 top-0.5 right-0.5',
    badgeText: 'text-[10px] px-1.5 min-w-[18px] h-[18px] -top-1.5 -right-1.5',
  },
  lg: {
    box: 'w-14 h-14 min-w-[56px]',
    iconSize: 28,
    badgeDot: 'w-3 h-3 top-1 right-1',
    badgeText: 'text-xs px-2 min-w-[20px] h-[20px] -top-2 -right-2',
  },
  xl: {
    box: 'w-16 h-16 min-w-[64px]',
    iconSize: 32,
    badgeDot: 'w-3.5 h-3.5 top-1.5 right-1.5',
    badgeText: 'text-xs px-2 min-w-[22px] h-[22px] -top-2 -right-2',
  },
}

const shapeStyles: Record<IconBoxShape, string> = {
  rounded: 'rounded-[var(--radius-lg)]',
  circle: 'rounded-full',
  square: 'rounded-none',
}

const variantStyles: Record<
  IconBoxVariant,
  {
    container: string
    interactive: string
  }
> = {
  normal: {
    container: 'bg-[var(--color-cardbg)] border-[1.5px] border-[var(--color-border)] text-[var(--color-text-tertiary)]',
    interactive:
      'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95',
  },
  safe: {
    container: 'bg-[#2BB381] border border-transparent text-[var(--color-text-inverse)] shadow-xs',
    interactive:
      'hover:bg-[var(--color-success)] active:scale-95',
  },
  danger: {
    container: 'bg-[#F25C5C] border border-transparent text-[var(--color-text-inverse)] shadow-xs',
    interactive:
      'hover:bg-[var(--color-error)] active:scale-95',
  },
}

const placementStyles: Record<PopoverPlacement, string> = {
  'bottom-left': 'top-full left-0 mt-2',
  'bottom-right': 'top-full right-0 mt-2',
  'bottom-center': 'top-full left-1/2 -translate-x-1/2 mt-2',
}

export const IconBox = forwardRef<HTMLButtonElement, IconBoxProps>(
  (
    {
      icon,
      children,
      variant = 'normal',
      size = 'md',
      shape = 'rounded',
      isInteractive = true,
      label,
      disabled = false,
      badgeCount,
      hasNotification = false,
      badgeColor = 'bg-[var(--color-error)]',
      popoverContent,
      popoverPlacement = 'bottom-left',
      isPopoverOpen: controlledOpen,
      onPopoverOpenChange,
      closeOnOutsideClick = true,
      className = '',
      popoverClassName = '',
      onClick,
      ...restProps
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
    const isControlled = controlledOpen !== undefined
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!isOpen || !closeOnOutsideClick) return

      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          if (!isControlled) {
            setUncontrolledOpen(false)
          }
          onPopoverOpenChange?.(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen, closeOnOutsideClick, isControlled, onPopoverOpenChange])

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)

      if (popoverContent) {
        const nextState = !isOpen
        if (!isControlled) {
          setUncontrolledOpen(nextState)
        }
        onPopoverOpenChange?.(nextState)
      }
    }

    const currentSize = sizeStyles[size]
    const currentShape = shapeStyles[shape]
    const currentVariant = variantStyles[variant]

    const baseClasses = `
      relative inline-flex items-center justify-center
      transition-all duration-200 select-none outline-none
      ${currentSize.box}
      ${currentShape}
      ${currentVariant.container}
      ${disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''}
      ${isInteractive && !disabled ? `cursor-pointer ${currentVariant.interactive}` : 'cursor-default'}
      ${className}
    `

    const showDot = hasNotification && badgeCount === undefined
    const showCount = badgeCount !== undefined && badgeCount > 0

    return (
      <div ref={containerRef} className="relative inline-flex flex-col">
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          onClick={handleButtonClick}
          aria-label={label}
          className={baseClasses}
          {...restProps}
        >
          {icon || children}

          {showDot && (
            <span
              className={`absolute rounded-full ${badgeColor} ring-2 ring-[var(--color-cardbg)] animate-pulse ${currentSize.badgeDot}`}
            />
          )}

          {showCount && (
            <span
              className={`absolute flex items-center justify-center font-bold text-white rounded-full ${badgeColor} ring-2 ring-[var(--color-cardbg)] leading-none shadow-xs ${currentSize.badgeText}`}
            >
              {badgeCount > 99 ? '99+' : badgeCount}
            </span>
          )}
        </button>

        {popoverContent && isOpen && (
          <div
            className={`absolute z-50 ${placementStyles[popoverPlacement]} bg-[var(--color-cardbg)] rounded-[var(--radius-xl)] border border-[var(--color-border-light)] shadow-xl animate-in fade-in zoom-in-95 duration-150 ${popoverClassName}`}
          >
            {popoverContent}
          </div>
        )}
      </div>
    )
  }
)

IconBox.displayName = 'IconBox'
