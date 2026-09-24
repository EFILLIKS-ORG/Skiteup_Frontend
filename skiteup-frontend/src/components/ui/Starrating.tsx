import React, { useState } from 'react';
import { Star } from 'reicon-react';
import { StarRatingProps } from '../../types/starrating';

export const StarRating: React.FC<StarRatingProps> = ({ maxRating = 5, size = 24, onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (star: number) => {
    console.log('Clicked star:', star);

    setRating(star);
    onChange?.(star);
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const star = index + 1;
        const isSelected = star <= rating;

        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            className="cursor-pointer border-0 bg-transparent p-0"
          >
            <Star
              size={size}
              weight={isSelected ? 'Filled' : 'Outline'}
              className="text-(--color-success) transition-colors"
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
