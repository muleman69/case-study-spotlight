'use client'

import { Button } from "../ui/button"
import { motion } from "framer-motion"

interface FloatingNavProps {
  steps: { id: string; title: string }[]
  activeStep: number
  onStepClick: (index: number) => void
}

export function FloatingNav({ steps, activeStep, onStepClick }: FloatingNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      className="absolute right-12 lg:right-24 top-0 h-full hidden lg:flex flex-col justify-start gap-3 z-20 pt-4"
    >
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm rounded-lg -z-10 group-hover:bg-gray-900/90 transition-colors duration-300" />
          <Button
            variant="ghost"
            size="sm"
            className={`
              relative px-4 py-2
              ${index === activeStep
                ? 'text-cyan-500 bg-cyan-500/10'
                : 'text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/5'
              }
              transition-colors duration-300
              whitespace-nowrap min-w-[120px] justify-start
              backdrop-blur-none
            `}
            onClick={() => onStepClick(index)}
          >
            {step.title}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
} 