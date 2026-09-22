import React from "react";
import type { LargeConstellationProps } from "../../../utils/utils";

export const LargeConstellationBackground: React.FC<
  LargeConstellationProps
> = ({ className = "", opacity = 0.25 }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 select-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="absolute right-0 top-0 h-full w-full max-w-[1200px]"
        viewBox="0 0 1000 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <g className="constellation-wrapper">
          {/* Connecting Polygonal Mesh Lines */}
          <g stroke="#CBD5E1" strokeWidth="1.2" strokeOpacity="0.5">
            <line x1="860" y1="135" x2="470" y2="165" />
            <line x1="860" y1="135" x2="980" y2="350" />
            <line x1="860" y1="135" x2="710" y2="495" />

            <line x1="470" y1="165" x2="290" y2="340" />
            <line x1="470" y1="165" x2="710" y2="495" />
            <line
              x1="470"
              y1="165"
              x2="980"
              y2="350"
              strokeDasharray="3 3"
              strokeOpacity="0.3"
            />

            <line x1="290" y1="340" x2="350" y2="585" />
            <line x1="290" y1="340" x2="710" y2="495" />

            <line x1="350" y1="585" x2="280" y2="715" />
            <line x1="350" y1="585" x2="710" y2="495" />
            <line x1="350" y1="585" x2="870" y2="705" />

            <line x1="710" y1="495" x2="980" y2="350" />
            <line x1="710" y1="495" x2="870" y2="705" />

            <line x1="280" y1="715" x2="870" y2="705" />
          </g>

          {/* Nodes */}
          <g className="constellation-drift-1">
            <circle
              cx="860"
              cy="135"
              r="16"
              fill="#CBD5E1"
              fillOpacity="0.75"
            />
          </g>

          <g className="constellation-drift-2">
            <circle
              cx="470"
              cy="165"
              r="13"
              fill="#CBD5E1"
              fillOpacity="0.75"
            />
          </g>

          <g className="constellation-drift-3">
            <circle
              cx="290"
              cy="340"
              r="17"
              fill="#CBD5E1"
              fillOpacity="0.75"
            />
          </g>

          <g className="constellation-drift-1">
            <circle
              cx="350"
              cy="585"
              r="24"
              fill="#CBD5E1"
              fillOpacity="0.8"
            />
          </g>

          <g className="constellation-drift-2">
            <circle
              cx="710"
              cy="495"
              r="19"
              fill="#CBD5E1"
              fillOpacity="0.8"
            />
          </g>

          <g className="constellation-drift-3">
            <circle
              cx="980"
              cy="350"
              r="14"
              fill="#CBD5E1"
              fillOpacity="0.7"
            />
          </g>

          <g className="constellation-drift-1">
            <circle
              cx="280"
              cy="715"
              r="12"
              fill="#CBD5E1"
              fillOpacity="0.65"
            />
          </g>

          <g className="constellation-drift-2">
            <circle
              cx="870"
              cy="705"
              r="12"
              fill="#CBD5E1"
              fillOpacity="0.65"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LargeConstellationBackground;