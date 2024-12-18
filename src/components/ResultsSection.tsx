import React from 'react';

const FeatureBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-medium text-white/80">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <span className="text-[#2DD4BF] text-2xl font-medium block">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ResultsSection = () => {
  return (
    <section className="bg-[#0A0B14] text-white py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="space-y-24">
          {/* Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-lg font-semibold text-[#2DD4BF] mb-6">RESULTS</h2>
              <h3 className="text-3xl font-medium text-white/80 mb-12">The solution transformed patient care through:</h3>
              <ul className="space-y-4">
                {[
                  'Daily health status monitoring',
                  'Automated vital sign collection',
                  'Real-time provider alerts',
                  'Research data collection capabilities'
                ].map((item, index) => (
                  <li key={index}>
                    <span className="text-[#2DD4BF] text-3xl font-medium block">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/Untitled%20design%20(29).png?updatedAt=1734468914201"
                alt="Heart Failure App Results"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-lg font-medium text-white/80 mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureBlock
                title="Patient Control"
                items={[
                  'Easy vital sign monitoring',
                  'Medication tracking',
                  'Symptom reporting'
                ]}
              />
              <FeatureBlock
                title="Provider Access"
                items={[
                  'Real-time patient data review',
                  'Treatment adjustment capabilities',
                  'PDF report generation'
                ]}
              />
              <FeatureBlock
                title="Research Support"
                items={[
                  'Aggregated health data collection',
                  'Trend analysis capabilities',
                  'Population health insights'
                ]}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-bold">YOUR SUCCESS STORY IS NEXT</h2>
            <button className="inline-flex items-center px-8 py-3 bg-[#2DD4BF] text-[#0A0B14] rounded-lg font-semibold hover:bg-[#25b3a0] transition-colors">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;