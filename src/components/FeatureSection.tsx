import React from 'react';
import { Heart } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-teal-500 mr-3" />
              <h2 className="text-3xl font-bold">Revolutionizing Patient Monitoring Through Intelligent Design</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Our AI-powered system continuously monitors patient vital signs, providing real-time alerts and predictive analytics to healthcare providers. This proactive approach has led to earlier interventions and better patient outcomes.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Real-time monitoring and alerts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Predictive analytics for early intervention
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                Seamless integration with existing systems
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Medical monitoring dashboard"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-teal-500 font-semibold">15-minute</p>
              <p className="text-gray-800">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;