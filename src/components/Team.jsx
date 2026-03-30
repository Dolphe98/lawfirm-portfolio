import React from 'react';
import { teamMembers } from '../data/mockData';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Meet the Partners
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Decades of combined experience. A relentless pursuit of justice. Our partners are recognized leaders in their respective fields.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              
              {/* Image Container with Hover Zoom Effect */}
              <div className="relative h-80 overflow-hidden">
                <img 
  src={member.image} 
  alt={member.name} 
  // Notice the 'object-top' right after 'object-cover' 👇
  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
/>
                {/* Subtle gradient overlay at the bottom of the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Partner Info */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-bold tracking-wide uppercase text-sm mt-2 mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 italic">
                  "{member.bio}"
                </p>
                
                {/* Premium Contact Button */}
                <button className="mt-6 border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-6 py-2 rounded transition-colors font-semibold">
                  View Full Profile
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;