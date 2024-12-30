import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', stopDragging);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <div className="relative">
      {/* Before/After Labels above the image */}
      <div className="flex justify-between mb-6 px-8">
        <h3 className="text-2xl font-bold text-red-500">Before</h3>
        <h3 className="text-2xl font-bold text-[#2DD4BF]">After</h3>
      </div>

      {/* Feature Lists */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-r-lg p-4 z-30">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="p-1 rounded-full bg-red-500/20">
              <X className="w-5 h-5 text-red-500" />
            </div>
            <span className="text-base font-medium">Manual spreadsheet calculations</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="p-1 rounded-full bg-red-500/20">
              <X className="w-5 h-5 text-red-500" />
            </div>
            <span className="text-base font-medium">Hours spent on quotes</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="p-1 rounded-full bg-red-500/20">
              <X className="w-5 h-5 text-red-500" />
            </div>
            <span className="text-base font-medium">Inconsistent pricing</span>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-l-lg p-4 z-30">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <span className="text-base font-medium">Automated rate engine</span>
            <div className="p-1 rounded-full bg-[#2DD4BF]/20">
              <Check className="w-5 h-5 text-[#2DD4BF]" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-base font-medium">Real-time quotes</span>
            <div className="p-1 rounded-full bg-[#2DD4BF]/20">
              <Check className="w-5 h-5 text-[#2DD4BF]" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-base font-medium">Dynamic pricing</span>
            <div className="p-1 rounded-full bg-[#2DD4BF]/20">
              <Check className="w-5 h-5 text-[#2DD4BF]" />
            </div>
          </div>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full h-[600px] overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing touch-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* After Image */}
        <div 
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Handle */}
        <motion.div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-grab active:cursor-grabbing"
          style={{ left: `${sliderPosition}%` }}
          animate={{ x: '-50%' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#2DD4BF]/20 animate-ping" />
              <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white" />
              <div className="absolute inset-[4px] w-10 h-10 rounded-full border-2 border-white" />
              <div className="absolute inset-[8px] w-8 h-8 rounded-full border-2 border-white bg-[#2DD4BF]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 