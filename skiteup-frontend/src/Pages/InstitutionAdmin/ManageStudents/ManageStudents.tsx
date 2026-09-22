import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button, SearchBar, Select, Table } from '../../../components';
import {
  mockBatchesOptions,
  mockDepartmentsOptions,
  mockStudentBatchesData,
} from '../../../data/institutionadmin/ManageStudents';
import type {
  StudentBatchItem,
  ManageStudentsProps,
  TableColumn,
} from '../../../utils/utils';

export const ManageStudents: React.FC<ManageStudentsProps> = ({ className = '' }) => {
  const [batches] = useState<StudentBatchItem[]>(mockStudentBatchesData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const filteredBatches = batches.filter((batch) => {
    const matchesSearch =
      searchTerm === '' ||
      batch.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      batch.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      batch.section.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBatch = selectedBatch === 'all' || batch.batch === selectedBatch;
    const matchesDept = selectedDepartment === 'all' || batch.department === selectedDepartment;

    return matchesSearch && matchesBatch && matchesDept;
  });

  const columns: TableColumn<StudentBatchItem>[] = [
    {
      key: 'sNo',
      header: 'S No.',
      render: (row) => (
        <span className="font-['Geologica'] text-[15px] font-medium text-[#0B3A60]">
          {row.sNo}
        </span>
      ),
    },
    {
      key: 'batch',
      header: 'Batch',
      render: (row) => (
        <span className="font-['Geologica'] text-[15px] font-semibold text-[#0B3A60]">
          {row.batch}
        </span>
      ),
    },
    {
      key: 'department',
      header: 'Department',
      render: (row) => (
        <span className="font-['Geologica'] text-[14px] font-normal text-[#0B3A60]/80">
          {row.department}
        </span>
      ),
    },
    {
      key: 'section',
      header: 'Section',
      render: (row) => (
        <span className="font-['Geologica'] text-[14px] font-normal text-[#0B3A60]/80">
          {row.section}
        </span>
      ),
    },
    {
      key: 'totalStudents',
      header: 'Total Students',
      render: (row) => (
        <span className="font-['Geologica'] text-[14px] font-semibold text-[#0B3A60]">
          {row.totalStudents}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: () => (
        <span className="font-['Geologica'] text-[13px] text-[#0B3A60]/50">—</span>
      ),
    },
  ];

  return (
    <div className={`flex w-full flex-col gap-6 ${className}`.trim()}>
      <section className="flex flex-col gap-6 rounded-2xl border border-[#0B3A60]/10 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col">
            <h2 className="font-['Geologica'] text-xl sm:text-2xl font-bold text-[#0B3A60]">
              Student Batches
            </h2>
            <p className="font-['Geologica'] text-xs sm:text-sm font-normal text-[#0B3A60]/60">
              Manage class cohorts and bulk register student lists
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <SearchBar
              placeholder="Search classes..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="!w-full sm:!w-[200px] md:!w-[220px] !h-[42px] !rounded-xl !bg-[#F8FAFC] !border-[#0B3A60]/15"
            />

            <div className="w-full sm:w-[150px]">
              <Select
                options={mockBatchesOptions}
                value={selectedBatch}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedBatch(e.target.value)}
                className="!h-[42px] !rounded-xl !border-[#0B3A60]/15 !bg-white !font-medium !text-xs sm:!text-sm text-[#0B3A60]"
              />
            </div>

            <div className="w-full sm:w-[165px]">
              <Select
                options={mockDepartmentsOptions}
                value={selectedDepartment}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDepartment(e.target.value)}
                className="!h-[42px] !rounded-xl !border-[#0B3A60]/15 !bg-white !font-medium !text-xs sm:!text-sm text-[#0B3A60]"
              />
            </div>

            <Button
              variant="primary"
              size="md"
              leftIcon={<Plus size={18} strokeWidth={2.5} />}
              onClick={() => console.log('Bulk Upload Students clicked')}
              className="!bg-[#0B3A60] hover:!bg-[#082943] !text-white !h-[42px] !rounded-xl !px-5 !text-sm font-semibold shrink-0 cursor-pointer"
            >
              Bulk Upload Students
            </Button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <Table<StudentBatchItem & Record<string, unknown>>
            columns={columns as TableColumn<StudentBatchItem & Record<string, unknown>>[]}
            data={filteredBatches as (StudentBatchItem & Record<string, unknown>)[]}
            emptyMessage="No student groups registered. Upload spreadsheets to enroll students."
            className="!border-[#0B3A60]/10"
          />
        </div>
      </section>
    </div>
  );
};
export default ManageStudents;