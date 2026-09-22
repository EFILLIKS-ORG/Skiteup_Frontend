import React from 'react';
import {
  StudentLimitCard,
  SubscriptionStatusCard,
  StatCard,
} from './components';
import { institutionDashboardData } from '../../../data/InstitutionAdmin/DashboardData';

export const Dashboard: React.FC = () => {
  const { studentLimit, subscription, stats, modules } = institutionDashboardData;

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Top Row: Student Limit & Subscription Status */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <StudentLimitCard
          currentStudents={studentLimit.currentStudents}
          totalStudents={studentLimit.totalStudents}
        />
        <SubscriptionStatusCard
          daysRemaining={subscription.daysRemaining}
          expiryDate={subscription.expiryDate}
          statusText={subscription.statusText}
          description={subscription.description}
        />
      </section>

      {/* Middle Row: Overview Stat Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            className="!max-w-none shadow-sm hover:shadow-md"
          />
        ))}
      </section>

      {/* Bottom Row: Active Modules Section */}
      <section className="flex flex-col gap-4 rounded-2xl border border-[#0B3A60]/10 bg-white p-6 shadow-sm">
        <div className="flex flex-col">
          <h2 className="font-['Poppins'] text-lg font-bold text-[#0B3A60]">
            Active Modules
          </h2>
          <p className="font-['Poppins'] text-xs font-normal text-[#0B3A60]/60">
            Assigned by Platform Admin
          </p>
        </div>

        {/* Modules Grid using StatCard */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <StatCard
              key={mod.value}
              title={mod.title}
              value={mod.value}
              icon={mod.icon}
              className="!max-w-none border-[#0B3A60]/10 cursor-pointer"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
