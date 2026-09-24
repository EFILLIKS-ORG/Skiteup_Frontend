import type { ReactNode } from 'react'

export type QuestionType = 'single' | 'multiple' | 'type' | 'arrange'
export type QuestionBuilderSize = 'sm' | 'md' | 'lg'

export interface QuestionOption {
  id: string
  label?: string
  text: ReactNode
}

export type QuestionAnswerValue = string | string[]

export interface QuestionBuilderProps {
  type: QuestionType
  questionNumber?: number | string
  questionText: ReactNode
  options?: QuestionOption[]
  correctAnswer: QuestionAnswerValue
  value?: QuestionAnswerValue
  defaultValue?: QuestionAnswerValue
  isSubmitted?: boolean
  showSubmitButton?: boolean
  showSelectionIndicator?: boolean
  size?: QuestionBuilderSize
  disabled?: boolean
  explanation?: ReactNode
  inputPlaceholder?: string
  arrangeHelperText?: string
  onChange?: (val: QuestionAnswerValue) => void
  onSubmit?: (val: QuestionAnswerValue, isCorrect: boolean) => void
  onReset?: () => void
  className?: string
}
