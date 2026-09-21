import { Clock, FileText, ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button/Button";
import type { AssessmentCardProps } from "../../../utils/utils";

const AssessmentCard = ({
    title,
    type,
    questions,
    duration,
    status = "upcoming",
}: AssessmentCardProps) => {
    return (
        <div className="flex w-full items-center justify-between rounded-[24px] border border-[#E5EDF3] bg-white px-6 py-5 shadow-[0_4px_12px_rgba(11,58,96,0.05)]">

            {/* Left Content */}
            <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#EAF3F9] text-[#0B3A60]">
                    <FileText size={25} />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <h3 className="text-[17px] font-bold text-[#17233C]">
                            {title}
                        </h3>

                        {status === "live" && (
                            <span className="rounded-full bg-[#E0F7F1] px-3 py-1 text-[11px] font-bold text-[#00A878]">
                                LIVE
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-5 text-[13px] font-medium text-[#7A8B9D]">
                        <span>{type}</span>

                        <span className="flex items-center gap-1">
                            <FileText size={14} />
                            {questions} Questions
                        </span>

                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {duration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Action */}
            <Button
                className="flex items-center gap-2 rounded-full bg-[#0B3A60] px-5 py-2.5 text-sm font-semibold text-white"
            >
                {status === "live" ? "Start Test" : "View Details"}
                <ArrowRight size={17} />
            </Button>

        </div>
    );
};

export default AssessmentCard;