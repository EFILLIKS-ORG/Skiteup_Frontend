import React from 'react';
import { IconBoxProps, sizeIconStyles } from '../../../utils/utils';

export const IconBox = ({
    icon,
    size = 'md',
    className = '',
}: IconBoxProps) => {
    return (
        <div
            className={`flex items-center justify-center shrink-0 bg-[#0B3A60] text-white ${sizeIconStyles[size]} ${className}`}>
            {icon}
        </div>
    );
};

export default IconBox;