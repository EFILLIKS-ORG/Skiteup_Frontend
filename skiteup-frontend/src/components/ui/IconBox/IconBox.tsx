import React from 'react';
import type { IconBoxProps } from '../../../utils/utils';

const sizeStyles = {
    sm: 'w-8 h-8 rounded-[7px]',
    md: 'w-10 h-10 rounded-[8px]',
    lg: 'w-12 h-12 rounded-[10px]',
};

export const IconBox = ({
    icon,
    size = 'md',
    className = '',
}: IconBoxProps) => {
    return (
        <div
            className={`flex items-center justify-center shrink-0 bg-[#0B3A60] text-white ${sizeStyles[size]} ${className}`}>
            {icon}
        </div>
    );
};

export default IconBox;