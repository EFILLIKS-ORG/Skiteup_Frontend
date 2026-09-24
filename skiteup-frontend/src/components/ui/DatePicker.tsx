import { useRef, useState } from "react";
import { AngleDown, ArrowLeft, ArrowRight } from "reicon-react";
import type { DatePickerProps } from "@/types/datePicker";
import useCalendar from "@/hooks/useCalendar";
import useClickOutside from "@/hooks/useClickOutside";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const DatePicker = ({
  value = null,
  onChange,
  label,
  placeholder = "Select Date",
  className = "",
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { currentMonth, calendarDays, goToPreviousMonth, goToNextMonth } =
    useCalendar(value || new Date());

  useClickOutside(containerRef, () => setIsOpen(false), isOpen);

  const selectedDate = value;

  const monthName = currentMonth.toLocaleString("en-US", { month: "long" });

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;

    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleDateSelect = (date: Date) => {
    onChange?.(date);
    setIsOpen(false);
  };

  const formattedDisplay = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const activeHeaderDate = selectedDate || currentMonth;

  const headerYear = activeHeaderDate.getFullYear();

  const headerDateString = activeHeaderDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-col gap-1.5 w-full sm:w-auto ${className}`}
    >

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={label || placeholder}
        className="
          flex
          h-11
          w-full
          sm:w-[270px]
          items-center
          justify-between
          rounded-(--radius-lg)
          border
          border-(--color-border-light)
          bg-(--color-cardbg)
          px-3.5
          text-left
          transition-all
          hover:border-(--color-border)
          focus:outline-none
          focus:ring-2
          focus:ring-(--color-primary)/20
        "
      >
        <span
          className={`text-[14px] truncate ${
            formattedDisplay
              ? "font-(--font-weight-medium) text-(--color-text-primary)"
              : "font-(--font-weight-regular) text-(--color-text-placeholder)"
          }`}
        >
          {formattedDisplay || placeholder}
        </span>

        <AngleDown
          size={16}
          className={`text-(--color-text-secondary) transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute
            left-0
            top-[calc(100%+6px)]
            z-50
            w-full
            min-w-[260px]
            sm:w-[270px]
            rounded-(--radius-2xl)
            border
            border-(--color-border-light)
            bg-(--color-background)
            p-2
            shadow-xl
          "
        >
          <div className="px-3.5 pb-2.5 pt-2">
            <span className="block text-(--text-xs) font-(--font-weight-semibold) text-(--color-primary)">
              {headerYear}
            </span>

            <span className="block text-(--text-xs) font-(--font-weight-bold) text-(--color-text-primary)">
              {headerDateString}
            </span>
          </div>

          <div className="rounded-(--radius-xl) bg-(--color-cardbg) p-3 shadow-xs">
            <div className="mb-3 flex items-center justify-between px-1">
              <button
                type="button"
                onClick={goToPreviousMonth}
                aria-label="Previous month"
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-(--radius-full)
                  bg-(--color-background)
                  text-(--color-primary)
                  transition-colors
                  hover:bg-(--color-hover-primary)/20
                "
              >
                <ArrowLeft size={14} strokeWidth={2} />
              </button>

              <span className="text-(--text-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
                {monthName}
              </span>

              <button
                type="button"
                onClick={goToNextMonth}
                aria-label="Next month"
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-(--radius-full)
                  bg-(--color-background)
                  text-(--color-primary)
                  transition-colors
                  hover:bg-(--color-hover-primary)/20
                "
              >
                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </div>

            <div className="mb-1 grid grid-cols-7 text-center">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="
                    text-[12px]
                    font-(--font-weight-medium)
                    text-(--color-text-tertiary)
                  "
                >
                  {day}
                </div>
              ))}
            </div>

            <div
              className="
                grid
                grid-cols-7
                items-center
                justify-items-center
                gap-y-1
                text-center
              "
            >
              {calendarDays.map((item, index) => {
                const selected = isSelected(item.date);

                return (
                  <button
                    key={`${item.date.toISOString()}-${index}`}
                    type="button"
                    onClick={() => handleDateSelect(item.date)}
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-(--radius-md)
                      text-[12px]
                      transition-all

                      ${
                        selected
                          ? "bg-(--color-primary) font-(--font-weight-semibold) text-(--color-text-inverse) shadow-md shadow-(--color-primary)/30"
                          : item.currentMonth
                          ? "font-(--font-weight-medium) text-(--color-text-primary) hover:bg-(--color-background)"
                          : "font-(--font-weight-regular) text-(--color-disable)"
                      }
                    `}
                  >
                    {item.day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;