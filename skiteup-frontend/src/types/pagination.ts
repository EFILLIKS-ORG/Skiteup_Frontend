export type PaginationVariant = "pills" | "bordered" | "simple";

export type PaginationSize = "sm" | "md" | "lg";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  variant?: PaginationVariant;
  size?: PaginationSize;
  disabled?: boolean;
  className?: string;
}
