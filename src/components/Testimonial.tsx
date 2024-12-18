import React from 'react';
import { MessageSquare } from 'lucide-react';

const Testimonial = () => {
  return (
    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
      <div className="relative">
        <MessageSquare className="w-24 h-24 text-teal-500 mx-auto mb-12 opacity-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <MessageSquare className="w-16 h-16 text-teal-500 mx-auto mb-8 relative z-10" />
      </div>
      <blockquote className="text-3xl font-light mb-12 leading-relaxed">
        "This system isn't just monitoring numbers - it's saving lives. The real-time alerts and predictive analytics have revolutionized how we deliver care to our patients."
      </blockquote>
      <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
          alt="Dr. Sarah Chen"
          className="w-20 h-20 rounded-full mr-6 ring-4 ring-teal-500 ring-opacity-50"
        />
        <div className="text-left">
          <p className="font-semibold text-xl mb-1">Dr. Sarah Chen</p>
          <p className="text-gray-400">Chief of Cardiology</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;