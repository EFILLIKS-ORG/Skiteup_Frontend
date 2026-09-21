import type { PageHeaderProps } from '../../../utils/utils';

export const PageHeader = ({
    title,
    description,
    action,
    backButton,
    className = '',
}: PageHeaderProps) => {
    return (
        <div
            className={`flex items-start justify-between gap-4 ${className}`}
        >
            <div className="flex items-start gap-3">
                {backButton && (
                    <div className="pt-1">
                        {backButton}
                    </div>
                )}

                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#0B2545]">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-1.5 text-sm font-normal text-slate-500">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {action && (
                <div className="shrink-0">
                    {action}
                </div>
            )}
        </div>
    );
};

export default PageHeader;