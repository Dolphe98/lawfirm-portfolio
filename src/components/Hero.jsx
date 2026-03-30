import React from 'react';

const Hero = () => {
  const handleScrollToForm = () => {
    alert("Demo Mode: This would smoothly scroll the user down to the intake form.");
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      
      {/* Background Image: Clean Courthouse Pillars */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505664173691-a2816136a67d?auto=format&fit=crop&q=80&w=2000')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Upgraded Gradient Overlay - Darker at top and bottom for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-900/95"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        {/* Added drop-shadow-lg to the text to lift it off the background even more */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
          Justice Demands <span className="text-yellow-500">Excellence.</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          We provide aggressive, strategic legal representation for complex corporate and personal matters. When everything is on the line, you need a team that doesn't compromise.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handleScrollToForm}
            className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-bold text-lg py-4 px-8 rounded shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Review My Case
          </button>
          <button className="bg-transparent border-2 border-slate-300 hover:border-white hover:bg-white hover:text-slate-900 text-white font-bold text-lg py-4 px-8 rounded transition-all shadow-lg">
            Meet the Partners
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;