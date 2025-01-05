import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function TimeSavedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const value = Math.min(95, latest * 190);
      count.set(value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const handleClick = () => {
    const dmaicSection = document.getElementById('dmaic-section');
    if (dmaicSection) {
      dmaicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-[#0A0B14] text-white py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heartbeat Line */}
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent, #2DD4BF 50%, transparent)',
            opacity: 0.2,
          }}
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2DD4BF]/5 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 text-center relative">
        <motion.div
          className="max-w-4xl mx-auto"
          style={{ opacity, scale }}
        >
          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-[#2DD4BF] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            TIME SAVED
          </motion.h3>

          {/* Number Counter */}
          <div className="relative inline-block">
            <motion.h2
              className="text-[180px] font-bold leading-none bg-gradient-to-r from-[#2DD4BF] to-[#F8B42E] bg-clip-text text-transparent"
              style={{ textShadow: '0 0 30px rgba(45, 212, 191, 0.3)' }}
            >
              <motion.span>{rounded}</motion.span>
              <span className="text-6xl align-top ml-4 font-light">%</span>
            </motion.h2>

            {/* Pulse Ring Animation */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(45, 212, 191, 0)',
                  '0 0 0 20px rgba(45, 212, 191, 0)',
                ],
                scale: [1, 1.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </div>

          <motion.h3
            className="text-5xl font-bold mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            FROM HOURS TO MINUTES
          </motion.h3>

          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Manual calculations that took hours now happen automatically - saving thousands of hours annually.
          </motion.p>

          <motion.button
            onClick={handleClick}
            className="inline-flex items-center px-8 py-3 border-2 border-[#2DD4BF] text-[#2DD4BF] rounded-full group relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 font-medium">See how we did it</span>
            <div className="absolute inset-0 bg-[#2DD4BF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(45, 212, 191, 0)',
                  '0 0 0 8px rgba(45, 212, 191, 0.3)',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 