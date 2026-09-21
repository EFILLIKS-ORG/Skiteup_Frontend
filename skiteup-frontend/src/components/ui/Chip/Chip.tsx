import React from 'react';
import { X } from 'lucide-react';
import type { ChipProps } from '../../../utils/utils';

export const Chip: React.FC<ChipProps> = ({ label, onRemove, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 ${className}`}
    >
      {label}

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="rounded-full hover:text-black"
          aria-label={`Remove ${label}`}
        >
          <X size={14} />
        </button>
      )}
    </span>
  );
};

export default Chip;
