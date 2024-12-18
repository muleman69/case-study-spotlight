import React from 'react';

const VideoResults = () => {
  return (
    <div className="relative w-[60%] mx-auto">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-lg shadow-xl"
      >
        <source
          src="https://ik.imagekit.io/buildable/20241216_0013_Smart%20Health%20Monitoring_simple_compose_01jf78dy07e6gagj9qanbmfcby.mp4?updatedAt=1734338884306"
          type="video/mp4"
        />
      </video>
      <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm p-6 rounded-lg">
        <div className="text-[#2DD4BF] font-semibold mb-2">[Key Results]</div>
        <p className="text-white">
          Within three months of launch, the platform processed over 8.2M data points daily with a 53% increase in early interventions for at-risk patients.
        </p>
      </div>
    </div>
  );
};

export default VideoResults;