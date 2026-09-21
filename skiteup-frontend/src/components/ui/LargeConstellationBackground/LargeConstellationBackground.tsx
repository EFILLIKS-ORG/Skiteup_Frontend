"use client";
import React from "react";

export interface LargeConstellationProps {
  className?: string;
  opacity?: number;
}

/**
 * LargeConstellationBackground — Elegant 5-8 large geometric nodes with
 * connecting network mesh lines floating gently in the background.
 */
export const LargeConstellationBackground: React.FC<LargeConstellationProps> = ({
  className = "",
  opacity = 0.25,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
    >
      <style>{`
        @keyframes constellationRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes subtleDrift1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-12px, 10px) scale(1.02); }
        }
        @keyframes subtleDrift2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(10px, -14px) scale(0.98); }
        }
        @keyframes subtleDrift3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-8px, -10px) scale(1.01); }
        }
        .constellation-wrapper {
          transform-origin: 650px 420px;
          animation: constellationRotate 120s linear infinite;
        }
        .constellation-drift-1 {
          animation: subtleDrift1 18s ease-in-out infinite;
        }
        .constellation-drift-2 {
          animation: subtleDrift2 22s ease-in-out infinite;
        }
        .constellation-drift-3 {
          animation: subtleDrift3 26s ease-in-out infinite;
        }
      `}</style>

      <svg
        className="absolute right-0 top-0 h-full w-full max-w-[1200px]"
        viewBox="0 0 1000 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <g className="constellation-wrapper">
          {/* ════════════════════════════════════════════
              Connecting Polygonal Mesh Lines
              ════════════════════════════════════════════ */}
          <g stroke="#CBD5E1" strokeWidth="1.2" strokeOpacity="0.5">
            {/* Top Node to Top-Center & Far-Right */}
            <line x1="860" y1="135" x2="470" y2="165" />
            <line x1="860" y1="135" x2="980" y2="350" />
            <line x1="860" y1="135" x2="710" y2="495" />

            {/* Top-Center to Left-Center & Pivot */}
            <line x1="470" y1="165" x2="290" y2="340" />
            <line x1="470" y1="165" x2="710" y2="495" />
            <line x1="470" y1="165" x2="980" y2="350" strokeDasharray="3 3" strokeOpacity="0.3" />

            {/* Left-Center to Large Node */}
            <line x1="290" y1="340" x2="350" y2="585" />
            <line x1="290" y1="340" x2="710" y2="495" />

            {/* Large Node to Bottom Node & Center Pivot */}
            <line x1="350" y1="585" x2="280" y2="715" />
            <line x1="350" y1="585" x2="710" y2="495" />
            <line x1="350" y1="585" x2="870" y2="705" />

            {/* Center-Right Pivot to Far-Right & Bottom-Right */}
            <line x1="710" y1="495" x2="980" y2="350" />
            <line x1="710" y1="495" x2="870" y2="705" />

            {/* Bottom Connectors */}
            <line x1="280" y1="715" x2="870" y2="705" />
          </g>

          {/* ════════════════════════════════════════════
              Single-Layer Geometric Nodes (1 circle per node)
              ════════════════════════════════════════════ */}

          {/* Node 1: Top-Right */}
          <g className="constellation-drift-1">
            <circle cx="860" cy="135" r="16" fill="#CBD5E1" fillOpacity="0.75" />
          </g>

          {/* Node 2: Top-Center */}
          <g className="constellation-drift-2">
            <circle cx="470" cy="165" r="13" fill="#CBD5E1" fillOpacity="0.75" />
          </g>

          {/* Node 3: Center-Left */}
          <g className="constellation-drift-3">
            <circle cx="290" cy="340" r="17" fill="#CBD5E1" fillOpacity="0.75" />
          </g>

          {/* Node 4: Lower-Left (Major Node) */}
          <g className="constellation-drift-1">
            <circle cx="350" cy="585" r="24" fill="#CBD5E1" fillOpacity="0.8" />
          </g>

          {/* Node 5: Center-Right Major Pivot */}
          <g className="constellation-drift-2">
            <circle cx="710" cy="495" r="19" fill="#CBD5E1" fillOpacity="0.8" />
          </g>

          {/* Node 6: Far-Right Edge */}
          <g className="constellation-drift-3">
            <circle cx="980" cy="350" r="14" fill="#CBD5E1" fillOpacity="0.7" />
          </g>

          {/* Node 7: Bottom-Left Edge */}
          <g className="constellation-drift-1">
            <circle cx="280" cy="715" r="12" fill="#CBD5E1" fillOpacity="0.65" />
          </g>

          {/* Node 8: Bottom-Right */}
          <g className="constellation-drift-2">
            <circle cx="870" cy="705" r="12" fill="#CBD5E1" fillOpacity="0.65" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LargeConstellationBackground;
