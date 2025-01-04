import React from 'react';
import { Activity, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChallengeApproachSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#2DD4BF]/10">
                <Activity className="w-5 h-5 text-[#2DD4BF]" />
              </div>
              <h3 className="text-lg font-medium text-[#2DD4BF] tracking-wide">
                THE CHALLENGE
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Wildwood Trading Group was relying on multiple Excel spreadsheets to calculate and track freight rates, routes, and special cases—a system that couldn't keep pace with a rapidly growing sales and logistics operation. Inconsistent calculations, manual data entry errors, and reliance on a single logistics expert resulted in lengthy quote times (several hours) and bottlenecks that slowed down sales growth.
              </p>
              
              <p className="text-gray-700 font-medium mt-4">
                They needed a centralized, automated solution to:
              </p>
              
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Integrate multiple rail and freight carriers (UP, BNSF, private rates).</li>
                <li>Optimize routes in real time.</li>
                <li>Empower both sales and logistics teams to generate quotes independently, quickly, and accurately.</li>
              </ul>
            </div>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#2DD4BF]/10">
                <Workflow className="w-5 h-5 text-[#2DD4BF]" />
              </div>
              <h3 className="text-lg font-medium text-[#2DD4BF] tracking-wide">
                OUR APPROACH
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Buildable partnered with Wildwood to digitally transform their freight rate and route management processes. Our project adopted the Agile framework to ensure flexibility, continuous improvement, and close collaboration with WTG throughout the development process.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 