import React, { forwardRef, useId } from 'react';
import { Check } from 'lucide-react';
import type { CheckboxProps } from '../../../utils/utils';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      bordered = false,
      id,
      checked,
      defaultChecked,
      disabled = false,
      className = '',
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex flex-col gap-1 w-full">
        <label
          htmlFor={inputId}
          className={`
            group relative flex items-center select-none cursor-pointer
            transition-colors duration-150
            ${
              bordered
                ? 'h-[38px] w-full justify-between rounded-[5px] border-[1.10144px] border-[rgba(0,0,0,0.1)] bg-white px-5'
                : 'inline-flex gap-[11.01px]'
            }
            ${disabled ? 'cursor-not-allowed opacity-60' : ''}
            ${className}
          `
            .replace(/\s+/g, ' ')
            .trim()}
        >
          {label && (
            <span
              className={`
                font-['Poppins',sans-serif] text-[14px] font-semibold leading-[21px] text-[rgba(0,0,0,0.8)]
                ${disabled ? 'cursor-not-allowed' : ''}
              `}
            >
              {label}
            </span>
          )}

          <div className="relative flex items-center justify-center shrink-0 w-[20px] h-[20px]">
            <input
              ref={ref}
              type="checkbox"
              id={inputId}
              checked={checked}
              defaultChecked={defaultChecked}
              disabled={disabled}
              onChange={onChange}
              className="peer sr-only"
              {...props}
            />

            {/* Custom Checkbox Box matching Figma */}
            <div
              className={`
                h-[20px] w-[20px] rounded-[4px] border border-[rgba(0,0,0,0.5)] bg-white
                transition-all duration-150 flex items-center justify-center
                peer-focus-visible:ring-2 peer-focus-visible:ring-[#273469] peer-focus-visible:ring-offset-1
                peer-checked:bg-[#273469] peer-checked:border-[#273469] peer-checked:[&_svg]:opacity-100
                peer-disabled:bg-gray-100 peer-disabled:cursor-not-allowed
                group-hover:border-[#273469]
                ${error ? 'border-red-500' : ''}
              `}
            >
              <Check
                size={14}
                strokeWidth={3}
                className="text-white opacity-0 transition-opacity duration-150"
                aria-hidden="true"
              />
            </div>
          </div>
        </label>

        {error && (
          <span className="text-[12px] text-red-500 font-['Poppins',sans-serif]">{error}</span>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
