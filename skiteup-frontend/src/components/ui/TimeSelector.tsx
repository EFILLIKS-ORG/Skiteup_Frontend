import React, { useState } from "react";
import Count from "@/components/ui/Count";
import type { TimeSelectorProps, TimeValue, TimePeriod } from "@/types/timeSelector";

const parseTimeString = (timeStr: string): TimeValue => {
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (match) {
    return {
      hour: Math.min(Math.max(parseInt(match[1], 10), 1), 12),
      minute: Math.min(Math.max(parseInt(match[2], 10), 0), 59),
      period: match[3].toUpperCase() as TimePeriod,
    };
  }
  return { hour: 10, minute: 30, period: "AM" };
};

const normalizeTime = (val?: TimeValue | string): TimeValue | undefined => {
  if (!val) return undefined;
  if (typeof val === "string") {
    return parseTimeString(val);
  }
  return val;
};

const formatTimeString = (time: TimeValue): string => {
  const paddedMinute = time.minute.toString().padStart(2, "0");
  return `${time.hour}:${paddedMinute} ${time.period}`;
};

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  value: controlledValue,
  defaultValue = { hour: 10, minute: 30, period: "AM" },
  onChange,
  label,
  minuteStep = 1,
  disabled = false,
  className = "",
}) => {
  const initialTime = normalizeTime(defaultValue) || { hour: 10, minute: 30, period: "AM" };
  const [internalTime, setInternalTime] = useState<TimeValue>(initialTime);

  const currentTime = normalizeTime(controlledValue) || internalTime;

  const updateTime = (newTime: TimeValue) => {
    if (disabled) return;
    if (controlledValue === undefined) {
      setInternalTime(newTime);
    }
    onChange?.(newTime, formatTimeString(newTime));
  };

  const handlePeriodToggle = () => {
    const nextPeriod: TimePeriod = currentTime.period === "AM" ? "PM" : "AM";
    updateTime({ ...currentTime, period: nextPeriod });
  };

  return (
    <div className={`inline-flex flex-col gap-1.5 w-full sm:w-auto ${className}`}>
      {label && (
        <span className="text-xs font-(--font-weight-medium) text-(--color-text-secondary)">
          {label}
        </span>
      )}

      <div
        className={`
          inline-flex
          items-center
          gap-1.5
          p-1
          rounded-(--radius-xl)
          border
          border-(--color-border-light)
          bg-(--color-cardbg)
          transition-colors
          w-full
          sm:w-auto
          justify-center
          sm:justify-start
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <Count
          variant="filled"
          value={currentTime.hour}
          min={1}
          max={12}
          loop
          disabled={disabled}
          formatValue={(h) => h.toString().padStart(2, "0")}
          onChange={(newHour) => updateTime({ ...currentTime, hour: newHour })}
        />

        <Count
          variant="filled"
          value={currentTime.minute}
          min={0}
          max={59}
          step={minuteStep}
          loop
          disabled={disabled}
          formatValue={(m) => m.toString().padStart(2, "0")}
          onChange={(newMinute) => updateTime({ ...currentTime, minute: newMinute })}
        />

        <Count
          variant="filled"
          displayValue={currentTime.period}
          disabled={disabled}
          onIncrement={handlePeriodToggle}
          onDecrement={handlePeriodToggle}
        />
      </div>
    </div>
  );
};

export default TimeSelector;
