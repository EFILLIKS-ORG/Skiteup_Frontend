import React from 'react';
import { Activity } from 'lucide-react';
import { IconBox } from '../../../../../components/ui/IconBox';
import type { SubscriptionStatusCardProps } from '../../../../../utils/utils';

export const SubscriptionStatusCard: React.FC<SubscriptionStatusCardProps> = ({
  daysRemaining = 320,
  expiryDate = 'August 7, 2027',
  statusText = 'ACTIVE',
  description = 'Your subscription is currently active and in good standing. All features are fully operational.',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border border-[#0B3A60]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`.trim()}
    >
      {/* Top row: Title + Status badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-['Poppins'] text-[15px] font-semibold text-[#0B3A60]">
            Subscription Status
          </h3>
        </div>
        <span className="rounded-md bg-emerald-50 px-2.5 py-0.5 font-['Poppins'] text-xs font-semibold text-[#10B981] border border-emerald-200">
          {statusText}
        </span>
      </div>

      {/* Middle row: Icon + Days Remaining */}
      <div className="my-3 flex items-center gap-4">
        <IconBox
          icon={<Activity size={24} className="text-[#0B3A60]" />}
          size="lg"
          className="!bg-[#EEF2FF] !rounded-xl"
        />
        <div className="flex flex-col">
          <span className="font-['Poppins'] text-xl font-bold text-[#0B3A60]">
            {daysRemaining} Days Remaining
          </span>
          <span className="font-['Poppins'] text-xs font-medium text-[#0B3A60]/50">
            Expires: {expiryDate}
          </span>
        </div>
      </div>

      {/* Footer / Description */}
      <p className="font-['Poppins'] text-xs font-normal leading-relaxed text-[#0B3A60]/60">
        {description}
      </p>
    </div>
  );
};

export default SubscriptionStatusCard;
