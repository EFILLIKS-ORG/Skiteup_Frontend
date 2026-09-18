import type { ToastProps } from '../../../utils/utils';

const variantStyles = {
    success: 'border-green-200 bg-green-50 text-green-700',
    error: 'border-red-200 bg-red-50 text-red-700',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-700',
    info: 'border-blue-200 bg-blue-50 text-blue-700',
};

const Toast = ({
    message,
    variant = 'info',
    icon,
    onClose,
    className = '',
}: ToastProps) => {
    return (
        <div
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-md ${variantStyles[variant]} ${className}`}
            role="alert"
        >
            {icon && (
                <span className="shrink-0">
                    {icon}
                </span>
            )}

            <p className="flex-1 text-sm font-medium">
                {message}
            </p>

            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    className="text-lg leading-none opacity-70 hover:opacity-100"
                    aria-label="Close notification"
                >
                    ×
                </button>
            )}
        </div>
    );
};

export default Toast;