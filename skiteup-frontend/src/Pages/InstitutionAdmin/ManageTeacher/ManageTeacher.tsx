import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button, SearchBar, IconBox, Table } from '../../../components';
import { mockTeachersData } from '../../../data/institutionadmin/ManageTeacher';
import { AddTeacherModal } from './components';
import type { TeacherItem, ManageTeacherProps, TableColumn } from '../../../utils/utils';

export const ManageTeacher: React.FC<ManageTeacherProps> = ({ className = '' }) => {
  const [teachers, setTeachers] = useState<TeacherItem[]>(mockTeachersData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  const filteredTeachers = teachers.filter((teacher) => {
    const search = searchTerm.toLowerCase();
    return (
      teacher.teacherName.toLowerCase().includes(search) ||
      teacher.idNumber.toLowerCase().includes(search)
    );
  });

  const handleAddTeacher = (newTeacherData: Omit<TeacherItem, 'id'>) => {
    const newTeacher: TeacherItem = {
      id: String(Date.now()),
      ...newTeacherData,
    };
    setTeachers((prev) => [newTeacher, ...prev]);
  };

  const handleDeleteTeacher = (id: string) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
  };

  const columns: TableColumn<TeacherItem>[] = [
    {
      key: 'teacherName',
      header: 'Teacher Name',
      render: (row) => (
        <span className="font-['Geologica'] text-[15px] font-semibold text-[#0B3A60]">
          {row.teacherName}
        </span>
      ),
    },
    {
      key: 'idNumber',
      header: 'ID Number',
      render: (row) => (
        <span className="font-['Geologica'] text-[14px] font-normal text-[#0B3A60]/80">
          {row.idNumber}
        </span>
      ),
    },
    {
      key: 'password',
      header: 'Password',
      render: (row) => (
        <span className="font-['Geologica'] text-[14px] font-normal text-[#0B3A60]/80">
          {row.password}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Edit Teacher"
            onClick={() => console.log('Edit teacher', row.id)}
            className="group transition-transform hover:scale-105"
          >
            <IconBox
              icon={<Pencil size={16} className="text-[#2563EB] group-hover:text-[#1D4ED8]" />}
              size="sm"
              className="!h-8 !w-8 !rounded-lg !bg-[#EFF6FF] transition-colors"
            />
          </button>
          <button
            type="button"
            aria-label="Delete Teacher"
            onClick={() => handleDeleteTeacher(row.id)}
            className="group transition-transform hover:scale-105"
          >
            <IconBox
              icon={<Trash2 size={16} className="text-[#EF4444] group-hover:text-[#DC2626]" />}
              size="sm"
              className="!h-8 !w-8 !rounded-lg !bg-[#FEF2F2] transition-colors"
            />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className={`flex w-full flex-col gap-6 ${className}`.trim()}>
      <section className="flex flex-col gap-6 rounded-2xl border border-[#0B3A60]/10 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col">
            <h2 className="font-['Geologica'] text-xl sm:text-2xl font-bold text-[#0B3A60]">
              Faculty Registry
            </h2>
            <p className="font-['Geologica'] text-xs sm:text-sm font-normal text-[#0B3A60]/60">
              Manage all teachers belonging to your institution
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <SearchBar
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="!w-full sm:!w-[280px] lg:!w-[320px] !h-[42px] !rounded-xl !bg-[#F8FAFC] !border-[#0B3A60]/15"
            />
            <Button
              variant="primary"
              size="md"
              leftIcon={<Plus size={18} strokeWidth={2.5} />}
              onClick={() => setIsAddModalOpen(true)}
              className="!bg-[#0B3A60] hover:!bg-[#082943] !text-white !h-[42px] !rounded-xl !px-5 !text-sm font-semibold shrink-0 cursor-pointer"
            >
              Add Teacher
            </Button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <Table<TeacherItem & Record<string, unknown>>
            columns={columns as TableColumn<TeacherItem & Record<string, unknown>>[]}
            data={filteredTeachers as (TeacherItem & Record<string, unknown>)[]}
            className="!border-[#0B3A60]/10"
          />
        </div>
      </section>
      <AddTeacherModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTeacher}
      />
    </div>
  );
};

export default ManageTeacher;