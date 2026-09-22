import type { AvatarProps } from '../../../utils/utils';
import { sizeAvatarStyles } from '../../../utils/utils';

const Avatar = ({
  src,
  alt = 'User avatar',
  fallback,
  size = 'md',
  className = '',
}: AvatarProps) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full bg-[#0B3A60] font-semibold text-white ${sizeAvatarStyles[size]} ${className}`}
    >
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : fallback}
    </div>
  );
};

export default Avatar;
