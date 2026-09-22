import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../Button';
import type { AssessmentModalProps } from '../../../utils/utils';

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  open,
  isOpen = true,
  onClose,
  asModal = true,
  closeOnBackdropClick = true,
  icon,
  title,
  subtitle,
  description,
  children,
  content,
  actions,
  footer,
  showFooter = true,
  cancelText = 'Cancel',
  confirmText = 'Next',
  onCancel,
  onConfirm,
  showCancelButton = true,
  showConfirmButton = true,
  confirmDisabled = false,
  confirmLoading = false,
  confirmIcon,
  confirmVariant = 'primary',
  headerRight,
  showCloseButton = true,
  className = '',
  cardClassName = '',
  bodyClassName = '',
  maxWidth = 'max-w-[540px]',
  maxHeight = 'max-h-[85vh]',
}) => {
  const isVisible = open !== undefined ? open : isOpen;

  if (asModal && !isVisible) return null;

  const displaySubtitle = subtitle ?? description;
  const handleCancel = onCancel || onClose;

  const cardContent = (
    <div
      className={`relative flex w-full ${maxWidth} ${maxHeight} flex-col overflow-hidden rounded-[26px] border border-slate-200/90 bg-white shadow-2xl transition-all sm:rounded-[28px] ${cardClassName}`.trim()}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="relative flex items-center justify-between bg-[#0B3A60] px-6 py-4.5 text-white select-none sm:px-7 sm:py-5">
        <div className="flex min-w-0 items-center gap-3.5 pr-2 sm:gap-4">
          {icon && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white shadow-inner">
              {icon}
            </div>
          )}

          <div className="flex min-w-0 flex-col">
            <h2 className="truncate font-['Geologica',sans-serif] text-[19px] font-bold leading-tight tracking-tight text-white sm:text-[21px]">
              {title}
            </h2>

            {displaySubtitle && (
              <p className="mt-0.5 truncate text-[12px] font-normal leading-normal text-[#A8C7DF] sm:text-[13px]">
                {displaySubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Header Right / Close Button */}
        <div className="flex shrink-0 items-center gap-2">
          {headerRight}

          {showCloseButton && onClose && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              iconOnly
              aria-label="Close"
              onClick={onClose}
              leftIcon={<X size={20} strokeWidth={2.2} />}
              className="h-9 w-9 rounded-xl bg-white/10 text-white/80 hover:bg-white/20 hover:text-white active:bg-white/30"
            />
          )}
        </div>
      </div>

      {/* Scrollable Body */}
      <div
        className={`flex-1 overflow-y-auto px-6 py-5 sm:px-7 sm:py-6 ${bodyClassName}`.trim()}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#CBD5E1 transparent',
        }}
      >
        {content || children}
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-white px-6 py-4.5 sm:px-7 sm:py-5">
          {footer ? (
            footer
          ) : actions ? (
            actions
          ) : (
            <>
              {/* Cancel Button */}
              {showCancelButton && (
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={handleCancel}
                >
                  {cancelText}
                </Button>
              )}

              {/* Confirm / Next Button */}
              {showConfirmButton && (
                <Button
                  type="button"
                  variant={confirmVariant}
                  size="md"
                  disabled={confirmDisabled || confirmLoading}
                  loading={confirmLoading}
                  rightIcon={confirmIcon}
                  onClick={onConfirm}
                  className="font-semibold"
                >
                  {confirmText}
                </Button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );

  {/* Non-modal mode */}
  if (!asModal) {
    return (
      <div className={`flex w-full justify-center ${className}`.trim()}>
        {cardContent}
      </div>
    );
  }

  {/* Modal mode */}
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4 backdrop-blur-[2px] sm:p-6 ${className}`.trim()}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      {cardContent}
    </div>
  );
};

export default AssessmentModal;