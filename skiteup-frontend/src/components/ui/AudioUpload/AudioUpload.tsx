import type { ChangeEvent } from 'react';
import type { AudioUploadProps } from '../../../utils/utils';

const AudioUpload = ({
  accept = 'audio/*',
  multiple = false,
  disabled = false,
  label = 'Upload Audio',
  description = 'Click to browse or drag and drop an audio file',
  icon,
  onChange,
  className = '',
}: AudioUploadProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  return (
    <label
      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white px-6 py-8 text-center transition hover:border-[#0B3A60] ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}
            `}
    >
      {icon && <div className="mb-3 text-[#0B3A60]">{icon}</div>}

      <p className="text-sm font-semibold text-[#0B3A60]">{label}</p>

      <p className="mt-1 text-xs text-gray-500">{description}</p>

      <input
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
};

export default AudioUpload;
