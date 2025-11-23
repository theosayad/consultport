import React from 'react';
import { ArrowDown, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToStart = () => {
    const element = document.getElementById('challenges');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-dark-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto flex flex-col items-center">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-brand-500/20 rounded-full bg-brand-500/5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-brand-500/40 transition-colors duration-300">
              <Sparkles size={14} className="text-brand-400" />
              <span className="text-brand-100 text-xs font-semibold tracking-widest uppercase">EIR Case Study Application</span>
          </div>
        </div>
        
        <h1 className="animate-fade-in-up opacity-0 text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
          Consultport<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-accent-400">
            Growth Strategy
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
              Capturing the Mid-Sized Corporate Segment
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full opacity-80"></div>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A strategic framework for democratizing elite consulting expertise.
            </p>
        </div>

        <div className="mt-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={scrollToStart}
              className="group flex flex-col items-center gap-3 text-slate-500 hover:text-brand-400 transition-colors duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Explore Strategy</span>
              <div className="p-2 rounded-full border border-white/10 group-hover:border-brand-500/50 bg-white/5 group-hover:bg-brand-500/10 transition-all duration-300">
                <ArrowDown size={20} className="animate-bounce" />
              </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;