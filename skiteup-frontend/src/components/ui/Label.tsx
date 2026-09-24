import React from "react";
import type { LabelOption, LabelProps, SingleLabelSelectProps } from "@/types/label";

const Label: React.FC<LabelProps> = (props) => {
  const {
    options,
    label,
    disabled = false,
    className = "",
  } = props;

  const getOptionData = (option: LabelOption) => {
    if (typeof option === "string") {
      return { label: option, value: option, disabled: false };
    }
    return {
      label: option.label,
      value: option.value,
      disabled: option.disabled ?? false,
    };
  };

  const isSelected = (val: string) => {
    if (props.multiple) {
      const selectedValues = props.value || [];
      return selectedValues.includes(val);
    }
    return props.value === val;
  };

  const handleToggle = (val: string, optDisabled: boolean) => {
    if (disabled || optDisabled) return;

    if (props.multiple) {
      const selectedValues = props.value || [];
      const newValues = selectedValues.includes(val)
        ? selectedValues.filter((v) => v !== val)
        : [...selectedValues, val];
      props.onChange?.(newValues);
    } else {
      (props as SingleLabelSelectProps).onChange?.(val);
    }
  };

  return (
    <div className={`inline-flex flex-col gap-1.5 w-full sm:w-auto ${className}`}>
      <div
        role="group"
        aria-label={label || "Label Select"}
        className="
          inline-flex
          flex-wrap
          items-center
          gap-1
          rounded-(--radius-lg)
          border
          border-(--color-border-light)
          bg-(--color-cardbg)
          p-1
          shadow-xs
          max-w-full
        "
      >
        {options.map((option) => {
          const { label: optLabel, value: optValue, disabled: optDisabled } = getOptionData(option);
          const active = isSelected(optValue);
          const isDisabled = disabled || optDisabled;

          return (
            <button
              key={optValue}
              type="button"
              disabled={isDisabled}
              onClick={() => handleToggle(optValue, optDisabled)}
              className={`
                flex
                items-center
                justify-center
                rounded-(--radius-md)
                px-3.5
                py-1.5
                text-[13px]
                font-(--font-weight-medium)
                transition-all
                duration-150
                select-none

                ${
                  isDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }

                ${
                  active
                    ? "bg-(--color-primary) text-(--color-text-inverse) shadow-xs"
                    : "text-(--color-secondary) hover:bg-(--color-background) hover:text-(--color-text-primary)"
                }
              `}
            >
              {optLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Label;
