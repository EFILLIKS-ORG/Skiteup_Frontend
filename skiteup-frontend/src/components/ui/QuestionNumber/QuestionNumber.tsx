import React from 'react';
import type { QuestionNumberProps } from '../../../utils/utils';

export const QuestionNumber: React.FC<QuestionNumberProps> = ({
  number,
  active = false,
  answered = false,
  onClick,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition ${
        active
          ? 'bg-[#2F39A9]/80 text-white'
          : answered
            ? 'border-green-500 bg-green-50 text-green-700'
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
      } ${className}`}
    >
      {number}
    </button>
  );
};

export default QuestionNumber;
