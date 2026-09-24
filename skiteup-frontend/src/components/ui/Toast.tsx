import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, X } from 'reicon-react';
import type { ToastProps, ToastType } from '../../types/toast';

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const iconStyles: Record<ToastType, string> = {
    success: 'text-(--color-success)',
    error: 'text-(--color-error)',
    warning: 'text-(--color-warning)',
  };

  const icons: Record<ToastType, React.ReactNode> = {
    success: <CheckCircle size={20} weight="Filled" />,
    error: <XCircle size={20} weight="Filled" />,
    warning: <AlertTriangle size={20} weight="Filled" />,
  };

  return (
    <div
      className={`fixed top-5 right-5 z-50 flex min-w-[280px] max-w-[400px] items-center gap-3 rounded-(--radius-md) border border-(--color-border) bg-(--color-cardbg) px-4 py-3 shadow-lg transition-all duration-500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'}`}
    >
      <div className={`shrink-0 flex items-center justify-center ${iconStyles[type]}`}>
        {icons[type]}
      </div>

      <p className="flex-1 text-(--text-sm) font-(--font-weight-medium) text-(--color-text-primary)">
        {message}
      </p>

      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="shrink-0 cursor-pointer text-(--color-text-tertiary) transition-colors hover:text-(--color-text-primary)"
        aria-label="Close toast"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;
