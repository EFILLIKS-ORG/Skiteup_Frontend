import React, { useRef, useState } from 'react';
import { ArrowRight, ClipboardList, X } from 'lucide-react';
import { AssessmentModal, Button, Input, Label, OptionCard } from '../../../../components';
import type { CreateMcqModalProps, McqQuestionInputMethod } from '../../../../utils/utils';
import { mcqInputMethods } from '../../../../data/teacher/mcqInputMethods';

export const CreateMcqModal: React.FC<CreateMcqModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [assessmentName, setAssessmentName] = useState('');
  const [method, setMethod] =
    useState<McqQuestionInputMethod>('upload');

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();

    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = () => {
    const name = assessmentName.trim();

    if (!name) return;

    onSubmit?.({
      assessmentName: name,
      method,
      file: selectedFile,
    });
  };

  return (
    <AssessmentModal
      open={open}
      onClose={onClose}
      title="Create MCQ Assessment"
      subtitle="Configure assessment settings"
      icon={
        <ClipboardList
          className="h-5 w-5 text-white"
          strokeWidth={2.2}
        />
      }
      confirmText="Next"
      cancelText="Cancel"
      confirmIcon={<ArrowRight size={16} />}
      confirmDisabled={!assessmentName.trim()}
      onConfirm={handleSubmit}
      maxWidth="max-w-[490px]"
    >
      <div className="flex flex-col gap-5">

        {/* Assessment Name */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="mcq-assessment-name"
            className="text-[11px] font-bold uppercase tracking-wider text-slate-700"
          >
            ASSESSMENT NAME *
          </Label>

          <Input
            id="mcq-assessment-name"
            type="text"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
            placeholder="e.g. MCQ Semester Assessment 2026"
            className="h-11 rounded-xl border-slate-200 text-[13.5px]"
          />
        </div>

        {/* Question Input Method */}
        <div className="flex flex-col gap-2.5">
          <Label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
            HOW WOULD YOU LIKE TO ADD QUESTIONS?
          </Label>

          <div className="grid grid-cols-2 gap-3">
            {mcqInputMethods.map((item) => (
              <OptionCard
                key={item.value}
                icon={
                  <item.icon
                    size={20}
                    strokeWidth={2.2}
                  />
                }
                title={item.title}
                description={item.description}
                selected={method === item.value}
                onClick={() => setMethod(item.value)}
              />
            ))}
          </div>
        </div>

        {/* Upload Question File */}
        {method === 'upload' && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#C5DCEE] bg-[#FAFCFD] px-4 py-5 text-center transition-colors hover:border-[#0B3A60]/50"
          >
            <p className="text-[13px] font-semibold text-slate-800">
              Upload Question File
            </p>

            <p className="mt-0.5 text-[11px] text-slate-500">
              Supported formats: .xlsx, .xls, .csv, .json
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls,.csv,.json"
              onChange={handleFileChange}
              onClick={(e) => e.stopPropagation()}
              className="hidden"
            />

            {selectedFile && (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5">
                <span className="max-w-[200px] truncate text-[12px] font-medium text-[#0B3A60]">
                  {selectedFile.name}
                </span>

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  iconOnly
                  aria-label="Remove file"
                  onClick={handleRemoveFile}
                  leftIcon={<X size={14} />}
                  className="h-6 w-6 rounded-full p-0.5 text-slate-400"
                />
              </div>
            )}
          </div>
        )}

      </div>
    </AssessmentModal>
  );
};

export default CreateMcqModal;