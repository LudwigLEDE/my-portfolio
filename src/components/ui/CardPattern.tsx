import { useMemo } from 'react';
import { motion } from 'framer-motion';

// ── Deterministic pseudo-random (LCG) ────────────────────────────────────────
function lcg(seed: number) {
  // Mix the seed so adjacent indices produce very different sequences
  let s = ((seed + 1) * 2891336453 + 1234567891) >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

interface CardPatternProps {
  /** Card index — drives the deterministic pattern */
  seed: number;
  /** RGB triple e.g. "59,130,246" for blue-500 */
  accentRgb: string;
  isLight: boolean;
}

export default function CardPattern({ seed, accentRgb, isLight }: CardPatternProps) {
  const { nodes, edges, dotGrid } = useMemo(() => {
    const rand = lcg(seed);
    const W = 400, H = 208;

    // ── Background dot matrix ─────────────────────────────────────────────
    const COLS = 22, ROWS = 10;
    const dotGrid: { x: number; y: number; lit: boolean }[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        dotGrid.push({
          x: (c + 0.5) * (W / COLS),
          y: (r + 0.5) * (H / ROWS),
          lit: rand() > 0.72,
        });
      }
    }

    // ── Constellation nodes ───────────────────────────────────────────────
    const nodeCount = 14 + Math.floor(rand() * 7); // 14–20 nodes
    const nodes: {
      id: number;
      x: number; y: number;
      r: number;
      baseOpacity: number;
      isHub: boolean;
      pulseDelay: number;
      pulseDuration: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const energy = rand();
      const isHub = energy > 0.78;
      nodes.push({
        id: i,
        x: rand() * W * 0.86 + W * 0.07,
        y: rand() * H * 0.84 + H * 0.08,
        r: isHub ? 3.8 : energy > 0.5 ? 2.1 : 1.2,
        baseOpacity: isHub ? 0.80 : energy > 0.5 ? 0.48 : 0.22,
        isHub,
        pulseDelay: rand() * 3.5,
        pulseDuration: 1.8 + rand() * 1.8,
      });
    }

    // ── Edges between nearby nodes ────────────────────────────────────────
    const MAX_DIST = 100;
    const edges: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          edges.push({
            x1: nodes[i].x, y1: nodes[i].y,
            x2: nodes[j].x, y2: nodes[j].y,
            opacity: ((1 - dist / MAX_DIST) ** 1.8) * 0.40,
          });
        }
      }
    }

    return { nodes, edges, dotGrid };
  }, [seed]);

  // In light mode we tint with the accent; in dark mode use white for readability
  const color = isLight ? `rgba(${accentRgb},1)` : `rgba(255,255,255,1)`;
  // Scale down overall opacity in light mode so it stays subtle on white
  const alpha = isLight ? 0.55 : 1;

  return (
    <svg
      viewBox="0 0 400 208"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Dot matrix ── */}
      {dotGrid.map((d, i) => (
        <circle
          key={`d${i}`}
          cx={d.x} cy={d.y} r={0.85}
          fill={color}
          fillOpacity={(d.lit ? 0.20 : 0.07) * alpha}
        />
      ))}

      {/* ── Edges ── */}
      {edges.map((e, i) => (
        <line
          key={`e${i}`}
          x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke={color}
          strokeOpacity={e.opacity * alpha}
          strokeWidth={0.75}
        />
      ))}

      {/* ── Nodes ── */}
      {nodes.map((n) =>
        n.isHub ? (
          // Hub nodes pulse continuously
          <motion.circle
            key={`n${n.id}`}
            cx={n.x} cy={n.y}
            fill={color}
            animate={{
              r:           [n.r,      n.r * 1.8,  n.r],
              fillOpacity: [n.baseOpacity * alpha, n.baseOpacity * 0.25 * alpha, n.baseOpacity * alpha],
            }}
            transition={{
              duration: n.pulseDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: n.pulseDelay,
            }}
          />
        ) : (
          <circle
            key={`n${n.id}`}
            cx={n.x} cy={n.y} r={n.r}
            fill={color}
            fillOpacity={n.baseOpacity * alpha}
          />
        )
      )}
    </svg>
  );
}
