import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { InstitutionLayout } from '../layouts/InstitutionAdmin';
import { Dashboard } from '../pages/InstitutionAdmin/Dashboard';
import { ManageTeacher } from '../pages/InstitutionAdmin/ManageTeacher';
import { ManageStudents } from '../pages/InstitutionAdmin/ManageStudents';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Institution Admin Routes */}
      <Route path="/institution" element={<InstitutionLayout />}>
        <Route index element={<Navigate to="/institution/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="teachers" element={<ManageTeacher />} />
        <Route path="students" element={<ManageStudents />} />
        <Route
          path="audit"
          element={
            <div className="rounded-xl border border-[#0B3A60]/10 bg-white p-6">
              <h2 className="font-['Geologica'] text-xl font-bold text-[#0B3A60]">
                Academic Assessment Audit
              </h2>
            </div>
          }
        />
        <Route
          path="support"
          element={
            <div className="rounded-xl border border-[#0B3A60]/10 bg-white p-6">
              <h2 className="font-['Geologica'] text-xl font-bold text-[#0B3A60]">
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
