import React, { useEffect, useState } from 'react';
import type { ExamTimerProps } from '../../../utils/utils';

const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [hours, minutes, remainingSeconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':');
};

export const ExamTimer: React.FC<ExamTimerProps> = ({
  initialSeconds,
  onTimeUp,
  className = '',
}) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      onTimeUp?.();
      return;
    }

    const timer = window.setInterval(() => {
      setSeconds((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [seconds, onTimeUp]);

  return (
    <div
      className={`rounded-lg border border-gray-300 bg-white px-4 py-2 font-mono text-lg font-semibold ${className}`}
    >
      {formatTime(seconds)}
    </div>
  );
};

export default ExamTimer;
