import React from 'react';
import type { confirmDialogProps } from '../../../utils/utils';

const ConfirmDialog = ({
  open,
  title = 'Are you sure?',
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  varient = 'primary',
  onConfirm,
  onCancel,
  children,
  className = '',
}: confirmDialogProps) => {
  if (!open) return null;

  const confirmButtonStyles =
    varient === 'danger' ? 'bg-red-600 hover:bg-red-700' : 'bg-[#0B3A60] hover:bg-[#082a47]';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onCancel}
    >
      <div
        className={`w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ${className}`}
        onClick={(event) => event.stopPropagation()}
      >
        {title && <h2 className="text-lg font-semibold text-[#0B3A60]">{title}</h2>}

        {description && <p className="mt-2 text-sm text-grey-600">{description}</p>}
        {children && <div className="mt-4">{children}</div>}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-grey-300 px-4 py-4 text-sm font-medium text-gray-700 hover:bg-grey-50 transition-colors"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`rounded-lg bg-[#0B3A60] px-4 py-2 text-sm font-medium text-white transition-colrs ${confirmButtonStyles}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
