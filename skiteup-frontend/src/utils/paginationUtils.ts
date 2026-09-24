import type { PaginationSize } from "@/types/pagination";

export const DOTS = "...";

export const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): (number | string)[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= totalPages) {
    return Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );
  }

  const leftSiblingIndex = Math.max(
    currentPage - siblingCount,
    1
  );

  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages
  );

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots =
    rightSiblingIndex < totalPages - 2;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;

    const leftRange = Array.from(
      { length: leftItemCount },
      (_, i) => i + 1
    );

    return [
      ...leftRange,
      DOTS,
      totalPages,
    ];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;

    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) =>
        totalPages - rightItemCount + i + 1
    );

    return [
      1,
      DOTS,
      ...rightRange,
    ];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      {
        length:
          rightSiblingIndex -
          leftSiblingIndex +
          1,
      },
      (_, i) => leftSiblingIndex + i
    );

    return [
      1,
      DOTS,
      ...middleRange,
      DOTS,
      totalPages,
    ];
  }

  return [];
};

export const getSizeClasses = (
  size: PaginationSize
) => {
  switch (size) {
    case "sm":
      return {
        button:
          "h-8 min-w-[32px] px-2 text-(--text-xs) rounded-(--radius-md)",
        radius: "rounded-(--radius-md)",
        iconSize: 14,
      };

    case "lg":
      return {
        button:
          "h-11 min-w-[44px] px-3 text-(--text-base) rounded-(--radius-xl)",
        radius: "rounded-(--radius-xl)",
        iconSize: 18,
      };

    default:
      return {
        button:
          "h-9.5 min-w-[38px] px-2.5 text-(--text-sm) rounded-(--radius-lg)",
        radius: "rounded-(--radius-lg)",
        iconSize: 16,
      };
  }
};