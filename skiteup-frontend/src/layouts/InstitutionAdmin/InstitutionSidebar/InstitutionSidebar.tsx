import React from 'react';
import {
    PanelLeft,
    LayoutDashboard,
    Users,
    GraduationCap,
    ClipboardCheck,
    CircleHelp,
    LogOut,
    X,
} from 'lucide-react';
import { SkiteupLogo } from '../../../assets/SkiteupLogo';
import type { InstitutionSidebarProps, NavItem } from '../../../utils/utils';

export const InstitutionSidebar: React.FC<InstitutionSidebarProps> = ({
  activeItem = "Dashboard",
  onItemClick,
  onSignOut,
  isOpen = false,
  onClose,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const navItems: NavItem[] = [
    {
      id: 'Dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} strokeWidth={2} />,
    },
    {
      id: 'Manage Teachers',
      label: 'Manage Teachers',
      icon: <Users size={20} strokeWidth={2} />,
    },
    {
      id: 'Manage Students',
      label: 'Manage Students',
      icon: <GraduationCap size={20} strokeWidth={2} />,
    },
    {
      id: 'Assessment Audit',
      label: 'Assessment Audit',
      icon: <ClipboardCheck size={20} strokeWidth={2} />,
    },
    {
      id: 'Support Center',
      label: 'Support Center',
      icon: <CircleHelp size={20} strokeWidth={2} />,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop / Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container:
          - Mobile: Always full width drawer (w-[265px]), never collapsed
          - Desktop (lg+): Collapsible between w-[76px] and w-[265px]
      */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-full flex-col justify-between border-r border-white/20 bg-[#0B3A60] py-5 select-none transition-all duration-300 ease-in-out lg:static ${
          isCollapsed ? 'w-[265px] lg:w-[76px] px-4 lg:px-2' : 'w-[265px] px-3 sm:px-4'
        } ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Section: Header & Navigation */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div
            className={`flex h-[60px] items-center border-b border-white/20 pb-3 ${
              isCollapsed
                ? 'justify-between px-2 lg:justify-center lg:px-0'
                : 'justify-between px-2'
            }`}
          >
            {/* Logo: Visible on mobile (always expanded) and on desktop ONLY when NOT collapsed */}
            <div
              className={`items-center overflow-hidden ${
                isCollapsed ? 'flex lg:hidden' : 'flex'
              }`}
            >
              <SkiteupLogo />
            </div>

            {/* Mobile View Close Button (X icon) */}
            <button
              type="button"
              aria-label="Close Menu"
              onClick={onClose}
              className="flex lg:hidden h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Desktop View Collapse / Expand Toggle Button */}
            <button
              type="button"
              aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              onClick={onToggleCollapse}
              className="hidden lg:flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white shrink-0"
            >
              <PanelLeft size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2 pt-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  title={isCollapsed ? item.label : undefined}
                  onClick={() => {
                    onItemClick?.(item.id);
                    if (window.innerWidth < 1024) {
                      onClose?.();
                    }
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl py-3.5 text-sm font-medium transition-all ${
                    isCollapsed ? 'justify-start px-4 lg:justify-center lg:px-2' : 'px-4'
                  } ${
                    isActive
                      ? 'bg-white/15 font-semibold text-white shadow-sm'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex shrink-0 items-center justify-center">{item.icon}</span>
                  {/* Label: Always visible on mobile, hidden on desktop when collapsed */}
                  <span
                    className={`font-['Poppins'] text-[14px] truncate ${
                      isCollapsed ? 'block lg:hidden' : 'block'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Sign Out */}
        <div className="border-t border-white/20 pt-3">
          <button
            type="button"
            title={isCollapsed ? "Sign Out" : undefined}
            onClick={() => {
              onSignOut?.();
              if (window.innerWidth < 1024) {
                onClose?.();
              }
            }}
            className={`flex w-full items-center gap-3 rounded-xl py-2.5 text-white/80 transition-colors hover:bg-white/5 hover:text-white ${
              isCollapsed ? 'justify-start px-4 lg:justify-center lg:px-2' : 'px-4'
            }`}
          >
            <LogOut size={20} strokeWidth={2} className="shrink-0" />
            <span
              className={`font-['Poppins'] text-[14px] font-medium truncate ${
                isCollapsed ? 'block lg:hidden' : 'block'
              }`}
            >
              Sign Out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default InstitutionSidebar;
