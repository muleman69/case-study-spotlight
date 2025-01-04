import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TimelineIndicator } from './dmaic-section/timeline-indicator';
import { FloatingNav } from './dmaic-section/floating-nav';
import { StepCard } from './dmaic-section/step-card';
import { FloatingShapes } from './ui/floating-shapes';
import { SectionTransition } from './ui/section-transition';
import { agileSteps } from './agile-journey/steps';

export default function WildwoodAgileJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

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
          <TimelineIndicator steps={agileSteps} activeStep={activeStep} />
          <FloatingNav
            steps={agileSteps}
            activeStep={activeStep}
            onStepClick={scrollToStep}
          />
        </>
      )}

      <div className="relative z-10 max-w-3xl mx-auto space-y-12 lg:space-y-24">
        {agileSteps.map((step, index) => (
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
              bullets={step.bullets}
              icon={step.icon}
              index={index}
              isActive={index === activeStep}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 