import type { TextAreaProps } from '../../../utils/utils';

const TextArea = ({
    label,
    error,
    className = '',
    ...props
}: TextAreaProps) => {
    return (
        <div className="w-full">
            {label && (
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <textarea
                className={`w-full min-h-[120px] resize-y rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0B3A60] focus:ring-1 focus:ring-[#0B3A60] ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
                {...props}
            />

            {error && (
                <p className="mt-1 text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default TextArea;