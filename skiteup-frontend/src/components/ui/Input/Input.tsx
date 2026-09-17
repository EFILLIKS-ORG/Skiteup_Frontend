import React, { forwardRef, useId } from 'react';
import type { InputProps } from "../../../utils/utils";


export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            id,
            className = '',
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const inputId = id || generatedId;

        return (
            <div className="flex w-full flex-col gap-[8.81px]">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="font-['Poppins',sans-serif] text-[16px] font-semibold leading-[24px] text-[#191B23] cursor-pointer"
                    >
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={`
            h-[38px]
            w-full
            rounded-[5px]
            border-[1.10144px]
            border-[rgba(0,0,0,0.1)]
            px-5
            font-['Poppins',sans-serif]
            text-[14px]
            font-normal
            leading-[21px]
            text-[#191B23]
            outline-none
            placeholder:font-normal
            placeholder:text-[rgba(0,0,0,0.5)]
            focus:border-[#273469]
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:opacity-60
            ${error ? 'border-red-500' : ''}
            ${className}
          `
                        .replace(/\s+/g, ' ')
                        .trim()}
                    {...props}
                />

                {error && (
                    <span className="text-[12px] text-red-500">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;