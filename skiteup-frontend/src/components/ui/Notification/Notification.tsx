import { NotificationProps, variantStyles } from '../../../utils/utils';

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
      {icon && <div className="shrink-0">{icon}</div>}

      <div className="flex-1">
        {title && <p className="text-sm font-semibold">{title}</p>}

        <p className="mt-1 text-sm">{message}</p>
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
