import React from 'react';

export interface StudentLimitCardProps {
  currentStudents?: number;
  totalStudents?: number;
  className?: string;
}

export const StudentLimitCard: React.FC<StudentLimitCardProps> = ({
  currentStudents = 130,
  totalStudents = 200,
  className = '',
}) => {
  const percentage = Math.round((currentStudents / (totalStudents || 1)) * 100);
  const remainingSlots = Math.max(0, totalStudents - currentStudents);

  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border border-[#0B3A60]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`.trim()}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
          <h3 className="font-['Poppins'] text-[15px] font-semibold text-[#0B3A60]">
            Student Limit Status
          </h3>
        </div>
        <span className="font-['Poppins'] text-sm font-medium text-[#0B3A60]/80">
          {currentStudents} / {totalStudents} Students ({percentage}%)
        </span>
      </div>

      {/* Progress Bar */}
      <div className="my-5">
        <div className="h-3 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
          <div
            className="h-full rounded-full bg-[#10B981] transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
          />
        </div>
      </div>

      {/* Footer / Caption */}
      <p className="font-['Poppins'] text-xs font-normal text-[#0B3A60]/60">
        {remainingSlots} more student registration slots available.
      </p>
    </div>
  );
};

export default StudentLimitCard;
