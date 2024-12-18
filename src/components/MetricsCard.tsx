import React from 'react';

interface MetricsCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ icon, number, label }) => {
  return (
    <div className="bg-white p-10 rounded-xl shadow-xl text-center transform transition-all duration-300 hover:scale-105">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
        {number}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default MetricsCard;