export type TimePeriod = "AM" | "PM";

export interface TimeValue {
  hour: number;
  minute: number;
  period: TimePeriod;
}

export interface TimeSelectorProps {
  value?: TimeValue | string;
  defaultValue?: TimeValue | string;
  onChange?: (value: TimeValue, formatted: string) => void;
  label?: string;
  minuteStep?: number;
  disabled?: boolean;
  className?: string;
}
