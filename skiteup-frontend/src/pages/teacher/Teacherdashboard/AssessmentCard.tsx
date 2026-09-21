import React from "react";
import { ArrowRight } from 'lucide-react';
import { Button } from "../../../components";

type AssessmentCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    onCreate?: () => void;
};

const AssessmentCard = ({
    title,
    description,
    icon,
    onCreate,
}: AssessmentCardProps) => {
    return (
        <div className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow min-h-[320px]">
            <div>
                {/* Icon */}
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#082944] text-white shadow-sm">
                    {icon}
                </div>

                {/* Title */}
                <h2 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-500 min-h-[48px]">
                    {description}
                </p>
            </div>

            {/* Button */}
            <Button
  type="button"
  onClick={onCreate}
  rightIcon={<ArrowRight size={18} />}
  className="mt-6 w-full h-[42px] cursor-pointer rounded-xl bg-[#082944] px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#062036] active:scale-[0.99]"
>
  Create Assessment
</Button>
        </div>
    );
};

export default AssessmentCard;