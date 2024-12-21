import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Building2, BookOpen } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: 'healthcare' | 'finance' | 'publishing';
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const categoryIcons = {
  healthcare: Stethoscope,
  finance: Building2,
  publishing: BookOpen
};

export function CaseStudyCard({
  title,
  description,
  image,
  tags,
  link,
  category,
  testimonial
}: CaseStudyCardProps) {
  const Icon = categoryIcons[category];

  return (
    <motion.div
      className="relative group rounded-2xl overflow-hidden cursor-pointer h-[320px] bg-gradient-to-br from-[#00d5c4] to-[#00a396]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex">
        {/* Left side - Testimonial */}
        {testimonial && (
          <div className="w-[30%] pr-6 flex flex-col justify-end">
            <blockquote className="text-white/90 text-sm italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-sm">
              <div className="text-white font-medium">{testimonial.author}</div>
              <div className="text-white/70">{testimonial.role}</div>
            </div>
          </div>
        )}

        {/* Dividing Line */}
        {testimonial && (
          <div className="w-px bg-white/20 self-stretch my-6" />
        )}

        {/* Right side - Main Content */}
        <div className={`flex flex-col justify-end ${testimonial ? 'pl-6 w-[70%]' : 'w-full'}`}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors leading-tight">
            {title}
          </h3>
          
          <p className="text-white/80 text-base mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
            Read Case Study
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Category Icon */}
      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#00d5c4]" />
      </div>
    </motion.div>
  );
} 