import React, { useState } from 'react';
import { ClipboardList, BookOpen, Code2 } from 'lucide-react';
import AssessmentCard from './AssessmentCard';
import { CreateMcqModal, CreateLsrwModal, CreateCodingModal } from './modals';
import { teacherAssessments } from '../../../data/teacher/teacherDashboard';
import type { AssessmentType } from '../../../types/teacher/teacherDashboard';

const getAssessmentIcon = (id: string) => {
  switch (id) {
    case 'mcq':
      return <ClipboardList className="w-6 h-6 text-white" strokeWidth={2.2} />;
    case 'lsrw':
      return <BookOpen className="w-6 h-6 text-white" strokeWidth={2.2} />;
    case 'coding':
      return <Code2 className="w-6 h-6 text-white" strokeWidth={2.2} />;
    default:
      return null;
  }
};

const AssessmentGrid = () => {
  const [activeModal, setActiveModal] = useState<AssessmentType | null>(null);

  const handleClose = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {teacherAssessments.map((assessment) => (
          <AssessmentCard
            key={assessment.id}
            title={assessment.title}
            description={assessment.description}
            icon={getAssessmentIcon(assessment.id)}
            onCreate={() => {
              setActiveModal(assessment.id as AssessmentType);
            }}
          />
        ))}
      </div>

      {/* MCQ Assessment Modal */}
      <CreateMcqModal
        open={activeModal === 'mcq'}
        onClose={handleClose}
        onSubmit={(data) => {
          console.log('MCQ Assessment Created:', data);
          handleClose();
        }}
      />

      {/* LSRW Assessment Modal */}
      <CreateLsrwModal
        open={activeModal === 'lsrw'}
        onClose={handleClose}
        onSubmit={(data) => {
          console.log('LSRW Assessment Created:', data);
          handleClose();
        }}
      />

      {/* Coding Assessment Modal */}
      <CreateCodingModal
        open={activeModal === 'coding'}
        onClose={handleClose}
        onSubmit={(data) => {
          console.log('Coding Assessment Created:', data);
          handleClose();
        }}
      />
    </>
  );
};

export default AssessmentGrid;

