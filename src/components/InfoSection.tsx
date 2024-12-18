import React from 'react';
import { Building2, Globe2, Users2, Code2, Smartphone, Database } from 'lucide-react';

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
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-[#0A0B14] mb-4">{title}</h3>
      <p className="text-gray-600 text-sm mb-8">{description}</p>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-2 bg-[#2DD4BF]/10 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h4 className="text-[#0A0B14] text-sm font-medium mb-1">{item.label}</h4>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoCard
            title="CLIENT INFO"
            description="Leading healthcare network serving multiple metropolitan areas, specializing in cardiology and preventive care."
            items={[
              {
                icon: <Building2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Industry",
                value: "Healthcare / Medical Technology"
              },
              {
                icon: <Users2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Company type",
                value: "Enterprise Healthcare System"
              },
              {
                icon: <Globe2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Region",
                value: "United States"
              }
            ]}
          />
          
          <InfoCard
            title="TECH INFO"
            description="Real-time health data processing & visualization"
            items={[
              {
                icon: <Code2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Technologies",
                value: ".NET Core | Flutter | Angular"
              },
              {
                icon: <Smartphone className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Platforms",
                value: "iOS | Android | Web | Provider Portal"
              },
              {
                icon: <Database className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Tech Stack",
                value: `Backend: .NET Core | Entity Framework | LINQ | MSSQL Server
Frontend: Angular | TypeScript | Bootstrap
Mobile: Flutter | ReactiveX | OMRON SDK
Infrastructure: Azure Cloud | HIPAA-Compliant Storage
Integration: HL7 FHIR | REDOX API`
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;