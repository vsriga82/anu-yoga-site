"use client";
import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialCarousel({ testimonials }: { testimonials: any[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 480 : window.innerWidth * 0.85;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group max-w-[100vw]">
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 z-20 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => scroll('left')}
          className="p-3 rounded-full bg-white/90 shadow-lg text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-200"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-8 z-20 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => scroll('right')}
          className="p-3 rounded-full bg-white/90 shadow-lg text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-200"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-24 pb-12 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
      >
        {testimonials.map((t, i) => (
          <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[450px] relative bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-sage-100/50 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            {/* Large watermark quote */}
            <div className="absolute -top-6 -left-4 text-9xl font-serif text-sage-100/40 select-none pointer-events-none z-0" aria-hidden="true">
              "
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed text-lg flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-sage-50">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-sage-600 font-serif font-medium text-xl shadow-sm ring-1 ring-sage-100 shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">{t.name}</h4>
                  <p className="text-sm text-terracotta">{t.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer to ensure the last card can be fully scrolled into view without cutting off */}
        <div className="shrink-0 w-1 md:w-6 lg:w-12" aria-hidden="true"></div>
      </div>
    </div>
  );
}
