import { useState } from 'react';
import StudentSidebar from './layouts/Student/Studentsidebar/Studentsidebar';
import StudentHeader from './layouts/Student/Studenttopbar/Studenttopbar';
import Dashboard from './Pages/Student/Studentdashboard/Dashboard';

function App() {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F2F6F9]">
      {/* Sidebar - fixed on the left */}
      <StudentSidebar
        activeItem={activeItem}
        onItemClick={setActiveItem}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <StudentHeader
          title="Student Dashboard"
          subtitle="Overview of your assignments and learning progress"
          studentName="Neha Verma"
          avatarInitial="NV"
        />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          {activeItem === 'Dashboard' && <Dashboard />}
          {activeItem !== 'Dashboard' && (
            <div className="flex h-full items-center justify-center text-[#8A9BB2]">
              <p>Content for {activeItem} goes here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;