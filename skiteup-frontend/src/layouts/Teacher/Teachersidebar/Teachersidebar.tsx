import React from 'react';
import {
  PanelLeft,
  LayoutDashboard,
  Users,
  ClipboardCheck,
  History,
  FileText,
  ShieldAlert,
  CircleHelp,
  LogOut,
} from 'lucide-react';
import { SkiteupLogo } from '../../../assets/SkiteupLogo';

export interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onSignOut?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeItem = 'Dashboard',
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
      id: 'Assigned Task',
      label: 'Assigned Task',
      icon: <ClipboardCheck size={20} strokeWidth={2} />,
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
    <aside className="flex h-screen w-[265px] flex-col justify-between border-r border-white/20 bg-[#0B3A60] px-3 py-5 select-none">
      {/* Top Section: Header & Navigation */}
      <div className="flex flex-col gap-4">
        {/* Header (Logo + Collapse Button) */}
        <div className="flex h-[60px] items-center justify-between border-b border-white/20 px-2 pb-3">
          <div className="flex items-center">
            <SkiteupLogo />
          </div>

          <button
            type="button"
            aria-label="Collapse Sidebar"
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          >
            <PanelLeft size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Navigation Items (Student style .map loop) */}
        <nav className="flex flex-col gap-1.5 pt-1">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onItemClick?.(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/15 font-semibold text-white shadow-sm'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="flex shrink-0 items-center justify-center">{item.icon}</span>
                <span className="font-['Poppins'] text-[14px]">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: Sign Out */}
      <div className="border-t border-white/20 pt-3">
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut size={20} strokeWidth={2} />
          <span className="font-['Poppins'] text-[14px] font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
