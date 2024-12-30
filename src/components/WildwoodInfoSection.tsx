import React from 'react';
import { Building2, Users2, MapPin, Code2, Truck, Database } from 'lucide-react';
import InfoCard from './InfoCard';

const WildwoodInfoSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoCard
            title="CLIENT SNAPSHOT"
            description="Wildwood Trading Group"
            items={[
              {
                icon: <Building2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Industry",
                value: "Lumber Sales & Logistics"
              },
              {
                icon: <Users2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Company Size",
                value: "11–50 Employees"
              },
              {
                icon: <MapPin className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Locations",
                value: "Three sawmills (Colville, Tualatin, Boise)"
              }
            ]}
          />
          
          <InfoCard
            title="TECHNICAL HIGHLIGHTS"
            description="End-to-end freight rate management and route optimization system"
            items={[
              {
                icon: <Code2 className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Core Features",
                value: "Custom Freight Rate Engine\nRoute Optimization Matrix\nReal-time Quote Generation"
              },
              {
                icon: <Truck className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Integration",
                value: "Multi-carrier Integration\nData Ingestion (PDF, Excel, APIs)"
              },
              {
                icon: <Database className="w-5 h-5 text-[#2DD4BF]" />,
                label: "Tech Stack",
                value: `Frontend: React | TypeScript | TailwindCSS
Backend: Node.js | Express | PostgreSQL
Infrastructure: AWS | Docker | CI/CD
Integration: REST APIs | EDI | PDF Parser`
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WildwoodInfoSection; 