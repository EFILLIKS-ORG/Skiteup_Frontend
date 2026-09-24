import React, { useState } from 'react';
import { Eye, EyeOff } from 'reicon-react';
import { InputProps, sizeStyles } from '../../types/input';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  size = 'md',
  type = 'text',
  className = '',
  id,
  value,
  defaultValue,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : '',
  );

  const currentVal = value !== undefined ? value : uncontrolledValue;

  const isPassword = type === 'password';

  const inputType = isPassword && showPassword ? 'text' : type;

  const hasValue = String(currentVal).length > 0;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-(--text-sm) font-(--font-weight-medium) text-(--color-text-primary)"
        >
          {label}
        </label>
      )}

      <div
        className={`flex w-full items-center rounded-(--radius-md) border bg-(--color-cardbg) transition-colors ${error ? 'border-(--color-error)' : hasValue ? 'border-(--color-secondary)' : 'border-(--color-border)'} focus-within:border-(--color-secondary)`}
      >
        <input
          id={id}
          type={inputType}
          value={value}
          defaultValue={defaultValue}
          className={`min-w-0 flex-1 bg-transparent outline-none text-(--color-text-primary) placeholder:text-(--color-text-placeholder) disabled:cursor-not-allowed disabled:text-(--color-text-tertiary) ${sizeStyles[size]} ${className}`}
          onChange={(e) => {
            if (value === undefined) {
              setUncontrolledValue(e.target.value);
            }
            if (props.onChange) {
              props.onChange(e);
            }
          }}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="mr-3 flex shrink-0 items-center justify-center text-(--color-text-tertiary) transition-colors hover:text-(--color-text-primary) disabled:cursor-not-allowed"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-(--text-xs) font-(--font-weight-regular) text-(--color-error)">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p className="mt-1 text-(--text-xs) font-(--font-weight-regular) text-(--color-text-tertiary)">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
