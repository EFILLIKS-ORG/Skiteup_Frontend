import type { DragEvent, ReactNode } from 'react'
import { useState } from 'react'
import { Check } from 'reicon-react/icons/Check'
import { X } from 'reicon-react/icons/X'
import { ArrowUp } from 'reicon-react/icons/ArrowUp'
import { ArrowDown } from 'reicon-react/icons/ArrowDown'
import { RotateLeft } from 'reicon-react/icons/RotateLeft'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { Radio } from './Radio'
import type {
  QuestionAnswerValue,
  QuestionBuilderProps,
  QuestionBuilderSize,
} from '../../types/questionBuilder'

const sizeStyles: Record<
  QuestionBuilderSize,
  {
    questionText: string
    optionBox: string
    optionText: string
    badgeSize: string
    inputBox: string
    buttonSize: 'sm' | 'md' | 'lg'
  }
> = {
  sm: {
    questionText: 'text-sm sm:text-base font-medium',
    optionBox: 'p-3 rounded-[var(--radius-lg)]',
    optionText: 'text-xs sm:text-sm font-medium',
    badgeSize: 'w-6 h-6 rounded-[var(--radius-sm)] text-xs font-semibold',
    inputBox: 'px-3.5 py-2.5 text-xs sm:text-sm rounded-[var(--radius-md)]',
    buttonSize: 'sm',
  },
  md: {
    questionText: 'text-base sm:text-lg font-medium',
    optionBox: 'p-4 rounded-[var(--radius-xl)]',
    optionText: 'text-sm sm:text-base font-medium',
    badgeSize: 'w-7 h-7 sm:w-8 sm:h-8 rounded-[var(--radius-md)] text-sm font-semibold',
    inputBox: 'px-4 py-3 text-sm sm:text-base rounded-[var(--radius-lg)]',
    buttonSize: 'md',
  },
  lg: {
    questionText: 'text-lg sm:text-xl font-semibold',
    optionBox: 'p-5 rounded-[var(--radius-2xl)]',
    optionText: 'text-base sm:text-lg font-medium',
    badgeSize: 'w-9 h-9 sm:w-10 sm:h-10 rounded-[var(--radius-md)] text-base font-bold',
    inputBox: 'px-5 py-4 text-base sm:text-lg rounded-[var(--radius-xl)]',
    buttonSize: 'lg',
  },
}

export function QuestionBuilder({
  type = 'single',
  questionNumber,
  questionText,
  options = [],
  correctAnswer,
  value: controlledValue,
  defaultValue,
  isSubmitted: controlledIsSubmitted,
  showSubmitButton = true,
  showSelectionIndicator = true,
  size = 'md',
  disabled = false,
  explanation,
  inputPlaceholder = 'Type your answer here...',
  arrangeHelperText = 'Drag items from the Available Options pool into the Arrange Drop Area, or reorder them into sequence',
  onChange,
  onSubmit,
  onReset,
  className = '',
}: QuestionBuilderProps) {
  const getInitialValue = (): QuestionAnswerValue => {
    if (defaultValue !== undefined) return defaultValue
    if (type === 'type') return ''
    if (type === 'arrange') return []
    return []
  }

  const [internalValue, setInternalValue] = useState<QuestionAnswerValue>(getInitialValue)
  const [internalIsSubmitted, setInternalIsSubmitted] = useState<boolean>(false)
  const [draggingItemId, setDraggingItemId] = useState<string | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [isDropZoneOver, setIsDropZoneOver] = useState<boolean>(false)

  const isControlledValue = controlledValue !== undefined
  const currentValue = isControlledValue ? controlledValue : internalValue

  const isControlledSubmitted = controlledIsSubmitted !== undefined
  const isSubmitted = isControlledSubmitted ? controlledIsSubmitted : internalIsSubmitted

  const currentSize = sizeStyles[size]

  const updateValue = (nextVal: QuestionAnswerValue) => {
    if (!isControlledValue) {
      setInternalValue(nextVal)
    }
    onChange?.(nextVal)
  }

  const handleOptionClick = (optionId: string) => {
    if (disabled || isSubmitted) return

    if (type === 'single') {
      const selected = Array.isArray(currentValue) ? currentValue : []
      const nextSelected = selected.includes(optionId) ? [] : [optionId]
      updateValue(nextSelected)
    } else if (type === 'multiple') {
      const selected = Array.isArray(currentValue) ? currentValue : []
      const nextSelected = selected.includes(optionId)
        ? selected.filter((id) => id !== optionId)
        : [...selected, optionId]
      updateValue(nextSelected)
    }
  }

  const handleMoveArrangeItem = (index: number, direction: 'up' | 'down') => {
    if (disabled || isSubmitted) return
    const order = Array.isArray(currentValue) ? [...currentValue] : []
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= order.length) return

    const temp = order[index]
    order[index] = order[targetIndex]
    order[targetIndex] = temp
    updateValue(order)
  }

  const handleAddToArrange = (itemId: string, targetIndex?: number) => {
    if (disabled || isSubmitted) return
    const order = Array.isArray(currentValue) ? [...currentValue] : []
    if (order.includes(itemId)) {
      if (targetIndex !== undefined) {
        const fromIndex = order.indexOf(itemId)
        order.splice(fromIndex, 1)
        order.splice(targetIndex, 0, itemId)
        updateValue(order)
      }
      return
    }

    if (targetIndex !== undefined && targetIndex >= 0 && targetIndex <= order.length) {
      order.splice(targetIndex, 0, itemId)
    } else {
      order.push(itemId)
    }
    updateValue(order)
  }

  const handleRemoveFromArrange = (itemId: string) => {
    if (disabled || isSubmitted) return
    const order = Array.isArray(currentValue) ? [...currentValue] : []
    const nextOrder = order.filter((id) => id !== itemId)
    updateValue(nextOrder)
  }

  const handleDragStart = (e: DragEvent<HTMLDivElement>, itemId: string) => {
    if (disabled || isSubmitted) return
    e.dataTransfer.setData('text/plain', itemId)
    e.dataTransfer.effectAllowed = 'move'
    setDraggingItemId(itemId)
  }

  const handleDragEnd = () => {
    setDraggingItemId(null)
    setDragOverIndex(null)
    setIsDropZoneOver(false)
  }

  const handleDropOnZone = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDropZoneOver(false)
    const itemId = e.dataTransfer.getData('text/plain') || draggingItemId
    if (itemId) {
      handleAddToArrange(itemId)
    }
    setDraggingItemId(null)
    setDragOverIndex(null)
  }

  const handleDropOnSlot = (e: DragEvent<HTMLDivElement>, targetIndex: number) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDropZoneOver(false)
    setDragOverIndex(null)
    const itemId = e.dataTransfer.getData('text/plain') || draggingItemId
    if (itemId) {
      handleAddToArrange(itemId, targetIndex)
    }
    setDraggingItemId(null)
  }

  const checkIsCorrect = (): boolean => {
    if (type === 'type') {
      const userText = String(currentValue).trim().toLowerCase()
      if (Array.isArray(correctAnswer)) {
        return correctAnswer.some((ans) => String(ans).trim().toLowerCase() === userText)
      }
      return String(correctAnswer).trim().toLowerCase() === userText
    }

    if (type === 'arrange') {
      const currentOrder = Array.isArray(currentValue) ? currentValue : []
      const expectedOrder = Array.isArray(correctAnswer) ? correctAnswer : []
      if (currentOrder.length !== expectedOrder.length) return false
      return currentOrder.every((id, idx) => id === expectedOrder[idx])
    }

    const selected = Array.isArray(currentValue) ? currentValue : []
    const expected = Array.isArray(correctAnswer) ? correctAnswer : [String(correctAnswer)]
    if (selected.length !== expected.length) return false
    return selected.every((id) => expected.includes(id))
  }

  const handleSubmit = () => {
    if (disabled || isSubmitted) return

    if (type === 'type') {
      if (!String(currentValue).trim()) return
    } else if (type === 'single' || type === 'multiple') {
      if (!Array.isArray(currentValue) || currentValue.length === 0) return
    } else if (type === 'arrange') {
      const placed = Array.isArray(currentValue) ? currentValue : []
      if (placed.length === 0) return
    }

    const correct = checkIsCorrect()
    if (!isControlledSubmitted) {
      setInternalIsSubmitted(true)
    }
    onSubmit?.(currentValue, correct)
  }

  const handleReset = () => {
    if (disabled) return
    const initial = getInitialValue()
    if (!isControlledValue) {
      setInternalValue(initial)
    }
    if (!isControlledSubmitted) {
      setInternalIsSubmitted(false)
    }
    onChange?.(initial)
    onReset?.()
  }

  const isFormValid = (): boolean => {
    if (type === 'type') {
      return Boolean(String(currentValue).trim())
    }
    if (type === 'arrange') {
      return Array.isArray(currentValue) && currentValue.length > 0
    }
    return Array.isArray(currentValue) && currentValue.length > 0
  }

  const isAnswerCorrect = isSubmitted && checkIsCorrect()
  const arrangedIds = Array.isArray(currentValue) ? (currentValue as string[]) : []
  const poolItems = options.filter((opt) => !arrangedIds.includes(opt.id))

  return (
    <div className={`flex flex-col gap-6 w-full ${className}`}>
      <div className="flex items-start gap-2.5">
        {questionNumber !== undefined && (
          <span className={`${currentSize.questionText} text-[var(--color-secondary)] font-bold shrink-0`}>
            {questionNumber}.
          </span>
        )}
        <h3 className={`${currentSize.questionText} text-[var(--color-text-primary)] leading-relaxed tracking-tight`}>
          {questionText}
        </h3>
      </div>

      {(type === 'single' || type === 'multiple') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => {
            const selectedList = Array.isArray(currentValue) ? currentValue : []
            const isSelected = selectedList.includes(option.id)
            const expectedList = Array.isArray(correctAnswer) ? correctAnswer : [String(correctAnswer)]
            const isCorrect = expectedList.includes(option.id)

            let containerStyle = ''
            let badgeStyle = ''
            let textStyle = ''
            let showCheckIcon = false
            let showCrossIcon = false

            if (isSubmitted) {
              if (isCorrect) {
                containerStyle = 'bg-[#009966] text-white border-transparent shadow-sm'
                badgeStyle = 'bg-white text-[#009966]'
                textStyle = 'text-white'
                showCheckIcon = true
              } else if (isSelected && !isCorrect) {
                containerStyle = 'bg-[#F25C5C] text-white border-transparent shadow-sm'
                badgeStyle = 'bg-white text-[#F25C5C]'
                textStyle = 'text-white'
                showCrossIcon = true
              } else {
                containerStyle = 'bg-[var(--color-cardbg)] border-[1.5px] border-[var(--color-border-light)] opacity-70'
                badgeStyle = 'border-[1.5px] border-slate-300 text-slate-400 bg-transparent'
                textStyle = 'text-slate-500'
              }
            } else if (isSelected) {
              containerStyle = 'bg-[var(--color-primary)]/10 border-[var(--color-primary)] shadow-xs'
              badgeStyle = 'border-[1.5px] border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-cardbg)]'
              textStyle = 'text-[var(--color-text-primary)] font-semibold'
            } else {
              containerStyle = 'bg-[var(--color-cardbg)] border-[1.5px] border-[var(--color-border-light)] hover:border-slate-400'
              badgeStyle = 'border-[1.5px] border-slate-300 text-slate-400 bg-transparent'
              textStyle = 'text-slate-500'
            }

            const optionLabel = option.label || String.fromCharCode(65 + index)

            return (
              <button
                key={option.id}
                type="button"
                disabled={disabled || isSubmitted}
                onClick={() => handleOptionClick(option.id)}
                className={`
                  group relative flex items-center justify-between text-left border transition-all duration-200 cursor-pointer
                  ${currentSize.optionBox}
                  ${containerStyle}
                  ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
                `}
              >
                <div className="flex items-center gap-3.5 sm:gap-4 overflow-hidden">
                  <div
                    className={`
                      flex items-center justify-center shrink-0 transition-colors duration-150
                      ${currentSize.badgeSize}
                      ${badgeStyle}
                    `}
                  >
                    {optionLabel}
                  </div>

                  <span className={`${currentSize.optionText} ${textStyle} truncate`}>
                    {option.text}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 pl-2">
                  {showSelectionIndicator && !isSubmitted && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOptionClick(option.id)
                      }}
                    >
                      {type === 'multiple' ? (
                        <Checkbox
                          checked={isSelected}
                          readOnly
                          size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
                        />
                      ) : (
                        <Radio
                          checked={isSelected}
                          readOnly
                          name={`qb-${questionNumber || 'radio'}`}
                          size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
                        />
                      )}
                    </div>
                  )}

                  {showCheckIcon && (
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Check size={16} />
                    </div>
                  )}

                  {showCrossIcon && (
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <X size={16} />
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      )}

      {type === 'type' && (
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="relative">
            <input
              type="text"
              disabled={disabled || isSubmitted}
              value={String(currentValue)}
              placeholder={inputPlaceholder}
              onChange={(e) => updateValue(e.target.value)}
              className={`
                w-full border font-medium transition-all duration-150 outline-none
                ${currentSize.inputBox}
                ${
                  isSubmitted
                    ? isAnswerCorrect
                      ? 'border-[#009966] bg-[#009966]/10 text-[#009966]'
                      : 'border-[#F25C5C] bg-[#F25C5C]/10 text-[#F25C5C]'
                    : 'border-[var(--color-border-light)] bg-[var(--color-cardbg)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20'
                }
                ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
              `}
            />

            {isSubmitted && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                {isAnswerCorrect ? (
                  <div className="w-6 h-6 rounded-full bg-[#009966] text-white flex items-center justify-center">
                    <Check size={14} />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#F25C5C] text-white flex items-center justify-center">
                    <X size={14} />
                  </div>
                )}
              </div>
            )}
          </div>

          {isSubmitted && !isAnswerCorrect && (
            <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium">
              Expected Answer:{' '}
              <span className="text-[#009966] font-bold">
                {Array.isArray(correctAnswer) ? correctAnswer.join(' or ') : String(correctAnswer)}
              </span>
            </div>
          )}
        </div>
      )}

      {type === 'arrange' && (
        <div className="flex flex-col gap-5 w-full">
          {arrangeHelperText && (
            <span className="text-xs text-[var(--color-text-tertiary)] font-medium">
              {arrangeHelperText}
            </span>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                  Available Items Pool ({poolItems.length})
                </span>
                <span className="text-[11px] text-[var(--color-text-tertiary)]">
                  Drag or click + to add
                </span>
              </div>

              <div className="flex flex-col gap-2.5 min-h-[160px] p-3 rounded-[var(--radius-xl)] bg-[var(--color-background)]/80 border border-dashed border-[var(--color-border-light)]">
                {poolItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full py-8 text-center text-xs text-[var(--color-text-tertiary)]">
                    All items moved to the arrange area
                  </div>
                ) : (
                  poolItems.map((item) => (
                    <div
                      key={item.id}
                      draggable={!disabled && !isSubmitted}
                      onDragStart={(e) => handleDragStart(e, item.id)}
                      onDragEnd={handleDragEnd}
                      onClick={() => handleAddToArrange(item.id)}
                      className={`
                        group flex items-center justify-between border bg-[var(--color-cardbg)] transition-all duration-150 cursor-grab active:cursor-grabbing select-none
                        ${currentSize.optionBox}
                        border-[var(--color-border-light)] hover:border-[var(--color-primary)] hover:shadow-xs
                        ${draggingItemId === item.id ? 'opacity-40 scale-95 border-dashed border-[var(--color-primary)]' : ''}
                        ${disabled || isSubmitted ? 'cursor-not-allowed opacity-60' : ''}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-0.5 text-slate-300 group-hover:text-[var(--color-primary)] transition-colors">
                          <div className="w-3.5 h-0.5 bg-current rounded-full" />
                          <div className="w-3.5 h-0.5 bg-current rounded-full" />
                          <div className="w-3.5 h-0.5 bg-current rounded-full" />
                        </div>
                        <span className={`${currentSize.optionText} text-[var(--color-text-primary)] font-medium`}>
                          {item.text}
                        </span>
                      </div>

                      {!isSubmitted && !disabled && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleAddToArrange(item.id)
                          }}
                          className="px-2 py-1 text-xs font-bold rounded-[var(--radius-sm)] bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer"
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Arrange Space Area ({arrangedIds.length} / {options.length})
                </span>
                {arrangedIds.length > 0 && !isSubmitted && !disabled && (
                  <button
                    type="button"
                    onClick={() => updateValue([])}
                    className="text-xs text-[var(--color-accent)] hover:underline font-semibold cursor-pointer flex items-center gap-1"
                  >
                    <RotateLeft size={13} /> Reset Order
                  </button>
                )}
              </div>

              <div
                onDragOver={(e) => {
                  e.preventDefault()
                  e.dataTransfer.dropEffect = 'move'
                  setIsDropZoneOver(true)
                }}
                onDragLeave={() => setIsDropZoneOver(false)}
                onDrop={handleDropOnZone}
                className={`
                  flex flex-col gap-2.5 min-h-[160px] p-3 rounded-[var(--radius-xl)] transition-all duration-200
                  ${
                    isDropZoneOver
                      ? 'bg-[var(--color-primary)]/10 border-2 border-dashed border-[var(--color-primary)]'
                      : 'bg-[var(--color-cardbg)] border-2 border-dashed border-[var(--color-border-light)]'
                  }
                `}
              >
                {arrangedIds.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-sm font-semibold text-[var(--color-text-secondary)]">
                      Drop Here to Arrange
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1 max-w-xs">
                      Drag lines from the pool and drop them here in your intended sequential order
                    </p>
                  </div>
                ) : (
                  arrangedIds.map((itemId, idx, arr) => {
                    const item = options.find((opt) => opt.id === itemId) || { id: itemId, text: itemId }
                    const expectedList = Array.isArray(correctAnswer) ? correctAnswer : []
                    const isItemInCorrectPosition = isSubmitted && expectedList[idx] === itemId

                    return (
                      <div
                        key={itemId}
                        draggable={!disabled && !isSubmitted}
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => {
                          e.preventDefault()
                          setDragOverIndex(idx)
                        }}
                        onDragLeave={() => setDragOverIndex(null)}
                        onDrop={(e) => handleDropOnSlot(e, idx)}
                        className={`
                          group relative flex items-center justify-between border transition-all duration-150 select-none
                          ${currentSize.optionBox}
                          ${
                            isSubmitted
                              ? isItemInCorrectPosition
                                ? 'border-[#009966] bg-[#009966]/10 text-[var(--color-text-primary)]'
                                : 'border-[#F25C5C] bg-[#F25C5C]/10 text-[var(--color-text-primary)]'
                              : 'border-[var(--color-border-light)] bg-[var(--color-background)]/50 hover:bg-[var(--color-cardbg)] hover:border-[var(--color-primary)] shadow-2xs'
                          }
                          ${dragOverIndex === idx ? 'border-t-4 border-t-[var(--color-primary)] scale-[1.01]' : ''}
                          ${draggingItemId === itemId ? 'opacity-30' : ''}
                          ${!isSubmitted && !disabled ? 'cursor-grab active:cursor-grabbing' : ''}
                        `}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <span
                            className={`
                              w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0
                              ${
                                isSubmitted
                                  ? isItemInCorrectPosition
                                    ? 'bg-[#009966] text-white'
                                    : 'bg-[#F25C5C] text-white'
                                  : 'bg-[var(--color-secondary)] text-white'
                              }
                            `}
                          >
                            {idx + 1}
                          </span>

                          <span className={`${currentSize.optionText} text-[var(--color-text-primary)] font-medium truncate`}>
                            {item.text}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 pl-2">
                          {!isSubmitted && (
                            <>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  disabled={disabled || idx === 0}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleMoveArrangeItem(idx, 'up')
                                  }}
                                  className="p-1 rounded-[var(--radius-sm)] border border-[var(--color-border-light)] hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-[var(--color-text-secondary)]"
                                  aria-label="Move item up"
                                >
                                  <ArrowUp size={13} />
                                </button>
                                <button
                                  type="button"
                                  disabled={disabled || idx === arr.length - 1}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleMoveArrangeItem(idx, 'down')
                                  }}
                                  className="p-1 rounded-[var(--radius-sm)] border border-[var(--color-border-light)] hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-[var(--color-text-secondary)]"
                                  aria-label="Move item down"
                                >
                                  <ArrowDown size={13} />
                                </button>
                              </div>

                              <button
                                type="button"
                                disabled={disabled}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleRemoveFromArrange(itemId)
                                }}
                                className="w-6 h-6 rounded-[var(--radius-sm)] text-slate-400 hover:text-[var(--color-error)] hover:bg-red-50 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Remove item"
                              >
                                <X size={14} />
                              </button>
                            </>
                          )}

                          {isSubmitted && (
                            <div>
                              {isItemInCorrectPosition ? (
                                <div className="w-6 h-6 rounded-full bg-[#009966] text-white flex items-center justify-center">
                                  <Check size={14} />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-[#F25C5C] text-white flex items-center justify-center">
                                  <X size={14} />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isSubmitted && explanation && (
        <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-background)] border border-[var(--color-border-light)] text-xs sm:text-sm text-[var(--color-text-secondary)]">
          <p className="font-bold text-[var(--color-text-primary)] mb-1">Explanation:</p>
          <p>{explanation}</p>
        </div>
      )}

      {showSubmitButton && (
        <div className="flex items-center gap-3 pt-2">
          {!isSubmitted ? (
            <Button
              type="button"
              variant="secondary"
              size={currentSize.buttonSize}
              disabled={disabled || !isFormValid()}
              onClick={handleSubmit}
            >
              Check Answer
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              size={currentSize.buttonSize}
              disabled={disabled}
              onClick={handleReset}
            >
              Try Again
            </Button>
          )}

          {isSubmitted && (
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              {isAnswerCorrect ? (
                <span className="text-[#009966] flex items-center gap-1">
                  <Check size={16} /> Correct sequence! Excellent job.
                </span>
              ) : (
                <span className="text-[#F25C5C] flex items-center gap-1">
                  <X size={16} /> Incorrect order. Review the highlighted step positions.
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default QuestionBuilder