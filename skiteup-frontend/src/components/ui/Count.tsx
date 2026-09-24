import React, { useState } from "react";
import { AngleUp, AngleDown } from "reicon-react";
import type { CountProps } from "@/types/count";

export const Count: React.FC<CountProps> = ({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  label,
  variant = "outlined",
  disabled = false,
  className = "",
  formatValue,
  displayValue,
  loop = false,
  onIncrement,
  onDecrement,
}) => {
  const [internalValue, setInternalValue] = useState<number>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const updateValue = (nextVal: number) => {
    if (disabled) return;
    let finalVal = nextVal;
    if (loop && min !== -Infinity && max !== Infinity) {
      if (finalVal > max) finalVal = min;
      else if (finalVal < min) finalVal = max;
    } else {
      finalVal = Math.min(Math.max(finalVal, min), max);
    }
    if (!isControlled) {
      setInternalValue(finalVal);
    }
    onChange?.(finalVal);
  };

  const handleIncrement = () => {
    if (disabled) return;
    if (onIncrement) {
      onIncrement();
    } else {
      updateValue(currentValue + step);
    }
  };

  const handleDecrement = () => {
    if (disabled) return;
    if (onDecrement) {
      onDecrement();
    } else {
      updateValue(currentValue - step);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      updateValue(val);
    }
  };

  const isMin = !loop && currentValue <= min;
  const isMax = !loop && currentValue >= max;

  const variantStyles =
    variant === "filled"
      ? "bg-(--color-primary)/5 border-transparent"
      : "bg-(--color-cardbg) border-(--color-border-light)";

  const formattedDisplay = displayValue ?? (formatValue ? formatValue(currentValue) : undefined);

  return (
    <div className={`inline-flex flex-col gap-1.5 ${className}`}>
      {label && (
        <span className="text-(--text-xs) font-(--font-weight-medium) text-(--color-text-secondary)">
          {label}
        </span>
      )}
      <div
        className={`
          inline-flex
          items-center
          justify-between
          gap-2
          h-10
          sm:h-11
          min-w-[70px]
          sm:min-w-[76px]
          pl-2
          pr-1
          py-1
          rounded-(--radius-lg)
          border
          transition-colors
          ${variantStyles}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        {formattedDisplay !== undefined ? (
          <span className="text-(--text-lg) font-(--font-weight-medium) text-(--color-secondary) select-none">
            {formattedDisplay}
          </span>
        ) : (
          <input
            type="number"
            value={currentValue}
            onChange={handleInputChange}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            className="
              w-10
              bg-transparent
              text-(--text-lg)
              font-(--font-weight-medium)
              text-(--color-secondary)
              outline-none
              [appearance:textfield]
              [&::-webkit-outer-spin-button]:appearance-none
              [&::-webkit-inner-spin-button]:appearance-none
              disabled:cursor-not-allowed
            "
          />
        )}

        <div className="flex flex-col items-center justify-center bg-(--color-background)/60 rounded-(--radius-md) overflow-hidden p-0.5 ">
          <button
            type="button"
            onClick={handleIncrement}
            disabled={disabled || (!onIncrement && isMax)}
            aria-label="Increment count"
            className="
              flex
              items-center
              justify-center
              p-0.5
              rounded-(--radius-xs)
              text-(--color-secondary)
              active:scale-95
              transition-all
              disabled:opacity-40
              disabled:cursor-not-allowed
              disabled:hover:bg-transparent
            "
          >
            <AngleUp size={10} />
          </button>
          <div className="w-full h-px my-px" />
          <button
            type="button"
            onClick={handleDecrement}
            disabled={disabled || (!onDecrement && isMin)}
            aria-label="Decrement count"
            className="
              flex
              items-center
              justify-center
              p-0.5
              rounded-(--radius-xs)
              text-(--color-secondary)
              active:scale-95
              transition-all
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            <AngleDown size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
