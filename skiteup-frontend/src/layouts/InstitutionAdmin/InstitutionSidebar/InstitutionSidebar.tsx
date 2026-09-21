import React from 'react';
import {
    PanelLeft,
    LayoutDashboard,
    Users,
    GraduationCap,
    ClipboardCheck,
    CircleHelp,
    LogOut,
} from 'lucide-react';
import { SkiteupLogo } from '../../../assets/SkiteupLogo';
import type { InstitutionSidebarProps, NavItem } from '../../../utils/utils';

export interface InstitutionSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onSignOut?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

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

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-full flex-col justify-between border-r border-white/20 bg-[#0B3A60] py-5 select-none transition-all duration-300 ease-in-out lg:static ${
          isCollapsed ? 'w-[76px] px-2' : 'w-[265px] px-3'
        } ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Section: Header & Navigation */}
        <div className="flex flex-col gap-4">
          {/* Header (Logo + Collapse Button) */}
          <div className="flex h-[60px] items-center justify-between border-b border-white/20 px-2 pb-3">
            {!isCollapsed ? (
              <div className="flex items-center overflow-hidden">
                <SkiteupLogo />
              </div>
            ) : (
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 font-bold text-white">
                S
              </div>
            )}

            {/* Desktop Collapse / Mobile Close Button */}
            <button
              type="button"
              aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  onClose?.();
                } else {
                  onToggleCollapse?.();
                }
              }}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white shrink-0"
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
                    isCollapsed ? 'justify-center px-2' : 'px-4'
                  } ${
                    isActive
                      ? 'bg-white/15 font-semibold text-white shadow-sm'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex shrink-0 items-center justify-center">{item.icon}</span>
                  {!isCollapsed && (
                    <span className="font-['Poppins'] text-[14px] truncate">{item.label}</span>
                  )}
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
              isCollapsed ? 'justify-center px-2' : 'px-4'
            }`}
          >
            <LogOut size={20} strokeWidth={2} className="shrink-0" />
            {!isCollapsed && (
              <span className="font-['Poppins'] text-[14px] font-medium truncate">Sign Out</span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default InstitutionSidebar;
