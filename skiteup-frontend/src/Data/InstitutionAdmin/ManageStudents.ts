import type { StudentBatchItem, SelectOption } from '../../utils/utils';

export const mockBatchesOptions: SelectOption[] = [
  { label: 'All Batches', value: 'all' },
  { label: '2021 - 2025', value: '2021-2025' },
  { label: '2022 - 2026', value: '2022-2026' },
  { label: '2023 - 2027', value: '2023-2027' },
  { label: '2024 - 2028', value: '2024-2028' },
];

export const mockDepartmentsOptions: SelectOption[] = [
  { label: 'All Departments', value: 'all' },
  { label: 'Computer Science and Engineering', value: 'CSE' },
  { label: 'Information Technology', value: 'IT' },
  { label: 'Electronics and Communication', value: 'ECE' },
  { label: 'Mechanical Engineering', value: 'MECH' },
];
export const mockStudentBatchesData: StudentBatchItem[] = [];
