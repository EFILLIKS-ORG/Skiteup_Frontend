import React from 'react';
import type { QuestionCardProps } from '../../../utils/utils';

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  question,
  children,
  marks,
  className = '',
}) => {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-600">Question {questionNumber}</span>

        {marks !== undefined && (
          <span className="text-sm font-medium text-gray-500">
            {marks} {marks === 1 ? 'Mark' : 'Marks'}
          </span>
        )}
      </div>

      <h3 className="mb-6 text-base font-semibold leading-7 text-black">{question}</h3>

      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default QuestionCard;
