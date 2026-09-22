import React from 'react';
import type { ScoreDisplayProps } from '../../../utils/utils';

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  total,
  label = 'Score',
  className = '',
}) => {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 text-center ${className}`}>
      <p className="text-sm font-medium text-gray-500">{label}</p>

      <div className="my-2 text-2xl font-bold text-black">
        {score}
        <span className="text-xl font-medium text-gray-400"> / {total}</span>
      </div>
    </div>
  );
};

export default ScoreDisplay;
