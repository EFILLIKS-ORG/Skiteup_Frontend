
import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export type BadgeVariant = "missed" | "submitted";

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

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
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

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    bordered?: boolean;
}
export interface RadioProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: React.ReactNode;
    error?: string;
    containerClassName?: string;
}
export interface SearchBarProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
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
    icon: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

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

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showPreviousNext?: boolean;
    previousText?: React.ReactNode;
    nextText?: React.ReactNode;
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

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
    size?: AvatarSize;
    className?: string;
}

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export type NotificationVariant = | 'info' | 'success' | 'warning' | 'error';

export interface NotificationProps {
    title?: string;
    message: string;
    variant?: NotificationVariant;
    icon?: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

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