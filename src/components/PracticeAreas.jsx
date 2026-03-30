import React from 'react';
// We import your fake database here!
import { practiceAreas } from '../data/mockData';

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Our Areas of Practice
          </h2>
          {/* A premium little gold divider line */}
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized legal expertise for when it matters most. We focus our practice to deliver unparalleled results.
          </p>
        </div>

        {/* The Grid - Responsive and dynamic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area) => (
            <div 
              key={area.id} 
              className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            >
              {/* Premium Icon Placeholder */}
              <div className="w-14 h-14 bg-slate-900 rounded flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors text-white">
                <span className="font-serif font-bold text-2xl">{area.title.charAt(0)}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                {area.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {area.description}
              </p>
              
              <div className="text-yellow-600 font-bold group-hover:text-slate-900 transition-colors flex items-center">
                Learn More 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;