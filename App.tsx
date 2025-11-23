import React, { useState, useEffect } from 'react';
import PasswordGate from './components/PasswordGate';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Initiatives from './components/Initiatives';
import Pitch from './components/Pitch';
import KPIs from './components/KPIs';
import Timeline from './components/Timeline';
import Conclusion from './components/Conclusion';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('consultport_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    const handleScroll = () => {
        setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem('consultport_auth', 'true');
    setIsAuthenticated(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      {!isAuthenticated && <PasswordGate onUnlock={handleUnlock} />}
      
      {/* Main Content - rendered but obscured/locked until authenticated */}
      <main className={`${!isAuthenticated ? 'h-screen overflow-hidden filter blur-sm' : 'opacity-100 transition-opacity duration-1000'}`}>
        <Hero />
        
        <div className="relative z-20 bg-slate-950 shadow-2xl">
            <Challenges />
            
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12"></div>
            
            <Initiatives />
            
            <Pitch />
            
            <KPIs />
            
            <Timeline />

            <Conclusion />

            <footer className="py-12 border-t border-white/5 bg-slate-900 text-center">
                <p className="text-slate-400 mb-2">Case Study prepared by Theo Sayad for EIR Application</p>
                <p className="text-slate-600 text-sm">Strategic analysis of mid-market consulting opportunities</p>
            </footer>
        </div>
      </main>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-lg transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;