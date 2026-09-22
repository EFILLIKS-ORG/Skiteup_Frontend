import type { EmptyStateProps } from '../../../utils/utils';

const EmptyState = ({ icon, title, description, action, className = '' }: EmptyStateProps) => {
  return (
    <div className={`flex flex-col items-center px-6 py-12 text-center ${className}`}>
      {icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-[#0B3A60]">
          {icon}
        </div>
      )}

      <h2 className="text-lg font-semibold text-[#0B3A60]">{title}</h2>

      {description && <p className="mt-2 max-w-md text-sm text-gray-500">{description}</p>}

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default EmptyState;
