import { useState } from "react";
import { LayoutGrid, List, RefreshCw } from "lucide-react";
import Button from "../../../components/ui/Button/Button";
import type { AssessmentFilterType, AssessmentFilterProps } from "../../../utils/utils";

const AssessmentFilter = ({
    activeFilter: controlledActiveFilter,
    onFilterChange,
}: AssessmentFilterProps = {}) => {
    const [internalFilter, setInternalFilter] = useState<AssessmentFilterType>("All");

    const currentFilter = controlledActiveFilter ?? internalFilter;

    const handleFilterChange = (filter: AssessmentFilterType) => {
        if (onFilterChange) {
            onFilterChange(filter);
        } else {
            setInternalFilter(filter);
        }
    };

    const filters: AssessmentFilterType[] = ["All", "MCQ", "Coding", "LSRW"];

    return (
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-[20px] bg-white px-5 py-4 shadow-[0_4px_12px_rgba(11,58,96,0.06)] md:flex-row">

            {/* Left - Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
                {filters.map((filter) => (
                    <Button
                        key={filter}
                        variant="ghost"
                        onClick={() => handleFilterChange(filter)}
                        className={`rounded-full px-5 py-2.5 text-sm font-semibold ${currentFilter === filter
                            ? "!bg-[#082944] !text-white"
                            : "!text-[#0B3A60] hover:!bg-[#F2F6F9]"
                            }`}
                    >
                        {filter}
                    </Button>
                ))}
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EDF3] text-[#8A9BB2] hover:bg-[#F2F6F9] hover:text-[#0B3A60]"
                    title="Refresh"
                >
                    <RefreshCw size={18} />
                </Button>

                <Button
                    variant="ghost"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EDF3] text-[#0B3A60] hover:bg-[#F2F6F9]"
                    title="Grid View"
                >
                    <LayoutGrid size={18} />
                </Button>

                <Button
                    variant="ghost"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EDF3] text-[#8A9BB2] hover:bg-[#F2F6F9] hover:text-[#0B3A60]"
                    title="List View"
                >
                    <List size={18} />
                </Button>
            </div>
        </div>
    );
};

export default AssessmentFilter;
