'use client'

import { motion } from "framer-motion"
import { type LucideIcon } from 'lucide-react'

const sprintColors = {
  sprint1: { 
    bg: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20',
    text: 'text-blue-500',
    icon: 'bg-blue-500/20 text-blue-500',
    glow: '0 0 30px rgba(59, 130, 246, 0.1)'
  },
  sprint2: {
    bg: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20',
    text: 'text-emerald-500',
    icon: 'bg-emerald-500/20 text-emerald-500',
    glow: '0 0 30px rgba(16, 185, 129, 0.1)'
  },
  sprint3: {
    bg: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    text: 'text-purple-500',
    icon: 'bg-purple-500/20 text-purple-500',
    glow: '0 0 30px rgba(139, 92, 246, 0.1)'
  },
  sprint4: {
    bg: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-500/20',
    text: 'text-amber-500',
    icon: 'bg-amber-500/20 text-amber-500',
    glow: '0 0 30px rgba(245, 158, 11, 0.1)'
  },
  sprint5: {
    bg: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20',
    text: 'text-cyan-500',
    icon: 'bg-cyan-500/20 text-cyan-500',
    glow: '0 0 30px rgba(6, 182, 212, 0.1)'
  }
};

interface StepCardProps {
  title: string
  content: string
  bullets?: string[]
  icon: LucideIcon
  index: number
  isActive: boolean
  id: string
}

export function StepCard({ title, content, bullets, icon: Icon, index, isActive, id }: StepCardProps) {
  const colors = sprintColors[id as keyof typeof sprintColors]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`
        relative overflow-hidden rounded-lg
        border border-white/5
        backdrop-blur-md
        transition-all duration-500
        bg-gradient-to-br ${isActive ? colors.bg : 'from-gray-900/50 to-gray-900/30'}
        hover:bg-gradient-to-br hover:${colors.bg}
        transform hover:-translate-y-1
        p-8
      `}
      style={{
        boxShadow: isActive ? colors.glow : 'none'
      }}
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className={`
              p-2 rounded-lg
              ${isActive ? colors.icon : 'bg-gray-800/50 text-gray-400'}
              transition-colors duration-300
            `}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <h3 className={`text-2xl font-bold ${isActive ? colors.text : 'text-white'}`}>
            {title}
          </h3>
        </div>

        <p className="text-gray-400 mb-6">{content}</p>

        {bullets && bullets.length > 0 && (
          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`mt-2 w-1.5 h-1.5 rounded-full ${isActive ? colors.text : 'bg-gray-400'} flex-shrink-0`} />
                <p className={`leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>{bullet}</p>
              </li>
            ))}
          </ul>
        )}

        <div className={`
          absolute inset-0 border-2 rounded-lg transition-opacity duration-300
          ${isActive ? colors.border : 'border-transparent'}
        `} />
        
        <div className={`
          absolute inset-0 opacity-0 hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-br ${colors.bg}
          mix-blend-overlay
        `} />
      </div>
    </motion.div>
  )
} 