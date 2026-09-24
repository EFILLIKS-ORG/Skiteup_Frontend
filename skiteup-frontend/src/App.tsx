import { useState } from "react";
import Switch from "@/components/ui/Switch";
import Tooltip from "@/components/ui/Tooltip";
import EmptyState from "@/components/ui/EmptyState";
import DatePicker from "@/components/ui/DatePicker";
import Label from "@/components/ui/Label";
import Count from "@/components/ui/Count";
import TimeSelector from "@/components/ui/TimeSelector";
import StatCard from "@/components/ui/StatCard";
import Pagination from "@/components/ui/Pagination";
import type { TimeValue } from "@/types/timeSelector";
import { User, Calendar } from "reicon-react";

const App = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);

  const [selectedLabel, setSelectedLabel] = useState<string>("CSE");
  const [selectedLabels, setSelectedLabels] = useState<string[]>(["CSE"]);

  const [count1, setCount1] = useState<number>(20);
  const [count2, setCount2] = useState<number>(20);

  const [time, setTime] = useState<TimeValue>({ hour: 10, minute: 30, period: "AM" });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const options = ["CSE", "IT", "AIDS", "ECE"];

  return (
    <div className="min-h-screen bg-(--color-background) p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-6xl flex flex-col gap-8">
 
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-(--font-weight-bold) text-(--color-text-primary)">
            UI Component Library
          </h1>
          <p className="text-sm font-(--font-weight-regular) text-(--color-text-secondary)">
            Responsive component system with custom tokens & theme variables.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-lg font-(--font-weight-bold) text-(--color-text-primary)">
              Responsive Stat Cards
            </h2>
            <p className="text-xs text-(--color-text-tertiary)">
              Supports variable icon box background colors and icon colors via CSS variables, hex/RGB, or Tailwind classes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
  
            <StatCard
              label="Teacher Count"
              value="1/25"
              icon={<User size={24} />}
              iconBgColor="bg-(--color-primary)"
              iconColor="text-(--color-text-inverse)"
            />

     
            <StatCard
              label="Total Students"
              value="1,248"
              icon={<User size={24} />}
              iconBgColor="var(--color-secondary)"
              iconColor="#ffffff"
            />

 
            <StatCard
              label="Active Batches"
              value="18"
              icon={<Calendar size={24} />}
              iconBgColor="var(--color-accent)"
              iconColor="#ffffff"
              onClick={() => alert("StatCard Clicked!")}
            />


            <StatCard
              label="Completed Courses"
              value="94%"
              icon={<User size={24} />}
              iconBgColor="#009966"
              iconColor="#ffffff"
            />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-(--font-weight-bold) text-(--color-text-primary)">
            Form Controls & Inputs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 sm:p-6 bg-(--color-cardbg) rounded-(--radius-xl) border border-(--color-border-light) shadow-xs">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-(--font-weight-semibold) text-(--color-text-tertiary) uppercase tracking-wider">
                Toggles & Tooltips
              </span>
              <div className="flex items-center gap-4 flex-wrap">
                <Switch
                  label={enabled ? "Active" : "Disabled"}
                  checked={enabled}
                  onChange={setEnabled}
                />

                <Tooltip content="Custom Tooltip Action" position="bottom">
                  <button className="rounded-md bg-(--color-secondary) px-3 py-1.5 text-xs text-(--color-text-inverse) font-(--font-weight-medium) hover:bg-(--color-hover-secondary) transition-colors">
                    Hover Me
                  </button>
                </Tooltip>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-(--font-weight-semibold) text-(--color-text-tertiary) uppercase tracking-wider">
                Date Picker
              </span>
              <DatePicker
                value={date}
                onChange={setDate}
                placeholder="Select Date"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-(--font-weight-semibold) text-(--color-text-tertiary) uppercase tracking-wider">
                Time Selector
              </span>
              <TimeSelector
                value={time}
                onChange={(val) => setTime(val)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-(--font-weight-semibold) text-(--color-text-tertiary) uppercase tracking-wider">
                Count Controls
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Count
                  label="Outlined"
                  variant="outlined"
                  value={count1}
                  onChange={setCount1}
                  min={0}
                />
                <Count
                  label="Filled"
                  variant="filled"
                  value={count2}
                  onChange={setCount2}
                  min={0}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-(--font-weight-semibold) text-(--color-text-tertiary) uppercase tracking-wider">
                Single Label Select
              </span>
              <Label
                options={options}
                value={selectedLabel}
                onChange={setSelectedLabel}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-(--font-weight-semibold) text-(--color-text-tertiary) uppercase tracking-wider">
                Multiple Label Select
              </span>
              <Label
                options={options}
                multiple
                value={selectedLabels}
                onChange={setSelectedLabels}
              />
            </div>
          </div>
        </section>


        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-(--font-weight-bold) text-(--color-text-primary)">
            Navigation & States
          </h2>

          <div className="flex flex-col gap-6 p-5 sm:p-6 bg-(--color-cardbg) rounded-(--radius-xl) border border-(--color-border-light) shadow-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm font-(--font-weight-medium) text-(--color-text-secondary)">
                Page {currentPage} of 10
              </span>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>

            <hr className="border-(--color-border-light)" />

            <EmptyState
              title="No records found"
              description="Try adjusting your filters or search terms to find what you are looking for."
              icon={<User size={24} />}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;