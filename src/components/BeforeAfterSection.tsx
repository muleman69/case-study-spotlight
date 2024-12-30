import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function BeforeAfterSection() {
  return (
    <section className="relative py-24 bg-[#0A0B14] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See It In Action
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <BeforeAfterSlider
            beforeImage="https://ik.imagekit.io/buildable/Wildwood_Before.jpeg?updatedAt=1735539034040"
            afterImage="https://ik.imagekit.io/buildable/Wildwood_After.jpeg?updatedAt=1735539034118"
          />
        </motion.div>
      </div>
    </section>
  );
} 