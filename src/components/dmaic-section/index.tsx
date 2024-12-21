'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Gauge, LineChart, Wrench, Shield, Activity, CheckSquare } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { TimelineIndicator } from './timeline-indicator'
import { FloatingNav } from './floating-nav'
import { StepCard } from './step-card'
import { Card } from '../ui/card'
import { FloatingShapes } from '../ui/floating-shapes'
import { SectionTransition } from '../ui/section-transition'

const steps = [
  {
    id: 'define',
    title: 'Define',
    icon: Target,
    content: 'Identified critical patient care gaps and opportunities for mobile innovation in heart failure monitoring. Established clear objectives for improving patient outcomes through real-time data collection and analysis.',
    substeps: [
      {
        title: 'Challenge Identification',
        icon: Activity,
        content: 'Every minute counts when managing heart failure. Healthcare providers were drowning in data from patient monitoring devices, leading to delayed interventions and potential life-threatening situations. They needed a solution that could transform overwhelming data streams into clear, actionable insights for both medical staff and patients.'
      },
      {
        title: 'Strategic Approach',
        icon: CheckSquare,
        content: 'We approached this life-critical project using the DMAIC framework, ensuring every decision was driven by both medical necessity and user experience. Our systematic methodology helped us break down complex challenges into manageable steps while maintaining focus on the end goal: saving lives through better data utilization.'
      }
    ]
  },
  {
    id: 'measure',
    title: 'Measure',
    icon: Gauge,
    content: 'Collected baseline metrics on patient monitoring frequency, response times, and outcome indicators. Established data collection protocols for vital signs and symptom tracking via mobile devices.'
  },
  {
    id: 'analyze',
    title: 'Analyze',
    icon: LineChart,
    content: 'Evaluated patterns in patient data to identify early warning signs of heart failure complications. Analyzed the correlation between monitoring frequency and patient outcomes.'
  },
  {
    id: 'improve',
    title: 'Improve',
    icon: Wrench,
    content: 'Implemented mobile solution for real-time vital sign monitoring and automated alert system. Developed user-friendly interface for both patients and healthcare providers.'
  },
  {
    id: 'control',
    title: 'Control',
    icon: Shield,
    content: 'Established continuous monitoring protocols and feedback mechanisms. Implemented regular system updates and maintenance procedures to ensure sustained performance.'
  }
]

export default function DMAICSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const isInView = useInView(sectionRef, { margin: "-100px" })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveStep(index)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
      }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <motion.div
      ref={sectionRef}
      className="relative max-w-7xl mx-auto py-24 px-6 lg:px-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <SectionTransition
          from="#0b0e11"
          to="#0f1218"
          direction="top"
          height="150px"
        />

        <FloatingShapes
          variant="sphere"
          color="orange"
          size="lg"
          position="top-right"
        />
        <FloatingShapes
          variant="rings"
          color="purple"
          size="md"
          position="bottom-left"
        />
        <FloatingShapes
          variant="triangle"
          color="blue"
          size="sm"
          position="center"
        />

        <SectionTransition
          from="#0f1218"
          to="#0b0e11"
          direction="bottom"
          height="150px"
          blur
        />
      </div>

      {isInView && (
        <>
          <TimelineIndicator steps={steps} activeStep={activeStep} />
          <FloatingNav
            steps={steps}
            activeStep={activeStep}
            onStepClick={scrollToStep}
          />
        </>
      )}

      <div className="relative z-10 max-w-3xl mx-auto space-y-12 lg:space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            className="lg:pl-32 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <StepCard
              id={step.id}
              title={step.title}
              content={step.content}
              icon={step.icon}
              index={index}
              isActive={index === activeStep}
            />

            {step.substeps && index === activeStep && (
              <div className="pl-8 space-y-6">
                <h4 className="text-lg font-medium text-cyan-500">Define Phase: Key Steps</h4>
                <div className="grid grid-cols-1 gap-6">
                  {step.substeps.map((substep, subIndex) => (
                    <motion.div
                      key={substep.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                    >
                      <Card className="bg-cyan-500/5 border-cyan-500/10 backdrop-blur-sm hover:bg-cyan-500/10 transition-colors duration-300">
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-cyan-500/10">
                              {substep.icon && <substep.icon className="w-5 h-5 text-cyan-500" />}
                            </div>
                            <h5 className="text-lg font-medium text-cyan-500">{substep.title}</h5>
                          </div>
                          <p className="text-gray-400 leading-relaxed">{substep.content}</p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 