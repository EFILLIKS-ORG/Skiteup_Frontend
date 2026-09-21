import React from 'react';
import { CalendarDays } from 'lucide-react';
import type { DatePickerProps } from '../../../utils/utils';

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  min,
  max,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm font-medium text-black">{label}</label>}

      <div className="relative">
        <CalendarDays
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          disabled={disabled}
          className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 text-sm outline-none focus:border-black disabled:cursor-not-allowed disabled:bg-gray-100"
        />
      </div>
    </div>
  );
};

export default DatePicker;
