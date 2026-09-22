import React from 'react';
import {
  LayoutGrid,
  ClipboardCheck,
  Brain,
  CircleHelp,
  ChevronLeft,
  LogOut,
} from "lucide-react";
import { SkiteupLogo } from "../../../assets/SkiteupLogo";
import type { StudentSidebarProps, NavItem } from '../../../utils/utils';

export const StudentSidebar: React.FC<StudentSidebarProps> = ({
  activeItem = 'Dashboard',
  onItemClick,
  onSignOut,
}) => {
  const navItems: NavItem[] = [
    {
      id: 'Dashboard',
      label: 'Dashboard',
      icon: <LayoutGrid size={20} strokeWidth={2} />,
    },
    {
      id: 'Assessments',
      label: 'Assessments',
      icon: <ClipboardCheck size={20} strokeWidth={2} />,
    },
    {
      id: 'Cognitive Games',
      label: 'Cognitive Games',
      icon: <Brain size={20} strokeWidth={2} />,
    },
    {
      id: 'Support',
      label: 'Support',
      icon: <CircleHelp size={20} strokeWidth={2} />,
    },
  ];

  return (
    <aside className="flex h-screen w-[245px] shrink-0 flex-col justify-between border-r border-white/10 bg-[#082944] px-4 py-6 select-none">
      {/* Top section: Logo & Navigation */}
      <div className="flex flex-col">
        {/* Header (Logo + Subtitle + Collapse Button) */}
        <div className="flex items-start justify-between px-1">
          <div>
            <SkiteupLogo width={128} height={22} />
            <span className="mt-1.5 block text-[10px] font-bold tracking-[0.24em] text-[#8EA8C3] uppercase">
              STUDENT PORTAL
            </span>
          </div>

          {/* Collapse Button */}
          <button
            type="button"
            aria-label="Collapse Sidebar"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 pt-8">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onItemClick?.(item.id)}
                className={`flex w-full items-center gap-3.5 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${isActive
                    ? 'bg-white/10 font-semibold text-white shadow-sm'
                    : 'text-[#8EA8C3] hover:bg-white/5 hover:text-white'
                  }`}
              >
                <span className="flex shrink-0 items-center justify-center">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Sign Out */}
      <div className="pb-1">
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-3.5 rounded-2xl px-4 py-3 text-sm font-medium text-[#8EA8C3] transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut size={20} strokeWidth={2} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default StudentSidebar;
