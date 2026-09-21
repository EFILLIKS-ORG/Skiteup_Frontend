import React from 'react';
import type { LabelProps } from '../../../utils/utils';

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  required = false,
  className = '',
}) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-black ${className}`}>
      {children}

      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
};

export default Label;
