import React from 'react';
import Hero from './components/landing/Hero';
import Portfolio from './components/landing/Portfolio';
import Education from './components/landing/Education';
import Contact from './components/landing/Contact';

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Main content container */}
      <main className="w-full relative">
        {/* Safe area padding for mobile devices */}
        <div
          className="w-full flex flex-col"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <Hero />
          <Portfolio />
          <Education />
          <Contact />
          
          {/* Footer */}
          <footer className="py-12 px-6 text-center border-t border-slate-900 bg-slate-950">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Tu Nombre. Diseñado con ❤️ para reclutadores.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
