import { useState } from "react";
import { LayoutGrid, List, RefreshCw } from "lucide-react";
import Button from "../../../components/ui/Button/Button";
import type {
    AssessmentFilterType,
    AssessmentFilterProps,
    ViewMode,
} from "../../../utils/utils";

const AssessmentFilter = ({
    activeFilter: controlledActiveFilter,
    onFilterChange,
    viewMode: controlledViewMode,
    onViewModeChange,
    onRefresh,
}: AssessmentFilterProps = {}) => {
    const [internalFilter, setInternalFilter] = useState<AssessmentFilterType>("All");
    const [internalViewMode, setInternalViewMode] = useState<ViewMode>("grid");

    const currentFilter = controlledActiveFilter ?? internalFilter;
    const currentViewMode = controlledViewMode ?? internalViewMode;

    const handleFilterChange = (filter: AssessmentFilterType) => {
        if (onFilterChange) {
            onFilterChange(filter);
        } else {
            setInternalFilter(filter);
        }
    };

    const handleViewModeChange = (mode: ViewMode) => {
        if (onViewModeChange) {
            onViewModeChange(mode);
        } else {
            setInternalViewMode(mode);
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
                {/* Refresh Button */}
                <button
                    type="button"
                    onClick={onRefresh}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5EDF3] bg-white text-[#8A9BB2] transition-colors hover:bg-[#F2F6F9] hover:text-[#0B3A60]"
                    title="Refresh"
                    aria-label="Refresh"
                >
                    <RefreshCw size={17} />
                </button>

                {/* Segmented Grid / List Toggle */}
                <div className="flex h-10 items-center gap-1 rounded-xl border border-[#E5EDF3] bg-[#F2F6F9] p-1">
                    <button
                        type="button"
                        onClick={() => handleViewModeChange("grid")}
                        className={`flex h-full w-8 items-center justify-center rounded-lg transition-all ${currentViewMode === "grid"
                            ? "bg-white text-[#0B3A60] shadow-[0_1px_3px_rgba(11,58,96,0.1)]"
                            : "text-[#8A9BB2] hover:text-[#0B3A60]"
                            }`}
                        title="Grid View"
                        aria-label="Grid View"
                    >
                        <LayoutGrid size={17} />
                    </button>

                    <button
                        type="button"
                        onClick={() => handleViewModeChange("list")}
                        className={`flex h-full w-8 items-center justify-center rounded-lg transition-all ${currentViewMode === "list"
                            ? "bg-white text-[#0B3A60] shadow-[0_1px_3px_rgba(11,58,96,0.1)]"
                            : "text-[#8A9BB2] hover:text-[#0B3A60]"
                            }`}
                        title="List View"
                        aria-label="List View"
                    >
                        <List size={17} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssessmentFilter;
