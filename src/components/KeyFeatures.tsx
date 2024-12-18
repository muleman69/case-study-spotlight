import React from 'react';
import { Activity, Pill, FileBarChart, Stethoscope, ClipboardCheck, FileText, Database, TrendingUp, LineChart, ArrowRight, Heart, Bell, BarChart } from 'lucide-react';

interface FeatureGroup {
  title: string;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
}

const featureGroups: FeatureGroup[] = [
  {
    title: "Patient Control",
    features: [
      { icon: <Stethoscope className="w-6 h-6" />, text: "Easy vital sign monitoring" },
      { icon: <Pill className="w-6 h-6" />, text: "Medication tracking" },
      { icon: <ClipboardCheck className="w-6 h-6" />, text: "Symptom reporting" }
    ]
  },
  {
    title: "Provider Access",
    features: [
      { icon: <Activity className="w-6 h-6" />, text: "Real-time patient data review" },
      { icon: <FileText className="w-6 h-6" />, text: "Treatment adjustment capabilities" },
      { icon: <FileBarChart className="w-6 h-6" />, text: "PDF report generation" }
    ]
  },
  {
    title: "Research Support",
    features: [
      { icon: <Database className="w-6 h-6" />, text: "Aggregated health data collection" },
      { icon: <TrendingUp className="w-6 h-6" />, text: "Trend analysis capabilities" },
      { icon: <LineChart className="w-6 h-6" />, text: "Population health insights" }
    ]
  }
];

const KeyFeatures = () => {
  return (
    <section className="relative bg-[#0A0B14] py-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#2DD4BF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F8B42E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-8">
            <h2 className="text-lg font-semibold text-[#2DD4BF] mb-6">RESULTS</h2>
            <h3 className="text-3xl font-medium text-white/80 mb-12">The solution transformed patient care through:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{
                icon: <Heart className="w-8 h-8" />,
                text: "Daily health status monitoring"
              }, {
                icon: <Activity className="w-8 h-8" />,
                text: "Automated vital sign collection"
              }, {
                icon: <Bell className="w-8 h-8" />,
                text: "Real-time provider alerts"
              }, {
                icon: <BarChart className="w-8 h-8" />,
                text: "Research data collection capabilities"
              }].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-3 bg-[#2DD4BF]/10 rounded-lg w-fit mb-4">
                    {React.cloneElement(item.icon, { className: "w-8 h-8 text-[#2DD4BF]" })}
                  </div>
                  <span className="text-[#2DD4BF] text-2xl font-medium block leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-4" data-aos="fade-left">
            <img
              src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/Untitled%20design%20(29).png?updatedAt=1734468914201"
              alt="Heart Failure App Results"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <h2 className="text-sm font-medium text-white/80 mb-16 tracking-wider">KEY FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-white text-lg font-medium mb-8">{group.title}</h3>
              <div className="space-y-6">
                {group.features.map((feature, featureIndex) => {
                  const Icon = feature.icon.type;
                  return (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="p-2 bg-[#2DD4BF]/10 rounded-lg group-hover:bg-[#2DD4BF]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#2DD4BF]" />
                      </div>
                      <span className="text-[#2DD4BF] text-2xl font-medium leading-tight">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32 space-y-8" data-aos="fade-up">
          <h2 className="text-6xl font-bold text-white">YOUR SUCCESS STORY IS NEXT</h2>
          <button className="inline-flex items-center px-12 py-5 bg-[#2DD4BF] text-[#0A0B14] rounded-xl font-semibold text-lg hover:bg-[#25b3a0] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Let's Connect
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;