import React, { forwardRef } from 'react';
import {
  ButtonProps,
  buttonSizeStyles,
  buttonVariantStyles,

} from '../../../utils/utils';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      type = 'button',
      leftIcon,
      rightIcon,
      iconOnly = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={`
          inline-flex flex-row items-center justify-center
          font-['Geologica',sans-serif] font-medium text-center
          transition-colors duration-150 select-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50
          ${buttonVariantStyles[variant]}
          ${buttonSizeStyles[size]}
          ${className}
        `
          .replace(/\s+/g, ' ')
          .trim()}
        {...props}
      >
        {loading ? (
          <svg
            className="h-3.5 w-3.5 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}

        {!iconOnly && <span>{children}</span>}

        {!loading && !iconOnly && rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;