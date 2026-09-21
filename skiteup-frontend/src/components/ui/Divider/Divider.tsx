import React from 'react';
import type { DividerProps } from '../../../utils/utils';

export const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className = '' }) => {
  if (orientation === 'vertical') {
    return <div className={`h-full w-px bg-gray-200 ${className}`} />;
  }

  return <div className={`h-px w-full bg-gray-200 ${className}`} />;
};

export default Divider;
