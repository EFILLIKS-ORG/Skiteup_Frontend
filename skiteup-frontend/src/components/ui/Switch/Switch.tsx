import React from 'react';
import type { SwitchProps } from '../../../utils/utils';

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
}) => {
  return (
    <label
      className={`inline-flex items-center gap-3 ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${className}`}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition ${
          checked ? 'bg-[#2F39A9] ' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            checked ? 'left-6' : 'left-1'
          }`}
        />
      </button>

      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </label>
  );
};

export default Switch;
