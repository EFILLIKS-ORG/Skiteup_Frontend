import React from 'react';
import type { OptionCardProps } from '../../../utils/utils';

export const OptionCard: React.FC<OptionCardProps> = ({
  icon,
  title,
  description,
  selected = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`
        flex w-full cursor-pointer flex-col items-start
        rounded-2xl p-4 text-left
        transition-all
        ${
          selected
            ? 'border-2 border-[#0B3A60] bg-white shadow-xs'
            : 'border border-slate-200 bg-white hover:border-slate-300'
        }
        ${className}
      `
        .replace(/\s+/g, ' ')
        .trim()}
    >
      <div
        className={`
          mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg
          ${selected ? 'text-[#0B3A60]' : 'text-slate-700'}
        `}
      >
        {icon}
      </div>

      <span
        className={`
          text-[13.5px] font-bold leading-tight
          ${selected ? 'text-[#0B3A60]' : 'text-slate-800'}
        `}
      >
        {title}
      </span>

      <span className="mt-1 text-[11px] leading-tight text-slate-500">
        {description}
      </span>
    </button>
  );
};

export default OptionCard;