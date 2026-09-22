import React, { useState } from 'react';
import { BookOpen, Check, ArrowRight } from 'lucide-react';
import { AssessmentModal, Input, Label } from '../../../../components';
import type { CreateLsrwModalProps, LsrwSectionKey, SectionOption } from '../../../../utils/utils';


const SECTIONS: SectionOption[] = [
  { key: 'listening', label: 'Listening' },
  { key: 'speaking', label: 'Speaking' },
  { key: 'reading', label: 'Reading' },
  { key: 'writing', label: 'Writing' },
];

export const CreateLsrwModal: React.FC<CreateLsrwModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [assessmentName, setAssessmentName] = useState('');
  const [selectedSections, setSelectedSections] = useState<Record<LsrwSectionKey, boolean>>({
    listening: false,
    speaking: true,
    reading: true,
    writing: true,
  });

  const toggleSection = (key: LsrwSectionKey) => {
    setSelectedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const selectedCount = Object.values(selectedSections).filter(Boolean).length;

  const handleSubmit = () => {
    if (!assessmentName.trim() || selectedCount === 0) return;
    const activeSections = (Object.keys(selectedSections) as LsrwSectionKey[]).filter(
      (key) => selectedSections[key],
    );
    onSubmit?.({
      assessmentName: assessmentName.trim(),
      sections: activeSections,
    });
  };

  return (
    <AssessmentModal
      open={open}
      onClose={onClose}
      title="Create LSRW Assessment"
      subtitle="Configure assessment settings"
      icon={<BookOpen className="w-5 h-5 text-white" strokeWidth={2.2} />}
      confirmText="Next"
      cancelText="Cancel"
      confirmIcon={<ArrowRight size={16} />}
      confirmDisabled={!assessmentName.trim() || selectedCount === 0}
      onConfirm={handleSubmit}
      maxWidth="max-w-[490px]"
    >
      <div className="flex flex-col gap-5">
        {/* Assessment Name Field */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="lsrw-assessment-name"
            className="text-[11px] font-bold tracking-wider text-slate-700 uppercase"
          >
            ASSESSMENT NAME *
          </Label>
          <Input
            id="lsrw-assessment-name"
            type="text"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
            placeholder="e.g. LSRW Semester Assessment 2026"
            className="h-11 rounded-xl border-slate-200 text-[13.5px] placeholder:text-slate-400 focus:border-[#0B3A60]"
          />
        </div>

        {/* Select LSRW Sections */}
        <div className="flex flex-col gap-2.5">
          <Label className="text-[11px] font-bold tracking-wider text-slate-700 uppercase">
            SELECT LSRW SECTIONS
          </Label>

          <div className="grid grid-cols-2 gap-3">
            {SECTIONS.map((section) => {
              const isChecked = selectedSections[section.key];
              return (
                <button
                  key={section.key}
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className={`flex h-[52px] items-center justify-between rounded-xl px-4 transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'border-2 border-[#0B3A60] bg-white shadow-xs'
                      : 'border border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`text-[13.5px] ${
                      isChecked
                        ? 'font-bold text-[#0B3A60]'
                        : 'font-normal text-slate-600'
                    }`}
                  >
                    {section.label}
                  </span>

                  <div
                    className={`flex h-[18px] w-[18px] items-center justify-center rounded-[4px] transition-colors ${
                      isChecked
                        ? 'bg-[#0070F3] text-white'
                        : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check size={13} strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AssessmentModal>
  );
};

export default CreateLsrwModal;
