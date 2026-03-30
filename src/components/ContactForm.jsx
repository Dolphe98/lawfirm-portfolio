import React, { useState } from 'react';

const ContactForm = () => {
  // We use React state to manage our form data and submission status
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // DEMO MODE ALERT
    setSubmitStatus("Demo Mode: In a live site, this would securely send the data to the firm's legal CRM or email system.");
    
    // Clear the form to show a successful interaction
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Clear the status message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Request a Confidential Consultation
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Time is critical in legal matters. Contact our office today to schedule a comprehensive review of your case with one of our senior partners.
            </p>
            
            <div className="space-y-6 text-slate-700">
              <div className="flex items-start">
                <span className="text-yellow-600 font-bold mr-4">📍</span>
                <p><strong>Headquarters</strong><br/>100 Wall Street, Suite 4500<br/>New York, NY 10005</p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-600 font-bold mr-4">📞</span>
                <p><strong>Phone:</strong> +1 (212) 555-0198</p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-600 font-bold mr-4">✉️</span>
                <p><strong>Email:</strong> intake@vancesterling.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                <input 
                  type="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Brief Description of Your Case</label>
                <textarea 
                  name="message" rows="4" required
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all"
                  placeholder="Please provide basic details. Do not include sensitive information."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded transition-colors duration-300"
              >
                Submit Request
              </button>

              {/* Success/Demo Message Toast */}
              {submitStatus && (
                <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-600 text-slate-800 text-sm font-semibold rounded">
                  {submitStatus}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;