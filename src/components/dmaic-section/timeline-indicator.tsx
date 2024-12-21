'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { Circle } from 'lucide-react'

interface TimelineIndicatorProps {
  steps: { id: string; title: string }[]
  activeStep: number
}

export function TimelineIndicator({ steps, activeStep }: TimelineIndicatorProps) {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="absolute left-12 lg:left-24 top-0 h-full hidden lg:flex flex-col items-center z-0"
    >
      <motion.div
        className="absolute left-1/2 h-full w-[2px] bg-gray-800/30 -translate-x-1/2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute left-1/2 h-full w-[2px] bg-cyan-500/50 -translate-x-1/2"
        style={{ scaleY, transformOrigin: 'top' }}
      />
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className={`absolute flex items-center gap-4 left-1/2 -translate-x-1/2`}
          style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Circle
            className={`h-3 w-3 ${
              index <= activeStep ? 'fill-cyan-500 text-cyan-500' : 'fill-gray-800/50 text-gray-800/50'
            } transition-colors duration-300`}
          />
          <span
            className={`text-sm font-medium whitespace-nowrap ${
              index <= activeStep ? 'text-cyan-500' : 'text-gray-600/70'
            } transition-colors duration-300`}
          >
            {step.title}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
} 