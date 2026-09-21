import React from 'react';
import type { AnswerOptionProps } from '../../../utils/utils';

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  label,
  value,
  selected = false,
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      disabled={disabled}
      className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
        selected ? 'border-[#2F39A9]/50 bg-gray-100' : 'border-gray-300 bg-white hover:bg-gray-50'
      } disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
          selected ? 'border-[#2F39A9] bg-[#2F39A9] text-white' : 'border-gray-400 text-gray-600'
        }`}
      >
        {label}
      </span>

      <span className="text-sm font-medium text-gray-800">{value}</span>
    </button>
  );
};

export default AnswerOption;
