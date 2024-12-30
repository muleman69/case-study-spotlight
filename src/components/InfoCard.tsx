import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  items: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, items }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-teal-50">
              {item.icon}
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">{item.label}</div>
              <div className="text-gray-900 whitespace-pre-line">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard; 