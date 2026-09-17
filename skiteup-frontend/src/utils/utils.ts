
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