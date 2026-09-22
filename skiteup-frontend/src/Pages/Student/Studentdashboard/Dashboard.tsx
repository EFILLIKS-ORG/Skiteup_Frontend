import { Activity, BookOpen, CircleAlert, CircleCheck, Clock } from "lucide-react";
import AssessmentCard from "./AssessmentCard";
import AssessmentFilter from "./AssessmentFilter";
import StatCard from "./StatCard";
import WelcomeBanner from "./WelcomeBanner";

const Dashboard = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            <WelcomeBanner />

            {/* Stat Cards - Responsive Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Assigned Tests"
                    value={1}
                    icon={<BookOpen size={26} />}
                    iconClassName="bg-[#EAF3F9] text-[#0B3A60]"
                />
                <StatCard
                    title="Attended"
                    value={1}
                    icon={<CircleCheck size={26} />}
                    iconClassName="bg-[#E0F7F1] text-[#00A878]"
                />
                <StatCard
                    title="Missed"
                    value={0}
                    icon={<CircleAlert size={26} />}
                    iconClassName="bg-[#FCEAE9] text-[#ED4F43]"
                />
                <StatCard
                    title="Avg Score"
                    value="119.0%"
                    icon={<Activity size={26} />}
                    iconClassName="bg-[#F0EEFD] text-[#6B5AED]"
                />
            </div>

            {/* Assessment Filter */}
            <AssessmentFilter />

            {/* Bottom Sections - Live Tests & Upcoming Assessments */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* Today's Live Tests */}
                <div className="flex min-h-[250px] flex-col rounded-[24px] bg-white p-6 shadow-[0_4px_12px_rgba(11,58,96,0.06)]">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="flex items-center gap-3 text-lg font-bold text-[#17233C]">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#00A878]"></span>
                            Today's Live Tests
                        </h2>
                        <span className="rounded-full bg-[#E0F7F1] px-3 py-1 text-[11px] font-bold text-[#00A878]">
                            0 Active
                        </span>
                    </div>

                    {/* Empty State */}
                    <div className="flex flex-1 flex-col items-center justify-center text-[#8A9BB2]">
                        <BookOpen size={48} className="mb-3 opacity-30" strokeWidth={1.5} />
                        <p className="text-sm font-medium">No live assessments right now.</p>
                    </div>
                </div>

                {/* Upcoming Assessments */}
                <div className="flex min-h-[250px] flex-col rounded-[24px] bg-white p-6 shadow-[0_4px_12px_rgba(11,58,96,0.06)]">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="flex items-center gap-3 text-lg font-bold text-[#17233C]">
                            <Clock size={20} className="text-[#6B5AED]" />
                            Upcoming Assessments
                        </h2>
                        <span className="rounded-full bg-[#F0EEFD] px-3 py-1 text-[11px] font-bold text-[#6B5AED]">
                            0 Scheduled
                        </span>
                    </div>

                    {/* Empty State */}
                    <div className="flex flex-1 flex-col items-center justify-center text-[#8A9BB2]">
                        <Clock size={48} className="mb-3 opacity-30" strokeWidth={1.5} />
                        <p className="text-sm font-medium">No upcoming assessments scheduled.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;