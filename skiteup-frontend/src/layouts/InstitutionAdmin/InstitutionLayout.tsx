import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { InstitutionSidebar } from './InstitutionSidebar';
import { InstitutionTopbar } from './InstitutionTopbar';

export interface InstitutionLayoutProps {
  children?: React.ReactNode;
}

export const InstitutionLayout: React.FC<InstitutionLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  // Map route to active sidebar item
  const getActiveItem = () => {
    const path = location.pathname;
    if (path.includes('/institution/teachers')) return 'Manage Teachers';
    if (path.includes('/institution/students')) return 'Manage Students';
    if (path.includes('/institution/audit')) return 'Academic Assessment Audit';
    if (path.includes('/institution/support')) return 'Support Center';
    return 'Dashboard';
  };

  const handleItemClick = (item: string) => {
    setIsMobileMenuOpen(false);
    switch (item) {
      case 'Dashboard':
        navigate('/institution/dashboard');
        break;
      case 'Manage Teachers':
        navigate('/institution/teachers');
        break;
      case 'Manage Students':
        navigate('/institution/students');
        break;
      case 'Academic Assessment Audit':
        navigate('/institution/audit');
        break;
      case 'Support Center':
        navigate('/institution/support');
        break;
      default:
        navigate('/institution/dashboard');
    }
  };

  const handleSignOut = () => {
    console.log('Signing out...');
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-[#F8FAFC]">
      {/* Sidebar - handles responsive mobile drawer and desktop collapse */}
      <InstitutionSidebar
        activeItem={getActiveItem()}
        onItemClick={handleItemClick}
        onSignOut={handleSignOut}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        {/* Topbar */}
        <InstitutionTopbar
          title="KNCET Control Center"
          userName="VIKASH N"
          email="Administrator"
          avatarInitial="AD"
          onMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />

        {/* Scrollable Page Body */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-7">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default InstitutionLayout;
