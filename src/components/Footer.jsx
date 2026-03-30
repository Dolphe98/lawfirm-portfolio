import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold tracking-wider text-white mb-4">
              VANCE & <span className="text-yellow-600">STERLING</span>
            </h2>
            <p className="text-sm max-w-sm">
              Premier legal representation for complex corporate litigation, personal injury, and high-net-worth family law.
            </p>
          </div>
          
          {/* Links Col */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#practice-areas" className="hover:text-yellow-500 transition-colors">Practice Areas</a></li>
              <li><a href="#team" className="hover:text-yellow-500 transition-colors">Our Attorneys</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-500 transition-colors">Case Results</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div>
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h3>
             <ul className="space-y-2 text-sm">
              <li>100 Wall Street, NY 10005</li>
              <li>(212) 555-0198</li>
              <li>intake@vancesterling.com</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vance & Sterling LLC. All rights reserved.
          </p>
          <p className="max-w-2xl text-center md:text-right">
            Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;