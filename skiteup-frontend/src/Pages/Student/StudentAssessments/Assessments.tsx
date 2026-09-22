import React, { useState } from "react";
import { RefreshCw, LayoutGrid, List } from "lucide-react";

const StudentAssessment: React.FC = () => {
    const [currentViewMode, setCurrentViewMode] = useState<"grid" | "list">(
        "grid"
    );

    const onRefresh = () => {
        console.log("Assessment refreshed");
    };

    const handleViewModeChange = (mode: "grid" | "list") => {
        setCurrentViewMode(mode);
    };

    return (
        <div className="flex w-full flex-col gap-8">

            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[#082944]">
                        Assessments
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        View assigned tests, track upcoming schedules, and inspect your
                        completed results.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onRefresh}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5EDF3] bg-white text-[#8A9BB2] transition-colors hover:bg-[#F2F6F9] hover:text-[#0B3A60]"
                        title="Refresh"
                        aria-label="Refresh"
                    >
                        <RefreshCw size={17} />
                    </button>

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
        </div>
    );
};

export default StudentAssessment;
