import React from "react";
import type { NotificationProps } from '../../../utils/utils';

const variantStyles = {
    info: 'border-blue-200 bg-blue-50 text-blue-800',
    success: 'border-green-200 bg-green-50 text-green-800',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
    error: 'border-red-200 bg-red-50 text-red-800',
};

const Notification = ({
    title,
    message,
    variant = 'info',
    icon,
    onClose,
    className = '',
}: NotificationProps) => {
    return (
        <div
            className={` flex items-start gap-3 rounded-lg border p-4 ${variantStyles[variant]} ${className}`}
            role="alert"
        >
            {icon && (
                <div className="shrink-0">
                    {icon}
                </div>
            )}

            <div className="flex-1">
                {title && (
                    <p className="text-sm font-semibold">
                        {title}
                    </p>
                )}

                <p className="mt-1 text-sm">
                    {message}
                </p>
            </div>

            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    className="shrink-0 text-lg leading-none"
                    aria-label="Close notification"
                >
                    ×
                </button>
            )}
        </div>
    );
};

export default Notification;