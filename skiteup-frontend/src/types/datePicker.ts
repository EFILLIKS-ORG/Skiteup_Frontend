export type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date) => void;
  label?: string;
  placeholder?: string;
  className?: string;
};