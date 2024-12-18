import React from 'react';
import { Activity, Clock, Users } from 'lucide-react';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Activity className="w-12 h-12 text-teal-500" />
        </div>
        <h3 className="text-4xl font-bold mb-2">53%</h3>
        <p className="text-gray-600">Increase in Early Interventions</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Clock className="w-12 h-12 text-teal-500" />
        </div>
        <h3 className="text-4xl font-bold mb-2">30min</h3>
        <p className="text-gray-600">Response Time Reduction</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Users className="w-12 h-12 text-teal-500" />
        </div>
        <h3 className="text-4xl font-bold mb-2">50,000+</h3>
        <p className="text-gray-600">Patients Protected</p>
      </div>
    </div>
  );
};

export default Stats;