import type { HeaderProps } from '../../../utils/utils';
import { Avatar } from '../../../components';

const Header = ({
  userName = "teacher002",
  avatarInitial = "T",
}: HeaderProps) => {
  return (
    <header className="flex h-16 w-full items-center justify-end bg-[#082944] px-8 border-b border-white/5 select-none">
      {/* User Section */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-white tracking-wide">
          {userName}
        </span>

        <Avatar
          fallback={avatarInitial}
          size="md"
        />
      </div>
    </header>
  );
};

export default Header;
