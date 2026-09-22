import React from 'react';
import { Users, GraduationCap, TrendingUp, BookOpen, CheckSquare, Code, User } from 'lucide-react';

export interface DashboardStudentLimitData {
  currentStudents: number;
  totalStudents: number;
}

export interface DashboardSubscriptionData {
  daysRemaining: number;
  expiryDate: string;
  statusText: string;
  description?: string;
}

export interface DashboardStatItem {
  id: string;
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export interface DashboardModuleItem {
  id: string;
  title: string;
  value: string;
  icon: React.ReactNode;
}

export interface InstitutionDashboardData {
  studentLimit: DashboardStudentLimitData;
  subscription: DashboardSubscriptionData;
  stats: DashboardStatItem[];
  modules: DashboardModuleItem[];
}

export const institutionDashboardData: InstitutionDashboardData = {
  studentLimit: {
    currentStudents: 20,
    totalStudents: 200,
  },
  subscription: {
    daysRemaining: 320,
    expiryDate: 'August 7, 2027',
    statusText: 'ACTIVE',
    description: 'Your subscription is currently active and in good standing. All features are fully operational.',
  },
  stats: [
    {
      id: 'teachers',
      title: 'Teacher Count',
      value: '0 / 25',
      icon: React.createElement(Users, { size: 20, strokeWidth: 2 }),
    },
    {
      id: 'students',
      title: 'Student Count',
      value: '130 / 200',
      icon: React.createElement(GraduationCap, { size: 20, strokeWidth: 2 }),
    },
    {
      id: 'tests',
      title: 'Total Test Count',
      value: '0',
      icon: React.createElement(TrendingUp, { size: 20, strokeWidth: 2 }),
    },
  ],
  modules: [
    {
      id: 'mcq',
      title: '',
      value: 'MCQ',
      icon: React.createElement(CheckSquare, { size: 20, strokeWidth: 2 }),
    },
    {
      id: 'coding',
      title: '',
      value: 'Coding',
      icon: React.createElement(Code, { size: 20, strokeWidth: 2 }),
    },
    {
      id: 'parent_portal',
      title: '',
      value: 'Parent Portal',
      icon: React.createElement(User, { size: 20, strokeWidth: 2 }),
    },
    {
      id: 'lsrw',
      title: '',
      value: 'LSRW',
      icon: React.createElement(BookOpen, { size: 20, strokeWidth: 2 }),
    },
  ],
};