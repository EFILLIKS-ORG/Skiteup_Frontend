import React from 'react';
import {
  badgeVariantStyles,
  type BadgeProps,
} from '../../../utils/utils';

export function Badge({
  children,
  variant,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        h-[18px]
        items-center
        rounded-[6.25px]
        border
        border-[rgba(255,255,255,0.2)]
        px-[5px]
        font-['Poppins',sans-serif]
        text-[12px]
        font-semibold
        leading-[18px]
        uppercase
        ${badgeVariantStyles[variant]}
        ${className}
      `
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {children}
    </span>
  );
}

export default Badge;