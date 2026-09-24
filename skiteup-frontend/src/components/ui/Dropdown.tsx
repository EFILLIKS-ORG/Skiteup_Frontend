import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { ChevronDown } from 'reicon-react/icons/ChevronDown'
import { Check } from 'reicon-react/icons/Check'
import { Search } from 'reicon-react/icons/Search'
import { Checkbox } from './Checkbox'
import type {
  DropdownOption,
  DropdownProps,
  DropdownSize,
  DropdownVariant,
} from '../../types/dropdown'

const sizeStyles: Record<
  DropdownSize,
  {
    button: string
    text: string
    iconSize: number
    option: string
    menuMargin: string
    search: string
  }
> = {
  sm: {
    button: 'px-3 py-1.5 min-h-[34px] rounded-[var(--radius-md)] text-[var(--text-xs)]',
    text: 'text-[var(--text-xs)]',
    iconSize: 14,
    option: 'px-3 py-1.5 text-[var(--text-xs)] rounded-[var(--radius-xs)]',
    menuMargin: 'mt-1 p-1 rounded-[var(--radius-md)]',
    search: 'px-2 py-1 text-[var(--text-xs)]',
  },
  md: {
    button: 'px-4 py-2.5 min-h-[44px] rounded-[var(--radius-lg)] text-[var(--text-sm)]',
    text: 'text-[var(--text-sm)]',
    iconSize: 18,
    option: 'px-3.5 py-2 text-[var(--text-sm)] rounded-[var(--radius-sm)]',
    menuMargin: 'mt-1.5 p-1.5 rounded-[var(--radius-lg)]',
    search: 'px-2.5 py-1.5 text-[var(--text-sm)]',
  },
  lg: {
    button: 'px-5 py-3.5 min-h-[52px] rounded-[var(--radius-xl)] text-[var(--text-base)]',
    text: 'text-[var(--text-base)]',
    iconSize: 20,
    option: 'px-4 py-2.5 text-[var(--text-base)] rounded-[var(--radius-md)]',
    menuMargin: 'mt-2 p-2 rounded-[var(--radius-xl)]',
    search: 'px-3 py-2 text-[var(--text-base)]',
  },
}

const variantStyles: Record<
  DropdownVariant,
  {
    border: string
    activeBorder: string
    focusRing: string
    optionHover: string
    optionActive: string
    selectedText: string
  }
> = {
  default: {
    border: 'border-[var(--color-border-light)] hover:border-[var(--color-secondary)]/50',
    activeBorder: 'border-[var(--color-secondary)]',
    focusRing: 'ring-3 ring-[var(--color-secondary)]/15',
    optionHover: 'hover:bg-slate-50',
    optionActive: 'bg-slate-100 text-[var(--color-secondary)] font-medium',
    selectedText: 'text-[var(--color-secondary)]',
  },
  primary: {
    border: 'border-[var(--color-border-light)] hover:border-[var(--color-primary)]',
    activeBorder: 'border-[var(--color-primary)]',
    focusRing: 'ring-3 ring-[var(--color-primary)]/20',
    optionHover: 'hover:bg-[var(--color-primary)]/5',
    optionActive: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium',
    selectedText: 'text-[var(--color-primary)]',
  },
  secondary: {
    border: 'border-[var(--color-border-light)] hover:border-[var(--color-secondary)]',
    activeBorder: 'border-[var(--color-secondary)]',
    focusRing: 'ring-3 ring-[var(--color-secondary)]/20',
    optionHover: 'hover:bg-[var(--color-secondary)]/5',
    optionActive: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-medium',
    selectedText: 'text-[var(--color-secondary)]',
  },
  accent: {
    border: 'border-[var(--color-border-light)] hover:border-[var(--color-accent)]',
    activeBorder: 'border-[var(--color-accent)]',
    focusRing: 'ring-3 ring-[var(--color-accent)]/20',
    optionHover: 'hover:bg-[var(--color-accent)]/5',
    optionActive: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium',
    selectedText: 'text-[var(--color-accent)]',
  },
}

export function Dropdown<T = string | number>({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Add Dept',
  label,
  error,
  size = 'md',
  variant = 'default',
  isMulti = false,
  searchable = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  menuClassName = '',
}: DropdownProps<T>) {
  const containerId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [uncontrolledValue, setUncontrolledValue] = useState<T | T[]>(() => {
    if (defaultValue !== undefined) return defaultValue
    return isMulti ? [] : ('' as unknown as T)
  })

  const isControlled = value !== undefined
  const activeValue = isControlled ? value : uncontrolledValue

  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      if (searchable) {
        setTimeout(() => searchInputRef.current?.focus(), 50)
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, searchable])

  const currentSize = sizeStyles[size]
  const currentVariant = variantStyles[variant]

  const filteredOptions = useMemo(() => {
    if (!searchTerm.trim()) return options
    const term = searchTerm.toLowerCase()
    return options.filter((opt) => opt.label.toLowerCase().includes(term))
  }, [options, searchTerm])

  const selectedOptions = useMemo(() => {
    if (isMulti) {
      const arr = Array.isArray(activeValue) ? activeValue : []
      return options.filter((opt) => arr.includes(opt.value))
    }
    return options.find((opt) => opt.value === activeValue)
  }, [options, activeValue, isMulti])

  const isSelected = (val: T) => {
    if (isMulti) {
      return Array.isArray(activeValue) && activeValue.includes(val)
    }
    return activeValue === val
  }

  const handleSelectOption = (opt: DropdownOption<T>) => {
    if (opt.disabled) return

    if (isMulti) {
      const current = Array.isArray(activeValue) ? [...activeValue] : []
      const index = current.indexOf(opt.value)
      let updated: T[]
      if (index > -1) {
        updated = current.filter((v) => v !== opt.value)
      } else {
        updated = [...current, opt.value]
      }
      if (!isControlled) {
        setUncontrolledValue(updated)
      }
      const selectedOpts = options.filter((o) => updated.includes(o.value))
      onChange?.(updated, selectedOpts)
    } else {
      if (!isControlled) {
        setUncontrolledValue(opt.value)
      }
      onChange?.(opt.value, opt)
      setIsOpen(false)
      setSearchTerm('')
    }
  }

  const displayPlaceholderOrValue = () => {
    if (isMulti) {
      const list = selectedOptions as DropdownOption<T>[]
      if (!list || list.length === 0) {
        return <span className="text-[var(--color-text-placeholder)] font-normal">{placeholder}</span>
      }
      return (
        <span className={`${currentVariant.selectedText} font-medium tracking-tight truncate`}>
          {list.map((o) => o.label).join(', ')}
        </span>
      )
    }

    const single = selectedOptions as DropdownOption<T> | undefined
    if (!single || single.value === '') {
      return <span className="text-[var(--color-text-placeholder)] font-normal">{placeholder}</span>
    }

    return (
      <span className={`${currentVariant.selectedText} font-medium tracking-tight truncate`}>
        {single.label}
      </span>
    )
  }

  return (
    <div
      ref={containerRef}
      id={containerId}
      className={`relative inline-flex flex-col w-full font-manrope ${className}`}
    >
      {label && (
        <label className="text-[var(--text-xs)] font-medium text-[var(--color-text-secondary)] mb-1.5 select-none">
          {label}
        </label>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between gap-3 bg-[var(--color-cardbg)] border transition-all duration-200 cursor-pointer select-none outline-none ${currentSize.button} ${
          error
            ? 'border-[var(--color-error)] ring-2 ring-[var(--color-error)]/15'
            : isOpen
              ? `${currentVariant.activeBorder} ${currentVariant.focusRing}`
              : currentVariant.border
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-[var(--color-background)]' : ''}`}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          {leftIcon && (
            <span className="text-[var(--color-text-tertiary)] flex-shrink-0">{leftIcon}</span>
          )}
          {displayPlaceholderOrValue()}
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {rightIcon}
          <ChevronDown
            size={currentSize.iconSize}
            className={`text-[var(--color-text-tertiary)] transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[var(--color-text-primary)]' : ''
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full z-40 bg-[var(--color-cardbg)] border border-[var(--color-border-light)] shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150 ${currentSize.menuMargin} ${menuClassName}`}
        >
          {searchable && (
            <div className="p-1.5 border-b border-[var(--color-border-light)]">
              <div className="flex items-center gap-2 bg-[var(--color-background)] px-2.5 py-1.5 rounded-[var(--radius-sm)]">
                <Search size={14} className="text-[var(--color-text-tertiary)]" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-transparent border-none outline-none text-[var(--text-xs)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)]"
                />
              </div>
            </div>
          )}

          <div className="max-h-60 overflow-y-auto flex flex-col gap-0.5">
            {filteredOptions.length === 0 ? (
              <div className="py-4 text-center text-[var(--text-xs)] text-[var(--color-text-tertiary)] select-none">
                No options found
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const active = isSelected(opt.value)
                return (
                  <div
                    key={String(opt.value)}
                    onClick={() => handleSelectOption(opt)}
                    className={`flex items-center justify-between w-full transition-colors duration-150 cursor-pointer select-none ${currentSize.option} ${
                      opt.disabled
                        ? 'opacity-40 cursor-not-allowed'
                        : active
                          ? currentVariant.optionActive
                          : `${currentVariant.optionHover} text-[var(--color-text-primary)]`
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      {isMulti && (
                        <Checkbox
                          checked={active}
                          disabled={opt.disabled}
                          size="sm"
                          tabIndex={-1}
                          readOnly
                        />
                      )}
                      {opt.icon && <span className="flex-shrink-0">{opt.icon}</span>}
                      <span className="truncate">{opt.label}</span>
                    </div>

                    {!isMulti && active && (
                      <Check size={currentSize.iconSize} className="flex-shrink-0 text-[var(--color-primary)] ml-2" />
                    )}
                  </div>
                )
              })
            )}
          </div>
        </div>
      )}

      {error && (
        <span className="text-[var(--text-xs)] text-[var(--color-error)] mt-1 font-medium">
          {error}
        </span>
      )}
    </div>
  )
}
