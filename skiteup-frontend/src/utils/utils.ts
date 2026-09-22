import type React from 'react';
import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'secondary' | 'tertiary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
}

export type BadgeVariant = 'missed' | 'submitted';

export interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  className?: string;
}

export const badgeVariantStyles: Record<BadgeVariant, string> = {
  missed: 'bg-[rgba(239,37,90,0.0627451)] text-[#EF255A]',
  submitted: 'bg-[rgba(0,164,63,0.0627451)] text-[#00A43F]',
};

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

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export interface IconBoxProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const sizeIconStyles = {
  sm: 'w-8 h-8 rounded-[7px]',
  md: 'w-10 h-10 rounded-[8px]',
  lg: 'w-12 h-12 rounded-[10px]',
};

export interface confirmDialogProps {
  open: boolean;
  title?: String;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  varient?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
  className?: string;
}
export type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderProps {
  size?: LoaderSize;
  className?: string;
  label?: string;
}

export const sizeStyles: Record<LoaderSize, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-4',
  lg: 'h-10 w-10 border-4',
};

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export interface ExtendedPageContainerProps extends PageContainerProps {
  showAura?: boolean;
  showConstellation?: boolean;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const toastVariantStyles: Record<ToastVariant, string> = {
  success: 'border-green-200 bg-green-50 text-green-700',
  error: 'border-red-200 bg-red-50 text-red-700',
  warning: 'border-yellow-200 bg-yellow-50 text-yellow-700',
  info: 'border-blue-200 bg-blue-50 text-blue-700',
};

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ImageUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface AudioUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface VideoUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const sizeAvatarStyles = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
};

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export type NotificationVariant = 'info' | 'success' | 'warning' | 'error';

export interface NotificationProps {
  title?: string;
  message: string;
  variant?: NotificationVariant;
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const variantStyles = {
  info: 'border-blue-200 bg-blue-50 text-blue-800',
  success: 'border-green-200 bg-green-50 text-green-800',
  warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
  error: 'border-red-200 bg-red-50 text-red-800',
};

export interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  backButton?: React.ReactNode;
  className?: string;
}

export interface FilterProps {
  children: React.ReactNode;
  onApply?: () => void;
  onReset?: () => void;
  applyText?: string;
  resetText?: string;
  className?: string;
}

export interface SkiteupLogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export interface StudentSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onSignOut?: () => void;
  studentInitial?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface StudentHeaderProps {
  title?: string;
  subtitle?: string;
  studentName?: string;
  userName?: string;
  regNumber?: string;
  email?: string;
  avatarInitial?: string;
  className?: string;
}

export interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onSignOut?: () => void;
}

export interface TeacherSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onSignOut?: () => void;
}

export interface HeaderProps {
  title?: string;
  userName?: string;
  email?: string;
  avatarInitial?: string;
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
/*Option card*/

export interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
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

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#082944] text-white hover:bg-[#062036] active:bg-[#062036] focus-visible:ring-[#082944]',

  secondary:
    'border border-black/40 bg-transparent text-gray-900 hover:bg-black/5 active:bg-black/10 focus-visible:ring-gray-400',

  tertiary:
    'bg-[#E7000B] text-white hover:bg-[#C90009] active:bg-[#B80008] focus-visible:ring-[#E7000B]',

  outline:
    'border border-[#273469] bg-transparent text-[#273469] hover:bg-[#273469]/5 active:bg-[#273469]/10 focus-visible:ring-[#273469]',

  ghost:
    'bg-transparent text-[#273469] hover:bg-[#273469]/5 active:bg-[#273469]/10 focus-visible:ring-[#273469]',
};

export const buttonSizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[30px] px-3 py-1.5 text-[11px] leading-[14px] rounded-[8px] gap-1.5',

  md: 'h-[35px] px-[20px] py-[10px] text-[12px] leading-[15px] rounded-[10px] gap-[10px]',

  lg: 'h-[42px] px-4 py-3.5 text-sm leading-[21px] rounded-xl gap-2',

  secondary: 'h-[46px] px-[10px] py-[10px] text-sm leading-[21px] rounded-[10px] gap-[5px]',

  tertiary: 'h-[45px] px-[20px] py-[10px] text-sm leading-[21px] rounded-[10px] gap-[10px]',
};

export interface LargeConstellationProps {
  className?: string;
  opacity?: number;
}

export interface AssessmentCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onCreate?: () => void;
}

export interface AssessmentModalProps {
  open?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  asModal?: boolean;
  closeOnBackdropClick?: boolean;

  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  headerRight?: ReactNode;
  showCloseButton?: boolean;
  headerClassName?: string;

  children?: ReactNode;
  content?: ReactNode;
  bodyClassName?: string;

  footer?: ReactNode;
  actions?: ReactNode;
  showFooter?: boolean;
  cancelText?: ReactNode;
  confirmText?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
  confirmIcon?: ReactNode;
  confirmVariant?: ButtonVariant;

  className?: string;
  cardClassName?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export interface WelcomeHeaderProps {
  teacherName: string;
}

export type McqQuestionInputMethod = 'upload' | 'type';

export interface CreateMcqModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    assessmentName: string;
    method: McqQuestionInputMethod;
    file?: File | null;
  }) => void;
}

export type LsrwSectionKey = 'listening' | 'speaking' | 'reading' | 'writing';

export interface CreateLsrwModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    assessmentName: string;
    sections: LsrwSectionKey[];
  }) => void;
}

export interface CreateCodingModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    assessmentName: string;
  }) => void;
}

export interface SectionOption {
  key: LsrwSectionKey;
  label: string;
}