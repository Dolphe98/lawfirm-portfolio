import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Demo alert for the consultation button
  const handleConsultationClick = () => {
    alert("Demo Mode: In a live site, this would open a booking modal or scroll to the contact form.");
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="font-serif text-2xl font-bold tracking-wider">
              VANCE & <span className="text-yellow-600">STERLING</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#practice-areas" className="hover:text-yellow-500 transition-colors">Practice Areas</a>
            <a href="#team" className="hover:text-yellow-500 transition-colors">Our Team</a>
            <a href="#testimonials" className="hover:text-yellow-500 transition-colors">Results</a>
            <button 
              onClick={handleConsultationClick}
              className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-bold py-2 px-6 rounded transition-colors"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#practice-areas" className="block px-3 py-2 hover:bg-slate-700 rounded">Practice Areas</a>
            <a href="#team" className="block px-3 py-2 hover:bg-slate-700 rounded">Our Team</a>
            <button 
              onClick={handleConsultationClick}
              className="w-full text-left px-3 py-2 bg-yellow-600 text-slate-900 font-bold rounded mt-2"
            >
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
