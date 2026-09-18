import type { FilterProps } from '../../../utils/utils';

const Filter = ({
    children,
    onApply,
    onReset,
    applyText = 'Apply',
    resetText = 'Reset',
    className = '',
}: FilterProps) => {
    return (
        <div
            className={`rounded-xl border border-gray-200 bg-white p-4 ${className}`}>
            <div className="flex flex-wrap items-end gap-4">
                {children}
            </div>

            {(onApply || onReset) && (
                <div className="mt-4 flex justify-end gap-2">
                    {onReset && (
                        <button
                            type="button"
                            onClick={onReset}
                            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
                            {resetText}
                        </button>
                    )}

                    {onApply && (
                        <button
                            type="button"
                            onClick={onApply}
                            className="rounded-lg bg-[#0B3A60] px-4 py-2 text-sm font-medium text-white">
                            {applyText}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Filter;