import React from 'react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Client <span className="text-yellow-600">Results</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We don't just practice law; we deliver decisive victories. Here is what our past clients have to say about our representation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-slate-800 p-8 rounded-lg border border-slate-700 relative hover:border-yellow-600/50 transition-colors duration-300"
            >
              {/* Massive Background Quote Icon for styling */}
              <div className="text-slate-700 absolute top-4 left-6 opacity-50">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              {/* The Actual Quote */}
              <div className="relative z-10 pl-4">
                <p className="text-xl italic text-slate-200 mb-6 leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto border-t border-slate-700 pt-4">
                  <p className="text-yellow-500 font-bold font-serif text-lg">
                    {testimonial.client}
                  </p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">
                    Case: {testimonial.case}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;