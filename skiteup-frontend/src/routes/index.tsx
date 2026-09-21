import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InstitutionLayout } from '../layouts/InstitutionAdmin';
import { Dashboard } from '../Pages/InstitutionAdmin/Dashboard';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Institution Admin Routes */}
      <Route path="/institution" element={<InstitutionLayout />}>
        <Route index element={<Navigate to="/institution/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* Placeholder sub-routes for sidebar navigation */}
        <Route
          path="teachers"
          element={
            <div className="rounded-xl border border-[#0B3A60]/10 bg-white p-6">
              <h2 className="font-['Poppins'] text-xl font-bold text-[#0B3A60]">
                Manage Teachers
              </h2>
            </div>
          }
        />
        <Route
          path="students"
          element={
            <div className="rounded-xl border border-[#0B3A60]/10 bg-white p-6">
              <h2 className="font-['Poppins'] text-xl font-bold text-[#0B3A60]">
                Manage Students
              </h2>
            </div>
          }
        />
        <Route
          path="audit"
          element={
            <div className="rounded-xl border border-[#0B3A60]/10 bg-white p-6">
              <h2 className="font-['Poppins'] text-xl font-bold text-[#0B3A60]">
                Academic Assessment Audit
              </h2>
            </div>
          }
        />
        <Route
          path="support"
          element={
            <div className="rounded-xl border border-[#0B3A60]/10 bg-white p-6">
              <h2 className="font-['Poppins'] text-xl font-bold text-[#0B3A60]">
                Support Center
              </h2>
            </div>
          }
        />
      </Route>

      {/* Fallback to institution dashboard */}
      <Route path="*" element={<Navigate to="/institution/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
