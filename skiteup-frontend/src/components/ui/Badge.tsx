import React from "react";
import { type BadgeProps, variantStyles, sizeStyles } from "../../types/badge";

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "primary",
    size = "md",
}) => {
    return (
        <span
            className={`inline-flex items-center justify-center rounded-full font-(--font-weight-medium) whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]}`}
        >
            {children}
        </span>
    );
};

export default Badge;