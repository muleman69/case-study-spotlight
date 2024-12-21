'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { type LucideIcon } from 'lucide-react'

const phaseColors = {
  define: { 
    bg: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20',
    text: 'text-cyan-500',
    icon: 'bg-cyan-500/20 text-cyan-500',
    glow: '0 0 30px rgba(6, 182, 212, 0.1)'
  },
  measure: {
    bg: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20',
    text: 'text-emerald-500',
    icon: 'bg-emerald-500/20 text-emerald-500',
    glow: '0 0 30px rgba(16, 185, 129, 0.1)'
  },
  analyze: {
    bg: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20',
    text: 'text-blue-500',
    icon: 'bg-blue-500/20 text-blue-500',
    glow: '0 0 30px rgba(59, 130, 246, 0.1)'
  },
  improve: {
    bg: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    text: 'text-purple-500',
    icon: 'bg-purple-500/20 text-purple-500',
    glow: '0 0 30px rgba(139, 92, 246, 0.1)'
  },
  control: {
    bg: 'from-amber-500/10 to-amber-500/5',
    border: 'border-amber-500/20',
    text: 'text-amber-500',
    icon: 'bg-amber-500/20 text-amber-500',
    glow: '0 0 30px rgba(245, 158, 11, 0.1)'
  },
}

interface StepCardProps {
  title: string
  content: string
  icon: LucideIcon
  index: number
  isActive: boolean
  id: string
}

export function StepCard({ title, content, icon: Icon, index, isActive, id }: StepCardProps) {
  const colors = phaseColors[id as keyof typeof phaseColors]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className={`
        relative overflow-hidden
        border border-white/5
        backdrop-blur-md
        transition-all duration-500
        bg-gradient-to-br ${isActive ? colors.bg : 'from-gray-900/50 to-gray-900/30'}
        hover:bg-gradient-to-br hover:${colors.bg}
        transform hover:-translate-y-1
      `}
      style={{
        boxShadow: isActive ? colors.glow : 'none'
      }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold">
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
            <span className={isActive ? colors.text : 'text-white'}>
              {title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 leading-relaxed">
            {content}
          </p>
        </CardContent>
        <div className={`
          absolute inset-0 border-2 rounded-lg transition-opacity duration-300
          ${isActive ? colors.border : 'border-transparent'}
        `} />
        
        {/* Gradient overlay */}
        <div className={`
          absolute inset-0 opacity-0 hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-br ${colors.bg}
          mix-blend-overlay
        `} />
      </Card>
    </motion.div>
  )
} 