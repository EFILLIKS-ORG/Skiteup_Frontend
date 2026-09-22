import React from 'react';

import WelcomeHeader from './WelcomeHeader';
import AssessmentGrid from './AssessmentGrid';

import Teachersidebar from '../../../layouts/Teacher/Teachersidebar/Teachersidebar';
import Teachertopbar from '../../../layouts/Teacher/Teachertopbar/Teachertopbar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-transparent">
      <Teachersidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Teachertopbar />
        <main className="relative flex-1 p-10 overflow-y-auto">
          <div className="relative z-10 max-w-7xl">
            <WelcomeHeader teacherName="teacher002" />

            <div className="mt-8">
              <AssessmentGrid />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
