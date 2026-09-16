import React from "react";

export type BadgeVariant = "missed" | "submitted";

export interface BadgeProps {
    children: React.ReactNode;
    variant: BadgeVariant;
    className?: string;
}

export function Badge({
    children,
    variant,
    className = "",
}: BadgeProps) {
    const variantStyles = {
        missed:
            "bg-[rgba(239,37,90,0.0627451)] text-[#EF255A]",
        submitted:
            "bg-[rgba(0,164,63,0.0627451)] text-[#00A43F]",
    };

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
        ${variantStyles[variant]}
        ${className}
      `
                .replace(/\s+/g, " ")
                .trim()}
        >
            {children}
        </span>
    );
}

export default Badge;