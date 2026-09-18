import type { AvatarProps } from '../../../utils/utils';

const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
};

const Avatar = ({
    src,
    alt = 'User avatar',
    fallback,
    size = 'md',
    className = '',
}: AvatarProps) => {
    return (
        <div
            className={`flex items-center justify-center overflow-hidden rounded-full bg-[#0B3A60] font-semibold text-white ${sizeStyles[size]} ${className}`}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover"
                />
            ) : (
                fallback
            )}
        </div>
    );
};

export default Avatar;