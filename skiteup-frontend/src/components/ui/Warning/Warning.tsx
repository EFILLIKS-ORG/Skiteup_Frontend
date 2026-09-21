import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { WarningProps } from '../../../utils/utils';

export const Warning: React.FC<WarningProps> = ({ title, message, className = '' }) => {
  return (
    <div className={`flex gap-3 rounded-xl border border-yellow-300 bg-yellow-50 p-4 ${className}`}>
      <AlertTriangle size={20} className="mt-0.5 shrink-0 text-yellow-600" />

      <div>
        {title && <h4 className="text-sm font-semibold text-yellow-900">{title}</h4>}

        <p className="text-sm text-yellow-800">{message}</p>
      </div>
    </div>
  );
};

export default Warning;
