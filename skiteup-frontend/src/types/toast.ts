export type ToastType = 'success' | 'error' | 'warning';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
}
