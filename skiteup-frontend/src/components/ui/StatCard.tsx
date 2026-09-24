import React from "react";
import { User } from "reicon-react";
import type { StatCardProps } from "@/types/statCard";

const isClass = (val?: string) => {
  if (!val) return false;
  return (
    val.startsWith("bg-") ||
    val.startsWith("text-") ||
    val.startsWith("hover:") ||
    val.includes(" ")
  );
};

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  iconBgColor = "bg-(--color-primary)",
  iconColor = "text-(--color-text-inverse)",
  className = "",
  onClick,
}) => {
  const isBgAClass = isClass(iconBgColor);
  const isColorAClass = isClass(iconColor);

  const iconContainerStyle: React.CSSProperties = {
    backgroundColor: !isBgAClass && iconBgColor ? iconBgColor : undefined,
    color: !isColorAClass && iconColor ? iconColor : undefined,
  };

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`
        flex
        items-center
        gap-3
        sm:gap-3.5
        p-2.5
        sm:p-3
        pr-4
        sm:pr-6
        rounded-(--radius-xl)
        border
        border-(--color-border-light)
        bg-(--color-cardbg)
        shadow-xs
        w-full
        sm:w-auto
        min-w-[180px]
        transition-all
        duration-200
        ${
          onClick
            ? "cursor-pointer hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20"
            : "hover:shadow-xs"
        }
        ${className}
      `}
    >
      <div
        style={iconContainerStyle}
        className={`
          flex
          items-center
          justify-center
          w-11
          h-11
          sm:w-13
          sm:h-13
          rounded-(--radius-lg)
          shrink-0
          transition-transform
          duration-200
          ${isBgAClass ? iconBgColor : ""}
          ${isColorAClass ? iconColor : ""}
        `}
      >
        {icon ?? <User size={24} className="sm:scale-110" />}
      </div>

      <div className="flex flex-col justify-center min-w-0 flex-1">
        <span className="text-[11px] sm:text-xs font-(--font-weight-medium) text-(--color-text-tertiary) leading-tight truncate">
          {label}
        </span>
        <span className="text-xl sm:text-2xl font-(--font-weight-bold) text-(--color-text-primary) leading-tight tracking-tight mt-0.5 truncate">
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
