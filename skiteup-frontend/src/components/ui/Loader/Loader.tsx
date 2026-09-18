import React from "react";
import type { LoaderProps, LoaderSize } from "../../../utils/utils";

const sizeStyles: Record<LoaderSize, string> = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-4',
    lg: 'h-10 w-10 border-4',
};

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
