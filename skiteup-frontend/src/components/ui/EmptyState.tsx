import type { EmptyStateProps } from "@/types/emptyState";

const EmptyState = ({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      {icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-background)] text-[var(--color-text-secondary)]">
          {icon}
        </div>
      )}

      <h3 className="font-(--text-lg) font-(--font-weight-medium) text-(--color-text-primary)">
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-md font-(--text-sm) text-[var(--color-text-secondary)]">
          {description}
        </p>
      )}

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default EmptyState;