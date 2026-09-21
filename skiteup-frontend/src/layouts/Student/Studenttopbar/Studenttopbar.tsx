import React from 'react';
import type { StudentHeaderProps } from '../../../utils/utils';

export const StudentHeader: React.FC<StudentHeaderProps> = ({
    title = "Assessments",
    subtitle = "Take assigned tests and review your submissions",
    studentName,
    userName,
    regNumber,
    email,
    avatarInitial = "TK",
    className = "",
}) => {
    const displayName = studentName || userName || "Tamilarasu K";
    const displayInfo = regNumber || email || "621322104114";

    return (
        <header
            className={`flex h-20 items-center justify-between border-b border-white/10 bg-[#0B3A60] px-8 select-none ${className}`.trim()}
        >
            {/* Left section: Title & Subtitle */}
            <div className="flex flex-col justify-center">
                <h1 className="font-['Poppins'] text-[20px] font-bold leading-tight text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-0.5 font-['Poppins'] text-[12px] font-normal text-white/60">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Right section: Student Info & Avatar */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 font-['Poppins'] text-[14px]">
                    <span className="font-semibold text-white">
                        {displayName}
                    </span>
                    {displayInfo && (
                        <>
                            <span className="text-white/30">|</span>
                            <span className="font-medium text-white/70">
                                {displayInfo}
                            </span>
                        </>
                    )}
                </div>

                {/* Avatar Badge */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-sm">
                    <span className="font-['Poppins'] text-[12px] font-semibold text-white">
                        {avatarInitial}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default StudentHeader;
