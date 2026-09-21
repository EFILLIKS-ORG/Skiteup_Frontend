import React from 'react';
import { Star } from 'lucide-react';
import type { StarRatingProps } from '../../../utils/utils';

export const StarRating: React.FC<StarRatingProps> = ({
  value,
  onChange,
  max = 5,
  readOnly = false,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const filled = starValue <= value;

        return (
          <button
            key={starValue}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(starValue)}
            className="disabled:cursor-default"
            aria-label={`${starValue} star`}
          >
            <Star
              size={22}
              fill={filled ? 'currentColor' : 'none'}
              className={filled ? 'text-yellow-500' : 'text-gray-300'}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
