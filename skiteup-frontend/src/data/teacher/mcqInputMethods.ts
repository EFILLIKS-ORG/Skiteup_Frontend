import { FileText, Upload } from 'lucide-react';

export const mcqInputMethods = [
  {
    value: 'upload' as const,
    icon: Upload,
    title: 'Upload Questions',
    description: 'Import Excel / CSV / JSON',
  },
  {
    value: 'type' as const,
    icon: FileText,
    title: 'Type Questions',
    description: 'Create questions manually',
  },
];