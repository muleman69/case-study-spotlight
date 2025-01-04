import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import { Warehouse, Truck, LineChart, Settings, Globe2 } from 'lucide-react';
import WildwoodInfoSection from '../components/WildwoodInfoSection';
import WildwoodKeyFeatures from '../components/WildwoodKeyFeatures';
import ContactForm from '../components/ContactForm';
import WildwoodDMAICSection from '../components/WildwoodDMAICSection';
import { TimeSavedSection } from '../components/TimeSavedSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import ChallengeApproachSection from '../components/ChallengeApproachSection';
import BeforeAfterSection from '../components/BeforeAfterSection';

const WildwoodCaseStudy = () => {
  useEffect(() => {
    console.log('WildwoodCaseStudy component mounted');
  }, []);

  return (
    <div className="w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#0A0B14] text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Background hero image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://ik.imagekit.io/buildable/Wildwood_Hero.jpeg?updatedAt=1735518744834"
            alt="Wildwood Trading Group Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B14]/95 via-[#0A0B14]/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="max-w-2xl">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                <a href="/" className="hover:text-[#F8B42E]">HOME</a>
                <span className="text-gray-600">|</span>
                <a href="/case-studies" className="hover:text-[#F8B42E]">CASE STUDIES</a>
                <span className="text-gray-600">|</span>
                <span className="text-[#F8B42E]">LOGISTICS</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                From Hours to Minutes: Transforming Freight Rate Management for Wildwood Trading Group
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Discover how Buildable automated complex freight-rate calculations and route optimization, empowering Wildwood's sales and logistics teams to quote faster, scale confidently, and enhance customer satisfaction.
              </p>
              
              <div className="space-y-6">
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                  <span>95% Faster Quotes</span>
                  <span>•</span>
                  <span>40% Cost Reduction</span>
                  <span>•</span>
                  <span>99.9% Rate Accuracy</span>
                </div>
                <h3 className="text-[#F8B42E]">Services:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Truck className="w-5 h-5" />,
                      text: 'Freight Rate Management'
                    },
                    {
                      icon: <LineChart className="w-5 h-5" />,
                      text: 'Route Optimization'
                    },
                    {
                      icon: <Settings className="w-5 h-5" />,
                      text: 'Process Automation'
                    },
                    {
                      icon: <Globe2 className="w-5 h-5" />,
                      text: 'Logistics Platform'
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-[#F8B42E]">{service.icon}</div>
                      <span className="text-sm">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Removing the dashboard preview image */}
          </div>
        </div>
      </section>

      <WildwoodInfoSection />

      {/* Time Saved Section */}
      <TimeSavedSection />

      <ChallengeApproachSection />

      {/* Agile Journey Section */}
      <section id="agile-journey" className="relative py-24 min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Agile Journey
            </h2>
          </div>

          <WildwoodDMAICSection />
        </div>
      </section>

      {/* Results Section */}
      <WildwoodKeyFeatures />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* CTA Section */}
      <section className="relative bg-[#0A0B14] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your logistics operations like Wildwood?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            See how Buildable can revolutionize your logistics operations with custom software that drives real results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#F8B42E] text-[#0A0B14] font-semibold rounded-lg hover:bg-[#F8B42E]/90 transition-colors"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* CTA Section */}
      <ContactForm />
    </div>
  );
};

export default WildwoodCaseStudy; 