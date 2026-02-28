import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  /**
   * If true, applies a more intense glass effect in Light Mode.
   */
  glassy?: boolean;
}

export default function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor,
  borderColor,
  glassy = true,
  ...props
}: SpotlightCardProps) {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    
    if (props.onMouseMove) {
        props.onMouseMove(e);
    }
  }

  const isLight = theme === 'light';
  
  // Professional Default Colors
  const defaultSpotlight = isLight 
    ? "rgba(59, 130, 246, 0.12)" // Soft blue for light mode
    : "rgba(59, 130, 246, 0.15)"; // Classic tech blue for dark mode

  const defaultBorder = isLight
    ? "border-slate-200/60" 
    : "border-white/10";

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`
        group relative overflow-hidden transition-all duration-300
        /* Base Shape & Border */
        rounded-2xl border ${borderColor || defaultBorder}
        
        /* Light Mode: Professional Glass */
        ${isLight && glassy ? 'bg-white/40 backdrop-blur-xl shadow-xl shadow-slate-200/50' : ''}
        ${isLight && !glassy ? 'bg-white' : ''}
        
        /* Dark Mode: High-Tech Depth */
        ${!isLight ? 'bg-slate-900/40 dark:bg-white/[0.02] backdrop-blur-md' : ''}
        
        /* Scaling Fix: Ensure it fills container */
        w-full h-full
        ${className}
      `}
      {...props}
    >
      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor || defaultSpotlight},
              transparent 80%
            )
          `,
        }}
      />

      {/* Content Layer */}
      <div className="relative h-full w-full z-20">
        {children}
      </div>
      
      {/* Tech Decoration Corners - Theme Aware */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${isLight ? 'border-blue-500/20' : 'border-white/20'} opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none`} />
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${isLight ? 'border-blue-500/20' : 'border-white/20'} opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${isLight ? 'border-blue-500/20' : 'border-white/20'} opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${isLight ? 'border-blue-500/20' : 'border-white/20'} opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none`} />
    </div>
  );
}
