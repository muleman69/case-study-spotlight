import { motion } from 'framer-motion';

interface FloatingShapesProps {
  variant?: 'sphere' | 'triangle' | 'rings';
  color?: 'orange' | 'purple' | 'blue' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

const colorVariants = {
  orange: {
    primary: '#ff8c00',
    secondary: '#ff4800',
    glow: 'rgba(255, 140, 0, 0.15)',
  },
  purple: {
    primary: '#8b5cf6',
    secondary: '#6d28d9',
    glow: 'rgba(139, 92, 246, 0.15)',
  },
  blue: {
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  cyan: {
    primary: '#06b6d4',
    secondary: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
};

const sizeVariants = {
  sm: 'w-24 h-24',
  md: 'w-48 h-48',
  lg: 'w-96 h-96',
};

const positionVariants = {
  'top-left': '-top-12 -left-12',
  'top-right': '-top-12 -right-12',
  'bottom-left': '-bottom-12 -left-12',
  'bottom-right': '-bottom-12 -right-12',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

export function FloatingShapes({ 
  variant = 'sphere',
  color = 'orange',
  size = 'md',
  position = 'center'
}: FloatingShapesProps) {
  const colors = colorVariants[color];
  const sizeClass = sizeVariants[size];
  const positionClass = positionVariants[position];

  const floatAnimation = {
    y: [-20, 20],
    rotate: [-5, 5],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  if (variant === 'sphere') {
    return (
      <motion.div
        className={`absolute ${positionClass} ${sizeClass} rounded-full opacity-60 blur-xl pointer-events-none`}
        animate={floatAnimation}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors.primary}80, ${colors.secondary}80)`,
          boxShadow: `0 0 60px ${colors.glow}`,
        }}
      />
    );
  }

  if (variant === 'triangle') {
    return (
      <motion.div
        className={`absolute ${positionClass} ${sizeClass} opacity-60 blur-lg pointer-events-none`}
        animate={floatAnimation}
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: `linear-gradient(45deg, ${colors.primary}80, ${colors.secondary}80)`,
          boxShadow: `0 0 60px ${colors.glow}`,
        }}
      />
    );
  }

  // Rings variant
  return (
    <motion.div
      className={`absolute ${positionClass} ${sizeClass} opacity-60 pointer-events-none`}
      animate={floatAnimation}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, ${colors.primary}80, ${colors.secondary}80, ${colors.primary}80)`,
          boxShadow: `0 0 60px ${colors.glow}`,
          filter: 'blur(3px)',
        }}
      />
      <div
        className="absolute inset-4 rounded-full"
        style={{
          background: '#0b0e11',
          filter: 'blur(1px)',
        }}
      />
    </motion.div>
  );
} 