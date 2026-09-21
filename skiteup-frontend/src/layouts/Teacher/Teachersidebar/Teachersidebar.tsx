import React from 'react';
import {
    LayoutDashboard,
    Users,
    ClipboardList,
    History,
    FileText,
    ShieldAlert,
    CircleHelp,
    LogOut,
    ChevronLeft,
} from 'lucide-react';
import type { TeacherSidebarProps, NavItem } from '../../../utils/utils';

export const Sidebar: React.FC<TeacherSidebarProps> = ({
    activeItem = "Dashboard",
    onItemClick,
    onSignOut,
}) => {
  const navItems: NavItem[] = [
    {
      id: 'Dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} strokeWidth={2} />,
    },
    {
      id: 'Student List',
      label: 'Student List',
      icon: <Users size={20} strokeWidth={2} />,
    },
    {
      id: 'Assigned Tests',
      label: 'Assigned Tests',
      icon: <ClipboardList size={20} strokeWidth={2} />,
    },
    {
      id: 'Submitted History',
      label: 'Submitted History',
      icon: <History size={20} strokeWidth={2} />,
    },
    {
      id: 'Draft',
      label: 'Draft',
      icon: <FileText size={20} strokeWidth={2} />,
    },
    {
      id: 'Violation',
      label: 'Violation',
      icon: <ShieldAlert size={20} strokeWidth={2} />,
    },
    {
      id: 'Feedback',
      label: 'Feedback',
      icon: <CircleHelp size={20} strokeWidth={2} />,
    },
  ];

  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col justify-between border-r border-white/10 bg-[#082944] px-4 py-6 select-none">
      {/* Top Section: Header & Navigation */}
      <div className="flex flex-col gap-5">
        {/* Header (Logo + Collapse Button) */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5">
            {/* Logo Emblem */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-inner">
              <span className="text-[9px] font-black tracking-tighter text-white uppercase">SkiteUp</span>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight tracking-tight text-white">
                SkiteUp
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-white/60 uppercase">
                TEACHER PORTAL
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Collapse Sidebar"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1.5 pt-2">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onItemClick?.(item.id)}
                className={`flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/15 font-semibold text-white shadow-sm backdrop-blur-sm'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="flex shrink-0 items-center justify-center">{item.icon}</span>
                <span className="text-[14px]">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Sign Out */}
      <div className="border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-3.5 rounded-xl px-4 py-2.5 text-white/70 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
        >
          <LogOut size={20} strokeWidth={2} />
          <span className="text-[14px] font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
