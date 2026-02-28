import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SpaceItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay for staggered effects
}

export default function SpaceItem({ children, className = "", delay = 0 }: SpaceItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Start animating when top of element hits bottom of screen
  });

  // 1. Scale Effect: Starts small (0.5 = far away) and grows to 1 (close)
  // We clamp it so it doesn't keep growing past 1
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
  
  // 2. Opacity Effect: Fades in as it approaches
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}