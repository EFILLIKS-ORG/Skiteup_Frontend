import type { StatCardProps } from '../../../utils/utils';

const StatCard = ({
    title,
    value,
    icon,
    iconClassName = "bg-[#E8F0F7] text-[#0B3A60]",
}: StatCardProps) => {
    return (
        <div className="flex h-[112px] flex-1 items-center gap-5 rounded-[28px] bg-white px-6 shadow-[0_4px_12px_rgba(11,58,96,0.06)]">
            {/* Icon */}
            <div
                className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[18px] text-[26px] ${iconClassName}`}
            >
                {icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold uppercase tracking-[0.5px] text-[#8A9BB2]">
                    {title}
                </span>

                <span className="text-[28px] font-bold leading-tight text-[#17233C]">
                    {value}
                </span>
            </div>
        </div>
    );
};

export default StatCard;