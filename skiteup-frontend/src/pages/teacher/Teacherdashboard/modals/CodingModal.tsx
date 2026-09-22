import React, { useState } from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import { AssessmentModal, Input, Label } from '../../../../components';
import type { CreateCodingModalProps } from '../../../../utils/utils';

export const CreateCodingModal: React.FC<CreateCodingModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [assessmentName, setAssessmentName] = useState('');

  const handleSubmit = () => {
    if (!assessmentName.trim()) return;
    onSubmit?.({
      assessmentName: assessmentName.trim(),
    });
  };

  return (
    <AssessmentModal
      open={open}
      onClose={onClose}
      title="Create Coding Assessment"
      subtitle="Configure assessment settings"
      icon={<Code2 className="w-5 h-5 text-white" strokeWidth={2.2} />}
      confirmText="Next"
      cancelText="Cancel"
      confirmIcon={<ArrowRight size={16} />}
      confirmDisabled={!assessmentName.trim()}
      onConfirm={handleSubmit}
      maxWidth="max-w-[490px]"
    >
      <div className="flex flex-col gap-5">
        {/* Assessment Name Field */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="coding-assessment-name"
            className="text-[11px] font-bold tracking-wider text-slate-700 uppercase"
          >
            ASSESSMENT NAME *
          </Label>
          <Input
            id="coding-assessment-name"
            type="text"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
            placeholder="e.g. Coding Semester Assessment 2026"
            className="h-11 rounded-xl border-slate-200 text-[13.5px] placeholder:text-slate-400 focus:border-[#0B3A60]"
          />
        </div>

        {/* Coding Setup Information Card */}
        <div className="rounded-2xl border border-[#BDE0F5] bg-[#EBF5FB] p-4 text-left transition-all">
          <h4 className="text-[13.5px] font-bold text-[#0B3A60]">
            Coding Assessment Setup
          </h4>
          <p className="mt-1 text-[12px] leading-relaxed text-slate-600">
            Click Next to enter the problem builder where you can add coding challenges, test cases, and time limits.
          </p>
        </div>
      </div>
    </AssessmentModal>
  );
};

export default CreateCodingModal;
