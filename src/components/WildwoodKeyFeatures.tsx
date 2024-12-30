import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-12 h-12 text-[#2DD4BF]" />,
    title: "90% Reduction in Quote Time",
    description: "Manual freight rate calculation that once took hours now takes minutes, freeing up the logistics team for higher-value tasks.",
    metrics: [
      { value: "Time Saved" },
      { value: "90%" }
    ]
  },
  {
    icon: <Users className="w-12 h-12 text-[#2DD4BF]" />,
    title: "Increased Sales Autonomy",
    description: "Sales reps can independently generate accurate quotes on demand, streamlining customer communication and accelerating deal closures.",
    metrics: [
      { value: "Team Autonomy" },
      { value: "100%" }
    ]
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-[#2DD4BF]" />,
    title: "Enhanced Accuracy",
    description: "Automated data ingestion from multiple carriers significantly reduced calculation errors, boosting client trust and profitability.",
    metrics: [
      { value: "Rate Accuracy" },
      { value: "99.9%" }
    ]
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-[#2DD4BF]" />,
    title: "Scalability & Growth",
    description: "With newfound operational efficiency, Wildwood can scale its geographic reach and product offerings without overburdening key staff.",
    metrics: [
      { value: "Market Coverage" },
      { value: "200%" }
    ]
  }
];

const WildwoodKeyFeatures = () => {
  return (
    <section className="relative py-32 bg-[#0A0B14] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Results & Impact
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our solution has transformed Wildwood's freight rate management, delivering measurable improvements across all key metrics
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#2DD4BF]/10 rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-400 mb-8">{feature.description}</p>
              <div className="flex justify-between items-center">
                {feature.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-[#2DD4BF] text-3xl font-bold">{metric.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WildwoodKeyFeatures; 