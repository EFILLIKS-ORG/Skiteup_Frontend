import React, { forwardRef, useId } from 'react';
import type { RadioProps } from '../../../utils/utils';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      error,
      id,
      name,
      value,
      checked,
      defaultChecked,
      disabled = false,
      className = '',
      containerClassName = '',
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        <label
          htmlFor={inputId}
          className={`
            group inline-flex items-center gap-[10px] select-none cursor-pointer h-[38px] px-[10px]
            transition-colors duration-150
            ${disabled ? 'cursor-not-allowed opacity-60' : ''}
            ${className}
          `
            .replace(/\s+/g, ' ')
            .trim()}
        >
          <div className="relative flex items-center justify-center shrink-0 w-[20px] h-[20px]">
            <input
              ref={ref}
              type="radio"
              id={inputId}
              name={name}
              value={value}
              checked={checked}
              defaultChecked={defaultChecked}
              disabled={disabled}
              onChange={onChange}
              className="peer sr-only"
              {...props}
            />

            {/* Radio Outer Circle */}
            <div
              className={`
                h-[20px] w-[20px] rounded-full border border-[rgba(0,0,0,0.5)] bg-white
                transition-all duration-150 flex items-center justify-center
                peer-focus-visible:ring-2 peer-focus-visible:ring-[#273469] peer-focus-visible:ring-offset-1
                peer-checked:border-[#273469] peer-checked:[&_div]:scale-100
                peer-disabled:bg-gray-100 peer-disabled:cursor-not-allowed
                group-hover:border-[#273469]
                ${error ? 'border-red-500' : ''}
              `}
            >
              {/* Radio Inner Selected Indicator Dot */}
              <div
                className="h-[10px] w-[10px] rounded-full bg-[#273469] scale-0 transition-transform duration-150"
                aria-hidden="true"
              />
            </div>
          </div>

          {label && (
            <span
              className={`
                font-['Poppins',sans-serif] text-[12px] font-semibold leading-[18px] text-[rgba(11,58,96,0.5)]
                transition-colors duration-150
                group-hover:text-[rgba(11,58,96,0.8)]
                group-has-[:checked]:text-[#0B3A60]
                ${disabled ? 'cursor-not-allowed' : ''}
              `}
            >
              {label}
            </span>
          )}
        </label>

        {error && (
          <span className="text-[12px] text-red-500 font-['Poppins',sans-serif] pl-[10px]">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
