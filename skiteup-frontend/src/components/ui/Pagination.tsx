import { useMemo } from "react";
import { AngleLeft, AngleRight } from "reicon-react";
import type { PaginationProps } from "@/types/pagination";
import {DOTS,getPaginationRange,getSizeClasses} from "@/utils/paginationUtils";
import usePaginationIndicator from "@/hooks/usePaginationIndicator";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showPrevNext = true,
  size = "md",
  disabled = false,
  className = "",
}: PaginationProps) => {
  const paginationRange = useMemo(
    () => getPaginationRange(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount]
  );

  const {
    containerRef,
    buttonRefs,
    indicatorStyle,
  } = usePaginationIndicator(
    currentPage,
    paginationRange,
    size
  );

  const sizeClasses = getSizeClasses(size);

  const handlePrevious = () => {
    if (disabled || currentPage <= 1) return;

    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (disabled || currentPage >= totalPages) return;

    onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    if (disabled || page === currentPage) return;

    onPageChange(page);
  };

  if (totalPages <= 0) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className={`inline-flex items-center max-w-full overflow-x-auto py-1 ${className}`}
    >
      <div
        ref={containerRef}
        className="relative inline-flex items-center gap-1 shrink-0"
      >
        {showPrevNext && (
          <button
            type="button"
            aria-label="Previous page"
            disabled={disabled || currentPage === 1}
            onClick={handlePrevious}
            className={`
              ${sizeClasses.button}
              flex
              items-center
              justify-center
              border
              border-(--color-border-light)
              bg-(--color-cardbg)
              text-(--color-text-primary)
              transition-all
              duration-200
              hover:bg-(--color-background)
              disabled:cursor-not-allowed
              disabled:opacity-50
            `}
          >
            <AngleLeft size={sizeClasses.iconSize} />
          </button>
        )}
        <div className="relative inline-flex items-center gap-1">
          <span
            className={`
              pointer-events-none
              absolute
              z-0
              bg-(--color-primary)
              transition-all
              duration-300
              ease-out
              ${sizeClasses.radius}
            `}
            style={{
              left: indicatorStyle.left,
              top: indicatorStyle.top,
              width: indicatorStyle.width,
              height: indicatorStyle.height,
              opacity: indicatorStyle.opacity,
            }}
          />

          {paginationRange.map((page, index) => {
            if (page === DOTS) {
              return (
                <span
                  key={`dots-${index}`}
                  className={`
                    ${sizeClasses.button}
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    text-(--color-text-secondary)
                  `}
                >
                  {DOTS}
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                ref={(element) => {
                  buttonRefs.current[pageNumber] = element;
                }}
                type="button"
                aria-label={`Go to page ${pageNumber}`}
                aria-current={isActive ? "page" : undefined}
                disabled={disabled}
                onClick={() => handlePageClick(pageNumber)}
                className={`
                  ${sizeClasses.button}
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  font-(--font-weight-medium)
                  transition-colors
                  duration-200
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  ${
                    isActive
                      ? "text-(--color-text-inverse)"
                      : "text-(--color-text-primary) hover:text-(--color-primary)"
                  }
                `}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        {showPrevNext && (
          <button
            type="button"
            aria-label="Next page"
            disabled={disabled || currentPage === totalPages}
            onClick={handleNext}
            className={`
              ${sizeClasses.button}
              flex
              items-center
              justify-center
              border
              border-(--color-border-light)
              bg-(--color-cardbg)
              text-(--color-text-primary)
              transition-all
              duration-200
              hover:bg-(--color-background)
              disabled:cursor-not-allowed
              disabled:opacity-50
            `}
          >
            <AngleRight size={sizeClasses.iconSize} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Pagination;