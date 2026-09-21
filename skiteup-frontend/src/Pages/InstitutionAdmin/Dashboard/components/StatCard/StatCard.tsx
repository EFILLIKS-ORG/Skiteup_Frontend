import React from 'react';
import type { StatCardProps } from '../../../../../utils/utils';
import { IconBox } from '../../../../../components/ui/IconBox';

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`box-border flex h-[80px] w-full items-center gap-4 rounded-[10px] border border-[#0B3A60]/10 bg-white px-4 transition-shadow duration-200 hover:shadow-sm ${className}`
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {/* IconBox with styling tailored to design */}
      <IconBox 
        icon={icon} 
        size="md" 
        className="!bg-[#EEF2FF] !text-[#0B3A60] shrink-0" 
      />

      {/* Text Container */}
      <div className="flex flex-1 flex-col items-start justify-center min-w-0">
        <span className="font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#0B3A60]/50 truncate w-full">
          {title}
        </span>
        <span className="font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#0B3A60] truncate w-full">
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
