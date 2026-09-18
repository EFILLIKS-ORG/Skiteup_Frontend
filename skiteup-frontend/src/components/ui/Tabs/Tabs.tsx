import React from 'react';
import type { TabsProps } from '../../../utils/utils';

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div
      className={`
        flex
        h-[36px]
        w-full
        items-start
        gap-[20px]
        rounded-[10px]
        border-b
        border-[rgba(11,58,96,0.1)]
        px-[10px]
        ${className}
      `}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`
              flex
              h-[35px]
              items-center
              justify-center
              rounded-[10px]
              px-[10px]
              py-[5px]
              font-['Poppins',sans-serif]
              text-[16px]
              font-semibold
              leading-[24px]
              transition-colors
              ${isActive ? 'border-b border-[#0B3A60] text-[#0B3A60]' : 'text-[rgba(11,58,96,0.5)]'}
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
