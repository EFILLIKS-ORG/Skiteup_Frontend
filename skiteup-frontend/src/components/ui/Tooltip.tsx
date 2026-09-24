import type { TooltipPosition, TooltipProps } from "@/types/tooltip";

const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const positionStyles: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
  };

  return (
    <div className="group relative inline-flex">
      {children}

      <div
        className={`
          absolute
          ${positionStyles[position]}
          whitespace-nowrap
          rounded-md
          bg-(--color-disable)
          px-1.5
          py-1
          text-xs
          text-(--color-text-secondary)
          opacity-0
          invisible
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;