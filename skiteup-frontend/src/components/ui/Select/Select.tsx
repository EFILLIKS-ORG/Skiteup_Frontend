import React, { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SelectProps } from "../../../utils/utils";


export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, options, error, id, className = '', ...props }, ref) => {
        const generatedId = useId();
        const selectId = id || generatedId;

        return (
            <div className="flex w-full flex-col gap-[8.81px]">
                {label && (
                    <label
                        htmlFor={selectId}
                        className="font-['Poppins',sans-serif] text-[16px] font-semibold leading-[24px] text-[#191B23] cursor-pointer"
                    >
                        {label}
                    </label>
                )}

                <div className="relative w-full">
                    <select
                        ref={ref}
                        id={selectId}
                        className={`
              h-[38px]
              w-full
              appearance-none
              rounded-[5px]
              border-[1.10144px]
              border-[rgba(0,0,0,0.1)]
              bg-white
              px-5
              pr-12
              font-['Poppins',sans-serif]
              text-[14px]
              font-semibold
              leading-[21px]
              text-[rgba(0,0,0,0.8)]
              outline-none
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
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <ChevronDown
                        size={24}
                        strokeWidth={2}
                        className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.7)]"
                        aria-hidden="true"
                    />
                </div>

                {error && (
                    <span className="text-[12px] text-red-500">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;