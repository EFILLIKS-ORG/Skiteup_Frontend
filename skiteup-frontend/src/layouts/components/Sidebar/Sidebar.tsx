import React from "react";
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
} from "lucide-react";
import { SkiteupLogo } from "../../../assets/SkiteupLogo";

export interface SidebarProps {
    activeItem?: string;
}

interface SidebarItemProps {
    label: string;
    icon: React.ReactNode;
    active?: boolean;
    tall?: boolean;
}

const SidebarItem = ({
    label,
    icon,
    active = false,
    tall = false,
}: SidebarItemProps) => {
    return (
        <button
            type="button"
            className={`w-[244px] flex flex-row items-center gap-[15px] ${tall ? "h-[54px]" : "h-[44px]"
                } ${active
                    ? "px-[15px] bg-[#FEFEFE] rounded-[5px] text-[#0B3A60]"
                    : "px-[15px] bg-[#0B3A60] rounded-[20px] text-white"
                }`}
        >
            <span className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
                {icon}
            </span>

            <span
                className={`flex-1 h-[24px] flex items-center text-left font-semibold text-[16px] leading-[24px] font-['Poppins'] ${active ? "text-[#0B3A60]" : "text-white"
                    }`}
            >
                {label}
            </span>
        </button>
    );
};

export const Sidebar: React.FC<SidebarProps> = ({ activeItem = "Dashboard" }: SidebarProps) => {
    return (
        <aside className="w-[265px] h-screen bg-[#0B3A60] border-r border-white/20 flex flex-col">

            {/* Sidebar Header */}
            <div className="w-[264px] h-[80px] flex items-center justify-between px-[10px] border-b border-white/20">

                {/* Logo */}
                <div className="w-[181px] h-[48px] flex items-center justify-center py-[10px] rounded-[10px]">
                    <SkiteupLogo />
                </div>

                {/* Collapse Icon */}
                <button
                    type="button"
                    className="w-[24px] h-[24px] flex items-center justify-center"
                >
                    <PanelLeft
                        size={24}
                        strokeWidth={2}
                        className="text-white"
                    />
                </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="w-full flex-1 flex flex-col justify-between items-center px-[10px] py-[20px]">

                {/* Top Navigation */}
                <div className="w-[244px] flex flex-col items-start gap-[15px]">

                    <SidebarItem
                        label="Dashboard"
                        active={activeItem === "Dashboard"}
                        tall
                        icon={
                            <LayoutDashboard
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                    <SidebarItem
                        label="Student List"
                        active={activeItem === "Student List"}
                        tall
                        icon={
                            <Users
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                    <SidebarItem
                        label="Assigned Task"
                        active={activeItem === "Assigned Task"}
                        icon={
                            <ClipboardCheck
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                    <SidebarItem
                        label="Submitted History"
                        active={activeItem === "Submitted History"}
                        icon={
                            <History
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                    <SidebarItem
                        label="Draft"
                        active={activeItem === "Draft"}
                        icon={
                            <FileText
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                    <SidebarItem
                        label="Violation"
                        active={activeItem === "Violation"}
                        icon={
                            <ShieldAlert
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                    <SidebarItem
                        label="Feedback"
                        active={activeItem === "Feedback"}
                        icon={
                            <CircleHelp
                                size={24}
                                strokeWidth={2}
                            />
                        }
                    />

                </div>

                {/* Sign Out */}
                <SidebarItem
                    label="Sign Out"
                    active={false}
                    icon={
                        <LogOut
                            size={24}
                            strokeWidth={2}
                        />
                    }
                />

            </div>
        </aside>
    );
};

export default Sidebar;