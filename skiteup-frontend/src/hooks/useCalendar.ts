import { useState } from "react";

const useCalendar = (initialDate: Date) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayIndex =
    (new Date(year, month, 1).getDay() + 6) % 7;

  const totalDays =
    new Date(year, month + 1, 0).getDate();

  const previousMonthDays =
    new Date(year, month, 0).getDate();

  const calendarDays = [];

  // Previous month
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    calendarDays.push({
      day: previousMonthDays - i,
      currentMonth: false,
      date: new Date(
        year,
        month - 1,
        previousMonthDays - i
      ),
    });
  }

  // Current month
  for (let day = 1; day <= totalDays; day++) {
    calendarDays.push({
      day,
      currentMonth: true,
      date: new Date(year, month, day),
    });
  }

  // Next month
  let nextDay = 1;

  const totalSlots =
    calendarDays.length > 35 ? 42 : 35;

  while (calendarDays.length < totalSlots) {
    calendarDays.push({
      day: nextDay,
      currentMonth: false,
      date: new Date(year, month + 1, nextDay),
    });

    nextDay++;
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(year, month - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(year, month + 1, 1)
    );
  };

  return {
    currentMonth,
    setCurrentMonth,
    year,
    month,
    calendarDays,
    goToPreviousMonth,
    goToNextMonth,
  };
};

export default useCalendar;