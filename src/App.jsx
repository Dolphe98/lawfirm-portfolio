import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm'; // <-- Import Form
import Footer from './components/Footer';           // <-- Import Footer

function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <PracticeAreas />
        <Team />
        <Testimonials />
        <ContactForm /> {/* <-- Render Form */}
      </main>
      
      <Footer /> {/* <-- Render Footer outside of main */}
    </div>
  );
}

export default App;