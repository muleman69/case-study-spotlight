import React from 'react';

const BeforeAfterSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-white mb-12">See It In Action</h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Before Section */}
        <div className="space-y-6">
          <div className="relative">
            <h3 className="text-2xl font-bold text-red-500 mb-4">Before</h3>
            <img
              src="https://ik.imagekit.io/buildable/Wildwood_Before.jpeg?updatedAt=1735539034040"
              alt="Before - Manual Process"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-500 text-xl">×</span>
                </div>
              </div>
              <span className="text-gray-300">Manual rate calculations</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-500 text-xl">×</span>
                </div>
              </div>
              <span className="text-gray-300">Hours spent on quotes</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-500 text-xl">×</span>
                </div>
              </div>
              <span className="text-gray-300">Inconsistent pricing</span>
            </div>
          </div>
        </div>

        {/* After Section */}
        <div className="space-y-6">
          <div className="relative">
            <h3 className="text-2xl font-bold text-green-500 mb-4">After</h3>
            <img
              src="https://ik.imagekit.io/buildable/Wildwood_After.jpeg?updatedAt=1735539034118"
              alt="After - Automated Solution"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
              </div>
              <span className="text-gray-300">Automated rate engine</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
              </div>
              <span className="text-gray-300">Real-time quotes</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
              </div>
              <span className="text-gray-300">Dynamic pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection; 