import React from 'react';
import type { PageContainerProps } from '../../../utils/utils';



export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return <main className={`w-full flex-1 p-6 ${className}`.trim()}>{children}</main>;
};

export default PageContainer;
