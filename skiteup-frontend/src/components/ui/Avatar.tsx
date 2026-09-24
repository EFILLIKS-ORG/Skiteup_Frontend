import React from "react";
import { sizeStyles, type AvatarProps } from "../../types/avatar";

export const Avatar: React.FC<AvatarProps> = ({
    initials,
    size = "md",
}) => {
    return (
        <div
            className={`${sizeStyles[size]} flex items-center justify-center rounded-full bg-(--color-primary) text-(--color-text-inverse) font-(--font-weight-medium) border border-(--color-border-light) shadow-sm shrink-0`}
        >
            {initials}
        </div>
    );
};

export default Avatar;