import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components';
import type { AssessmentCardProps } from '../../../utils/utils';

const AssessmentCard = ({ title, description, icon, onCreate }: AssessmentCardProps) => {
  return (
    <div className="flex min-h-[320px] flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
      <div>
        {/* Icon */}
        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#082944] text-white shadow-sm">
          {icon}
        </div>

        {/* Title */}
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">{title}</h2>

        {/* Description */}
        <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-gray-500">{description}</p>
      </div>

      <Button
        type="button"
        onClick={onCreate}
        variant="primary"
        size="lg"
        rightIcon={<ArrowRight size={18} />}
        className="mt-6 w-full"
      >
        Create Assessment
      </Button>
    </div>
  );
};

export default AssessmentCard;
