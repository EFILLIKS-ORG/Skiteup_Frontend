import React from 'react';
import type { PageContainerProps } from '../../utils/utils';
import AuraBackground from '../ui/AuraBackground';
import LargeConstellationBackground from '../ui/LargeConstellationBackground';

export interface ExtendedPageContainerProps extends PageContainerProps {
  showAura?: boolean;
  showConstellation?: boolean;
}

export const PageContainer: React.FC<ExtendedPageContainerProps> = ({
  children,
  className = '',
  showAura = true,
  showConstellation = true,
}) => {
  return (
    <div className={`relative w-full min-h-screen overflow-x-hidden bg-[#F8FAFC] ${className}`.trim()}>
      {/* Animated Aura Gradient Glow */}
      {showAura && <AuraBackground />}

      {/* Large Geometric Constellation Nodes Watermark */}
      {showConstellation && <LargeConstellationBackground opacity={0.65} />}

      {/* Page Content */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
