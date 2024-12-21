import { motion } from 'framer-motion';

interface SectionTransitionProps {
  from?: string;
  to?: string;
  direction?: 'top' | 'bottom';
  height?: string;
  blur?: boolean;
}

export function SectionTransition({
  from = '#0b0e11',
  to = '#0f1218',
  direction = 'bottom',
  height = '200px',
  blur = false
}: SectionTransitionProps) {
  return (
    <motion.div
      className="absolute left-0 w-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        [direction]: 0,
        height,
        background: `linear-gradient(to ${direction}, ${from}00, ${to})`,
        backdropFilter: blur ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: blur ? 'blur(10px)' : 'none',
      }}
    />
  );
} 