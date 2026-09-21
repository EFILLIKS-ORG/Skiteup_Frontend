import React from "react";

/**
 * AuraBackground — Premium animated gradient aura for hero sections and dashboards.
 *
 * Four visual layers:
 *   1. Very large blurred gradient blobs (base aura)
 *   2. Medium soft aura lights
 *   3. Small subtle glow accents
 *   4. Ultra-light SVG grain overlay
 */
export const AuraBackground: React.FC = () => {
  return (
    <>
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: AURA_CSS }} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* ══════════════════════════════════════
            LAYER 1 — Very large blurred blobs
            ══════════════════════════════════════ */}
        {/* Sky Blue — top-left */}
        <div className="aura-blob aura-l1-a" />
        {/* Lavender — top-right */}
        <div className="aura-blob aura-l1-b" />
        {/* Mint — bottom-center */}
        <div className="aura-blob aura-l1-c" />

        {/* ══════════════════════════════════════
            LAYER 2 — Medium soft aura lights
            ══════════════════════════════════════ */}
        {/* Cyan center */}
        <div className="aura-blob aura-l2-a" />
        {/* Pink-lavender right */}
        <div className="aura-blob aura-l2-b" />
        {/* Indigo-mint bottom */}
        <div className="aura-blob aura-l2-c" />

        {/* ══════════════════════════════════════
            LAYER 3 — Small subtle glow accents
            ══════════════════════════════════════ */}
        {/* White glow */}
        <div className="aura-blob aura-l3-a" />
        {/* Indigo accent */}
        <div className="aura-blob aura-l3-b" />
        {/* Cyan accent */}
        <div className="aura-blob aura-l3-c" />

        {/* ══════════════════════════════════════
            LAYER 4 — Ultra-light grain overlay
            ══════════════════════════════════════ */}
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
    </>
  );
};

const AURA_CSS = `
/* ══════════════════════════════════════════
   BASE BLOB STYLES
   ══════════════════════════════════════════ */
.aura-blob {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}

/* ══════════════════════════════════════════
   LAYER 1 — Large base blobs
   ══════════════════════════════════════════ */
.aura-l1-a {
  width: 900px;
  height: 900px;
  top: -200px;
  left: -150px;
  background: radial-gradient(circle at center, hsla(213, 94%, 78%, 0.45), hsla(213, 94%, 78%, 0.15) 50%, transparent 75%);
  filter: blur(80px);
  animation: auraFloat1 32s ease-in-out infinite;
}
.aura-l1-b {
  width: 800px;
  height: 800px;
  top: -100px;
  right: -200px;
  background: radial-gradient(circle at center, hsla(258, 90%, 85%, 0.40), hsla(258, 90%, 85%, 0.12) 50%, transparent 75%);
  filter: blur(90px);
  animation: auraFloat2 38s ease-in-out infinite;
}
.aura-l1-c {
  width: 750px;
  height: 750px;
  bottom: -150px;
  left: 10%;
  background: radial-gradient(circle at center, hsla(160, 72%, 80%, 0.38), hsla(160, 72%, 80%, 0.10) 50%, transparent 75%);
  filter: blur(100px);
  animation: auraFloat3 28s ease-in-out infinite;
}

/* ══════════════════════════════════════════
   LAYER 2 — Medium aura lights
   ══════════════════════════════════════════ */
.aura-l2-a {
  width: 500px;
  height: 500px;
  top: 15%;
  left: 25%;
  background: radial-gradient(circle at center, hsla(199, 95%, 86%, 0.50), hsla(224, 93%, 94%, 0.15) 55%, transparent 80%);
  filter: blur(60px);
  animation: auraMid1 24s ease-in-out infinite;
}
.aura-l2-b {
  width: 420px;
  height: 420px;
  top: 40%;
  right: 10%;
  background: radial-gradient(circle at center, hsla(326, 78%, 90%, 0.40), hsla(262, 83%, 92%, 0.12) 50%, transparent 80%);
  filter: blur(55px);
  animation: auraMid2 30s ease-in-out infinite;
}
.aura-l2-c {
  width: 380px;
  height: 380px;
  bottom: 10%;
  right: 25%;
  background: radial-gradient(circle at center, hsla(160, 72%, 80%, 0.35), hsla(199, 95%, 86%, 0.10) 55%, transparent 80%);
  filter: blur(50px);
  animation: auraMid3 34s ease-in-out infinite;
}

/* ══════════════════════════════════════════
   LAYER 3 — Small accent glows
   ══════════════════════════════════════════ */
.aura-l3-a {
  width: 250px;
  height: 250px;
  top: 25%;
  left: 55%;
  background: radial-gradient(circle at center, hsla(0, 0%, 100%, 0.60), hsla(204, 94%, 94%, 0.18) 55%, transparent 80%);
  filter: blur(35px);
  animation: auraAccent1 22s ease-in-out infinite;
}
.aura-l3-b {
  width: 200px;
  height: 200px;
  top: 55%;
  left: 18%;
  background: radial-gradient(circle at center, hsla(227, 92%, 91%, 0.40), hsla(326, 78%, 90%, 0.12) 50%, transparent 80%);
  filter: blur(30px);
  animation: auraAccent2 26s ease-in-out infinite;
}
.aura-l3-c {
  width: 170px;
  height: 170px;
  top: 10%;
  right: 22%;
  background: radial-gradient(circle at center, hsla(187, 92%, 82%, 0.38), transparent 70%);
  filter: blur(28px);
  animation: auraAccent3 36s ease-in-out infinite;
}

/* ══════════════════════════════════════════
   GRAIN OVERLAY
   ══════════════════════════════════════════ */
.aura-grain {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  pointer-events: none;
}

/* ══════════════════════════════════════════
   KEYFRAME ANIMATIONS
   All use transform + opacity only (GPU composited)
   ══════════════════════════════════════════ */

/* Layer 1 — 28-38s cycles */
@keyframes auraFloat1 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.9; }
  25%      { transform: translate(40px, 25px) scale(1.06) rotate(3deg); opacity: 1; }
  50%      { transform: translate(-25px, 50px) scale(0.97) rotate(-2deg); opacity: 0.82; }
  75%      { transform: translate(50px, -15px) scale(1.03) rotate(1deg); opacity: 0.95; }
}
@keyframes auraFloat2 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.85; }
  30%      { transform: translate(-50px, 35px) scale(1.04) rotate(-3deg); opacity: 0.95; }
  60%      { transform: translate(30px, -25px) scale(0.96) rotate(2deg); opacity: 0.78; }
  85%      { transform: translate(-15px, 20px) scale(1.02) rotate(-1deg); opacity: 0.9; }
}
@keyframes auraFloat3 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.88; }
  20%      { transform: translate(25px, -35px) scale(1.05) rotate(2deg); opacity: 0.78; }
  55%      { transform: translate(-35px, 15px) scale(0.95) rotate(-3deg); opacity: 0.95; }
  80%      { transform: translate(15px, 40px) scale(1.02) rotate(1deg); opacity: 0.84; }
}

/* Layer 2 — 24-34s cycles */
@keyframes auraMid1 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
  33%      { transform: translate(30px, 35px) scale(1.08); opacity: 1; }
  66%      { transform: translate(-35px, -15px) scale(0.94); opacity: 0.8; }
}
@keyframes auraMid2 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.85; }
  40%      { transform: translate(-25px, -25px) scale(1.06) rotate(2deg); opacity: 0.95; }
  70%      { transform: translate(35px, 15px) scale(0.95) rotate(-1deg); opacity: 0.78; }
}
@keyframes auraMid3 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
  35%      { transform: translate(35px, -25px) scale(1.05); opacity: 0.92; }
  65%      { transform: translate(-15px, 30px) scale(0.97); opacity: 0.75; }
}

/* Layer 3 — 22-36s cycles */
@keyframes auraAccent1 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.85; }
  50%      { transform: translate(-20px, 25px) scale(1.1); opacity: 1; }
}
@keyframes auraAccent2 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
  40%      { transform: translate(25px, -15px) scale(1.08); opacity: 0.95; }
  75%      { transform: translate(-10px, 20px) scale(0.95); opacity: 0.72; }
}
@keyframes auraAccent3 {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
  30%      { transform: translate(12px, 20px) scale(1.12); opacity: 0.7; }
  70%      { transform: translate(-20px, -12px) scale(0.92); opacity: 1; }
}

/* Responsive — smaller blobs on mobile */
@media (max-width: 768px) {
  .aura-l1-a { width: 500px; height: 500px; top: -100px; left: -100px; }
  .aura-l1-b { width: 450px; height: 450px; top: -50px; right: -120px; }
  .aura-l1-c { width: 400px; height: 400px; bottom: -80px; }
  .aura-l2-a { width: 300px; height: 300px; }
  .aura-l2-b { width: 260px; height: 260px; }
  .aura-l2-c { width: 240px; height: 240px; }
  .aura-l3-a { width: 150px; height: 150px; }
  .aura-l3-b { width: 120px; height: 120px; }
  .aura-l3-c { width: 100px; height: 100px; }
}
`;

export default AuraBackground;
