import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudy {
  quote: string;
  category: string;
  title: string;
  companyName: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    quote: "Within months, we scaled from 10,000 to 10 million concurrent viewers while maintaining 99.9999% uptime.",
    category: "Media & Entertainment",
    title: "SCALING FAITH: HOW WE HELPED CATHOLICTV HANDLE 1000X MORE VIEWERS",
    companyName: "CatholicTV",
    link: "/case-studies/catholic-tv"
  },
  {
    quote: "By leveraging AI and machine learning, we transformed how readers discover their next favorite book, analyzing over 10 million titles.",
    category: "Publishing Technology",
    title: "FROM PAPER TO PROFIT: REVOLUTIONIZING BOOK DISCOVERY WITH AI",
    companyName: "BookSmart",
    link: "/case-studies/book-discovery"
  },
  {
    quote: "We built a HIPAA-compliant system handling 1,000 concurrent users across 20,000 providers, delivering dynamic lab results visualization.",
    category: "Healthcare Technology",
    title: "LABORATORY INNOVATION: REIMAGINING TEST RESULT DELIVERY FOR THE DIGITAL AGE",
    companyName: "LabTech",
    link: "/case-studies/lab-results"
  }
];

const CaseStudiesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const cardWidth = sliderRef.current.querySelector('.case-study-card')?.clientWidth || 0;
    const scrollAmount = cardWidth + 24; // Add gap size
    const newScrollPosition = sliderRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    sliderRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      
      const isAtEnd = sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;
      
      if (isAtEnd) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#0A0B14] mb-16">CASE STUDIES</h2>
        
        <div className="relative px-24">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="case-study-card min-w-[600px] bg-[#0A0B14] rounded-3xl p-12 snap-start flex flex-col overflow-hidden"
                  style={{ height: '400px' }}
                >
                  <div className="flex h-full">
                    {/* Quote Section */}
                    <div className="w-1/3 pr-8 border-r border-white/20 flex-shrink-0">
                      <p className="text-white/70 text-sm italic leading-relaxed line-clamp-6">
                        {study.quote}
                      </p>
                    </div>

                    {/* Content Section */}
                    <div className="w-2/3 pl-8 flex flex-col">
                      <div className="text-white/80 text-sm mb-3">{study.category}</div>
                      <h3 className="text-white text-2xl font-bold leading-tight mb-6 line-clamp-3">
                        {study.title}
                      </h3>
                      <a href={study.link} className="text-[#2DD4BF] text-xs font-medium hover:text-[#2DD4BF]/80 transition-colors">
                        MORE
                      </a>
                      <div className="mt-auto">
                        <div className="bg-white/10 px-4 py-2 rounded-lg inline-flex items-center">
                          <span className="text-white font-medium">{study.companyName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSlider;