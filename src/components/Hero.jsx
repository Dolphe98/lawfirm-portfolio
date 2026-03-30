import React from 'react';

const Hero = () => {
  const handleScrollToForm = () => {
    // In a real app, you'd use a ref or smooth scroll to the contact section
    alert("Demo Mode: This would smoothly scroll the user down to the intake form.");
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 tracking-wide">
          Justice Demands <span className="text-yellow-600">Excellence.</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          We provide aggressive, strategic legal representation for complex corporate and personal matters. When everything is on the line, you need a team that doesn't compromise.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handleScrollToForm}
            className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-bold text-lg py-4 px-8 rounded shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Review My Case
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold text-lg py-4 px-8 rounded transition-all">
            Meet the Partners
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;