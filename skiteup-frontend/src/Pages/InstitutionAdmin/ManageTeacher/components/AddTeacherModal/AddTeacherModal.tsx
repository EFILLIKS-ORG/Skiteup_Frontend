import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../../../../components';
import type { TeacherItem } from '../../../../../utils/utils';

export interface AddTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (teacher: Omit<TeacherItem, 'id'>) => void;
}

export const AddTeacherModal: React.FC<AddTeacherModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [teacherName, setTeacherName] = useState<string>('');
  const [idNumber, setIdNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setTeacherName('');
    setIdNumber('');
    setPassword('');
    setShowPassword(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherName.trim() || !idNumber.trim() || !password.trim()) {
      return;
    }

    onAdd({
      teacherName: teacherName.trim(),
      idNumber: idNumber.trim(),
      password: password.trim(),
    });

    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-[480px] rounded-[24px] bg-white p-7 sm:p-8 shadow-2xl">
        <button
          type="button"
          aria-label="Close modal"
          onClick={handleClose}
          className="absolute right-6 top-6 text-[#0B3A60]/40 transition hover:text-[#0B3A60] cursor-pointer"
        >
          <X size={20} strokeWidth={2.2} />
        </button>
        <div className="flex flex-col mb-6">
          <h2 className="font-['Geologica'] text-[22px] font-bold text-[#0B3A60]">
            Add New Faculty
          </h2>
          <p className="mt-1 font-['Geologica'] text-xs text-[#0B3A60]/60">
            Create a teacher account for this institution
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="teacherName"
              className="font-['Geologica'] text-xs font-semibold text-[#0B3A60]"
            >
              Teacher Full Name
            </label>
            <input
              id="teacherName"
              type="text"
              required
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="e.g. Prof. Kumar"
              className="h-[46px] w-full rounded-xl border border-[#0B3A60]/15 bg-white px-4 font-['Geologica'] text-sm text-[#0B3A60] placeholder:text-[#0B3A60]/30 outline-none transition focus:border-[#0B3A60] focus:ring-1 focus:ring-[#0B3A60]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="facultyId"
              className="font-['Geologica'] text-xs font-semibold text-[#0B3A60]"
            >
              Faculty ID Number
            </label>
            <input
              id="facultyId"
              type="text"
              required
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              placeholder="e.g. KNCET-T01"
              className="h-[46px] w-full rounded-xl border border-[#0B3A60]/15 bg-white px-4 font-['Geologica'] text-sm text-[#0B3A60] placeholder:text-[#0B3A60]/30 outline-none transition focus:border-[#0B3A60] focus:ring-1 focus:ring-[#0B3A60]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="facultyPassword"
              className="font-['Geologica'] text-xs font-semibold text-[#0B3A60]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="facultyPassword"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-[46px] w-full rounded-xl border border-[#0B3A60]/15 bg-white pl-4 pr-11 font-['Geologica'] text-sm text-[#0B3A60] placeholder:text-[#0B3A60]/30 outline-none transition focus:border-[#0B3A60] focus:ring-1 focus:ring-[#0B3A60]"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#0B3A60]/40 transition hover:text-[#0B3A60] cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={2} />
                ) : (
                  <Eye size={18} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleClose}
              className="!h-[42px] !rounded-xl !border-[#0B3A60]/20 !bg-transparent !px-6 !text-sm !font-semibold !text-[#0B3A60] hover:!bg-[#0B3A60]/5 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="!h-[42px] !rounded-xl !bg-[#0B3A60] hover:!bg-[#082943] !px-6 !text-sm !font-semibold !text-white cursor-pointer"
            >
              Add Teacher
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherModal;
