import React from 'react';
import { Clock, Users } from 'lucide-react';

const TimelineItem = ({ time, number }: { time: string; number: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-full border-2 border-[#2DD4BF] flex items-center justify-center bg-white">
      <span className="text-2xl font-bold">{number}</span>
    </div>
    <span className="mt-3 text-sm text-gray-600">{time}</span>
  </div>
);

const ImplementationTimeline = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1600px] mx-auto px-6">
      <div className="lg:pr-[10%] space-y-6" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-6">
          EASY TO IMPLEMENT, EASY TO SCALE
        </h2>
        <p className="text-xl font-medium text-gray-700">
          A fully integrated monitoring system offering seamless provider adoption
        </p>
        <p className="text-gray-600">
          We partnered to build a scalable digital experience ensuring providers could monitor more patients more effectively. With Buildable's solution, providers created a digital experience that takes them from data overload to actionable insights in 3 steps and less than 15 seconds, accelerating critical care response.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Post launch:</h3>
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-[#2DD4BF]/20"></div>
            <TimelineItem time="30 minutes" number="100" />
            <TimelineItem time="4 hours" number="1,000" />
            <TimelineItem time="1 week" number="5,000" />
          </div>
          <div className="mt-4 text-sm text-gray-500 text-center">
            Number of patients monitored / tracked / active monitoring sessions
          </div>
        </div>
      </div>
      
      <div className="relative" data-aos="fade-left">
        <div className="relative">
          <div className="absolute -inset-4 bg-[#2DD4BF]/10 rounded-[2rem] -rotate-3"></div>
          <img
            src="https://ik.imagekit.io/buildable/nissan-landing-page-mockup.png?updatedAt=1734340240933"
            alt="Nissan Landing Page"
            className="relative rounded-xl shadow-xl w-full"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-[#2DD4BF] text-white p-4 rounded-lg shadow-lg">
          <div className="font-bold">First week goal</div>
          <div className="text-2xl font-bold">5,000 sessions</div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationTimeline;