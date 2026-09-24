import React, { useState } from 'react';
import type { TabsProps } from '../../types/tabs';

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    activeTab,
    defaultActiveTab,
    onChange,
    className = '',
}) => {
    const [selectedTab, setSelectedTab] = useState(defaultActiveTab ?? tabs[0]?.id);

    const currentTab = activeTab !== undefined ? activeTab : selectedTab;

    const handleTabClick = (tabId: string) => {
        const newTabId = currentTab === tabId ? '' : tabId;
        if (activeTab === undefined) {
            setSelectedTab(newTabId);
        }
        onChange?.(newTabId);
    };

    return (
        <div
            className={`flex w-full items-center border-b border-(--color-border-light) ${className}`}
            role="tablist"
        >
            {tabs.map((tab) => {
                const isActive = currentTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        disabled={tab.disabled}
                        onClick={() => handleTabClick(tab.id)}
                        className={`relative px-4 py-3 text-[length:var(--text-sm)] font-[var(--font-weight-medium)] transition-colors duration-200

              ${isActive ? 'text-(--color-accent)' : 'text-(--color-text-placeholder)'}

              ${isActive
                                ? 'after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-(--color-accent)'
                                : ''
                            }

              ${tab.disabled
                                ? 'cursor-not-allowed opacity-50'
                                : 'cursor-pointer hover:text-(--color-accent)'
                            }
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
