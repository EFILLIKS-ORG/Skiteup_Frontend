import React from 'react';
import { ClipboardList, BookOpen, Code2 } from 'lucide-react';
import AssessmentCard from './AssessmentCard';
import { teacherAssessments } from '../../../data/teacher/teacherDashboard';

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
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {teacherAssessments.map((assessment) => (
        <AssessmentCard
          key={assessment.id}
          title={assessment.title}
          description={assessment.description}
          icon={getAssessmentIcon(assessment.id)}
          onCreate={() => {
            console.log(`Create ${assessment.title}`);
          }}
        />
      ))}
    </div>
  );
};

export default AssessmentGrid;
