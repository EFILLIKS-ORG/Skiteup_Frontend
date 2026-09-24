import React, { useState } from 'react';
import { Search, X } from 'reicon-react';
import { type SearchBarProps, sizeStyles, iconSizes } from '../../types/searchbar';

export const SearchBar: React.FC<SearchBarProps> = ({
  size = 'md',
  value,
  defaultValue,
  onClear,
  className = '',
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : '',
  );
  const currentVal = value !== undefined ? value : uncontrolledValue;

  const hasValue = String(currentVal).length > 0;

  return (
    <div
      className={`group flex w-full items-center rounded-(--radius-md) border bg-(--color-cardbg) transition-colors ${
        hasValue ? 'border-(--color-secondary)' : 'border-(--color-border)'
      } focus-within:border-(--color-secondary) ${sizeStyles[size]} ${className}`}
    >
      <Search
        size={iconSizes[size]}
        className={`ml-4 shrink-0 transition-colors ${
          hasValue ? 'text-(--color-secondary)' : 'text-(--color-text-tertiary)'
        } group-focus-within:text-(--color-secondary)`}
      />

      <input
        value={value}
        defaultValue={defaultValue}
        className="min-w-0 flex-1 bg-transparent px-2 text-(--color-text-primary) outline-none placeholder:text-(--color-text-placeholder) disabled:cursor-not-allowed"
        onChange={(e) => {
          if (value === undefined) setUncontrolledValue(e.target.value);
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        {...props}
      />

      {hasValue && onClear && (
        <button
          type="button"
          onClick={() => {
            if (value === undefined) setUncontrolledValue('');
            onClear();
          }}
          className="mr-2 flex shrink-0 items-center justify-center rounded-full p-1 text-(--color-text-secondary) hover:bg-(--color-background) hover:text-(--color-text-primary)"
          aria-label="Clear search"
        >
          <X size={iconSizes[size]} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
