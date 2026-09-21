import type { ReactNode } from "react";

export type AssessmentType =
  | "mcq"
  | "lsrw"
  | "coding";

export type TeacherAssessment = {
  id: AssessmentType;
  title: string;
  description: string;
  icon?: ReactNode;
};