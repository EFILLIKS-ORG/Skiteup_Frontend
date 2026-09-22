import React from 'react';

export const AuraBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Layer 1 — Large base blobs */}
      <div className="aura-blob aura-l1-a" />
      <div className="aura-blob aura-l1-b" />
      <div className="aura-blob aura-l1-c" />

      {/* Layer 2 — Medium aura lights */}
      <div className="aura-blob aura-l2-a" />
      <div className="aura-blob aura-l2-b" />
      <div className="aura-blob aura-l2-c" />

      {/* Layer 3 — Small accent glows */}
      <div className="aura-blob aura-l3-a" />
      <div className="aura-blob aura-l3-b" />
      <div className="aura-blob aura-l3-c" />

      {/* Layer 4 — Grain overlay */}
      <svg className="aura-grain" xmlns="http://www.w3.org/2000/svg">
        <filter id="auraNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect width="100%" height="100%" filter="url(#auraNoiseFilter)" />
      </svg>
    </div>
  );
};

export default AuraBackground;
