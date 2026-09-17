import React, { forwardRef } from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant } from "../../../utils/utils";


const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-[#273469] text-white hover:bg-[#1e2952] active:bg-[#172040] focus-visible:ring-[#273469]',
    secondary:
        'bg-[#EBF0F9] text-[#273469] hover:bg-[#DDE5F4] active:bg-[#C9D7EE] focus-visible:ring-[#273469]',
    outline:
        'border border-[#273469] text-[#273469] bg-transparent hover:bg-[#273469]/5 active:bg-[#273469]/10 focus-visible:ring-[#273469]',
    ghost:
        'text-[#273469] bg-transparent hover:bg-[#273469]/5 active:bg-[#273469]/10 focus-visible:ring-[#273469]',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-[30px] px-3 py-1.5 text-[11px] leading-[14px] rounded-[8px] gap-1.5',
    md: 'h-[35px] px-[20px] py-[10px] text-[12px] leading-[15px] rounded-[10px] gap-[10px]',
    lg: 'h-[42px] px-6 py-3 text-[14px] leading-[18px] rounded-[12px] gap-2.5',
};

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
          disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `
                    .replace(/\s+/g, ' ')
                    .trim()}
                {...props}
            >
                {loading ? (
                    <svg
                        className="animate-spin h-3.5 w-3.5 text-current"
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
                <span>{children}</span>
                {!loading && rightIcon}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
