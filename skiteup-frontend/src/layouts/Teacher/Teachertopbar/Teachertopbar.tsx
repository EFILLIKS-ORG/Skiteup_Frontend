export interface HeaderProps {
    title: string;
    userName: string;
    email: string;
    avatarInitial?: string;
}

const Header = ({
    title,
    userName,
    email,
    avatarInitial,
}: HeaderProps) => {
    return (
        <header className="flex h-20 items-center justify-between bg-[#0B3A60] px-5">

            {/* Page Title */}
            <h1 className="font-[Poppins] text-2xl font-bold leading-9 text-white">
                {title}
            </h1>

            {/* User Section */}
            <div className="flex items-center justify-end gap-6">

                {/* User Details */}
                <div className="flex h-[45px] flex-col items-end">
                    <span className="font-[Poppins] text-base font-semibold leading-6 text-white">
                        {userName}
                    </span>

                    <span className="font-[Poppins] text-sm font-medium leading-[21px] text-white/50">
                        {email}
                    </span>
                </div>

                {/* Avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-[30px] bg-[#C026A8]">
                    <span className="font-[Inter] text-2xl font-semibold leading-[29px] text-white">
                        {avatarInitial}
                    </span>
                </div>

            </div>
        </header>
    );
};

export default Header;