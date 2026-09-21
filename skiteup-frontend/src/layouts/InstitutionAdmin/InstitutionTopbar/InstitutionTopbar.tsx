import { Bell, Menu } from 'lucide-react';
import type { HeaderProps } from '../../../utils/utils';
import { IconBox, Badge } from '../../../components';

export const InstitutionTopbar = ({
  title = "Institution Control Center",
  userName,
  email,
  avatarInitial,
  onMenuToggle,
}: HeaderProps) => {
  return (
    <header className="flex h-16 sm:h-20 items-center justify-between bg-[#0B3A60] px-4 sm:px-6 shrink-0 border-b border-white/10">
      {/* Left Section: Mobile Menu Toggle + Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          onClick={onMenuToggle}
          className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none shrink-0"
        >
          <Menu size={20} strokeWidth={2} />
        </button>

        {/* Page Title */}
        <h1 className="font-[Poppins] text-lg sm:text-xl md:text-2xl font-bold leading-tight text-white truncate">
          {title}
        </h1>
      </div>

      {/* Right Section: Notifications, User, Avatar */}
      <div className="flex items-center justify-end gap-3 sm:gap-6 shrink-0">
        
        {/* Notification Icon */}
        <button 
          type="button" 
          aria-label="Notifications"
          className="focus:outline-none"
        >
          <IconBox
            icon={<Bell size={18} strokeWidth={2} />}
            size="sm"
            className="!h-9 !w-9 sm:!h-10 sm:!w-10 !rounded-full !bg-white/10 !text-white transition-colors hover:!bg-white/20"
          />
        </button>

        {/* User Details - hidden on extra small screens to prevent overflow */}
        <div className="hidden sm:flex h-[45px] flex-col items-end justify-center">
          <span className="font-[Poppins] text-sm sm:text-base font-semibold leading-snug text-white">
            {userName}
          </span>
          <span className="font-[Poppins] text-xs sm:text-sm font-medium leading-snug text-white/50">
            {email}
          </span>
        </div>

        {/* Avatar */}
        <Badge
          variant="missed"
          className="!h-9 !w-9 sm:!h-10 sm:!w-10 !rounded-full !border-0 !bg-[#C026A8] !p-0 !text-center !font-[Inter] !text-base sm:!text-lg !font-semibold !text-white !justify-center shrink-0"
        >
          {avatarInitial}
        </Badge>
      </div>
    </header>
  );
};

export default InstitutionTopbar;
