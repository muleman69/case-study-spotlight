import { motion } from 'framer-motion';
import { CaseStudyCard } from './CaseStudyCard';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    title: "Revolutionizing Emergency Response",
    description: "How we helped a major hospital reduce emergency response times by 47% through real-time data analytics and mobile optimization.",
    image: "https://ik.imagekit.io/buildable/case-studies/emergency-response.jpg",
    tags: ["Healthcare", "Mobile", "Analytics"],
    link: "/case-studies/emergency-response",
    category: "healthcare",
    testimonial: {
      quote: "Callstack is one of the best software teams I've ever worked with. They plug into your team and process seamlessly. They are responsive and professional.",
      author: "Dr. Sarah Chen",
      role: "Chief of Emergency Medicine"
    }
  },
  {
    title: "Streamlining Patient Data Management",
    description: "Creating a unified patient data platform that improved data accuracy by 89% and reduced administrative workload by 12 hours per week.",
    image: "https://ik.imagekit.io/buildable/case-studies/patient-data.jpg",
    tags: ["Healthcare", "Data Management", "Integration"],
    link: "/case-studies/patient-data",
    category: "healthcare",
    testimonial: {
      quote: "The collaboration was great throughout, with Callstack engineers seamlessly working as part of our agile teams.",
      author: "Michael Rodriguez",
      role: "Director of Digital Health"
    }
  },
  {
    title: "AI-Powered Diagnostic Support",
    description: "Implementing machine learning models to assist radiologists, leading to a 35% increase in early detection rates.",
    image: "https://ik.imagekit.io/buildable/case-studies/ai-diagnostics.jpg",
    tags: ["Healthcare", "AI/ML", "Diagnostics"],
    link: "/case-studies/ai-diagnostics",
    category: "healthcare",
    testimonial: {
      quote: "The attention to detail and focus on user experience was exceptional. The system has transformed how we work.",
      author: "Dr. Emily Watson",
      role: "Head of Radiology"
    }
  }
];

export function CaseStudiesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const newIndex = direction === 'left' 
        ? Math.max(0, activeIndex - 1)
        : Math.min(caseStudies.length - 2, activeIndex + 1);
      
      setActiveIndex(newIndex);
      const cardWidth = sliderRef.current.offsetWidth;
      const scrollAmount = newIndex * cardWidth;
      
      sliderRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }
  };

  return (
    <section className="relative py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200" />
      
      {/* Content */}
      <div className="relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-6 text-lg">
            Explore how we've helped other companies solve complex logistical challenges and drive innovation.
          </p>
        </motion.div>

        {/* Slider container */}
        <div className="relative">
          {/* Navigation controls */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-between w-[calc(100%-8rem)] max-w-7xl pointer-events-none">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 text-gray-800 transition-colors pointer-events-auto"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 text-gray-800 transition-colors pointer-events-auto"
              disabled={activeIndex === caseStudies.length - 2}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: 'translateX(0)' }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="w-[calc(60vw-2rem)] min-w-[840px] max-w-[1120px] flex-shrink-0"
                >
                  <div className="px-8">
                    <CaseStudyCard {...study} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 