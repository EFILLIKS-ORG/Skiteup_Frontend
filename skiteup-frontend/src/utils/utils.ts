import type React from 'react';
import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type BadgeVariant = 'missed' | 'submitted';

export interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
}

export interface TabItem {
  label: string;
  value: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}
export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  bordered?: boolean;
}
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
  containerClassName?: string;
}
export interface SearchBarProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> {
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/* Pagination*/

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/* DatePicker*/

export interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  className?: string;
}

/* ExamTimer*/

export interface ExamTimerProps {
  initialSeconds: number;
  onTimeUp?: () => void;
  className?: string;
}

/* QuestionNumber*/

export interface QuestionNumberProps {
  number: number;
  active?: boolean;
  answered?: boolean;
  onClick?: () => void;
  className?: string;
}

/* AnswerOption*/

export interface AnswerOptionProps {
  label: string;
  value: string;
  selected?: boolean;
  onClick: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

/* QuestionCard*/

export interface QuestionCardProps {
  questionNumber: number;
  question: string;
  children: ReactNode;
  marks?: number;
  className?: string;
}

/* Warning*/

export interface WarningProps {
  title?: string;
  message: string;
  className?: string;
}

/* ScoreDisplay*/

export interface ScoreDisplayProps {
  score: number;
  total: number;
  label?: string;
  className?: string;
}

/*StarRating*/

export interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
  className?: string;
}

/* Tooltip*/

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

/* ExportButton*/

export interface ExportButtonProps {
  onClick: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/* Chip*/

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  className?: string;
}

/* Label*/

export interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

/* Switch */

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

/* Divider */

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}
