import React from 'react';
import { LoaderProps, LoaderSize, sizeStyles } from "../../../utils/utils";


export const Loader = ({
    size = 'md',
    className = '',
    label,
}: LoaderProps) => {
    return (
        <div
            className={`flex items-center gap-2 ${className}`}
            role="status"
            aria-label={label || "loading"}
        >
            <div
                className={`animate-spin rounded-full border-gray-300 border-t-[#0B3A60] ${sizeStyles[size]}`} />
            {label && (
                <span className="text-sm text-grey-600">
                    {label}
                </span>
            )}
        </div>
    );
};

export default Loader;
