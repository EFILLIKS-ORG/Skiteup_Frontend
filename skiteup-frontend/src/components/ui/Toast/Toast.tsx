import { ToastProps, toastVariantStyles } from '../../../utils/utils';

const Toast = ({ message, variant = 'info', icon, onClose, className = '' }: ToastProps) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-md ${toastVariantStyles[variant]} ${className}`}
      role="alert"
    >
      {icon && <span className="shrink-0">{icon}</span>}

      <p className="flex-1 text-sm font-medium">{message}</p>

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
