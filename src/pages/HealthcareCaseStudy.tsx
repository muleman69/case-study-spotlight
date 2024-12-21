import React from 'react';
import Header from '../components/Header/Header';
import { Activity, Database, Stethoscope, CheckSquare } from 'lucide-react';
import InfoSection from '../components/InfoSection';
import KeyFeatures from '../components/KeyFeatures';
import ContactForm from '../components/ContactForm';
import DMAICSection from '../components/dmaic-section';
import { TimelineSection } from '../components/TimelineSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';

const HealthcareCaseStudy = () => {
  return (
    <div className="w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#0A0B14] text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Add diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B14]/95 via-[#0A0B14]/70 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="max-w-2xl">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                <a href="/" className="hover:text-[#F8B42E]">HOME</a>
                <span className="text-gray-600">|</span>
                <a href="/case-studies" className="hover:text-[#F8B42E]">CASE STUDIES</a>
                <span className="text-gray-600">|</span>
                <span className="text-[#F8B42E]">HEALTHCARE</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Life-Saving Data: Revolutionizing Heart Failure Care Through Mobile Innovation
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Discover how we created a mobile app that empowers heart failure patients and their healthcare providers to better understand, manage, and improve treatment outcomes—guided by a systematic DMAIC approach.
              </p>
              
              <div className="space-y-6">
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                  <span>10M+ Daily Readings</span>
                  <span>•</span>
                  <span>53% Early Intervention Rate</span>
                  <span>•</span>
                  <span>99.9% Uptime</span>
                </div>
                <h3 className="text-[#F8B42E]">Services:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Activity className="w-5 h-5" />,
                      text: 'Data Collection & Visualization'
                    },
                    {
                      icon: <Database className="w-5 h-5" />,
                      text: 'EHR Integration via REDOX APIs'
                    },
                    {
                      icon: <Stethoscope className="w-5 h-5" />,
                      text: 'Remote Patient Monitoring & Health Surveys'
                    },
                    {
                      icon: <CheckSquare className="w-5 h-5" />,
                      text: 'Automated QA Processes & Quality Assurance'
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
            
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:w-[45%] lg:-translate-y-1/2 lg:h-[80%]" data-aos="fade-left">
              <img
                src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                alt="Heart Failure App Interface"
                className="w-full h-full object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <InfoSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* DMAIC Process Section */}
      <section className="relative py-24 min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DMAIC Framework Implementation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our systematic approach to improving heart failure care through data-driven mobile innovation
            </p>
          </div>

          <DMAICSection />
        </div>
      </section>

      {/* Results Section */}
      <KeyFeatures />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* CTA Section */}
      <ContactForm />
    </div>
  );
};

export default HealthcareCaseStudy;