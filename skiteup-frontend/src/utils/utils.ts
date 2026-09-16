
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