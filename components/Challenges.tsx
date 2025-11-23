import React from 'react';
import { TrendingUp, Users, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      id: "01",
      icon: <TrendingUp className="w-6 h-6 text-accent-400" />,
      title: 'The "Access Gap"',
      subtitle: "To Top-Tier Expertise",
      problem: "Mid-sized firms struggle to access premium consulting expertise. They lack budget for Big 3 (MBB) firm overheads, yet boutique firms feel risky or lack specific niche capabilities.",
      solution: "Democratized Access to Elite Talent: Consultport aggregates the best freelance management consultants, providing ex-MBB and top-tier expertise without massive agency premiums. Unlocks talent previously reserved for large enterprises."
    },
    {
      id: "02",
      icon: <Users className="w-6 h-6 text-brand-400" />,
      title: 'Scaling Velocity',
      subtitle: "Inability to Scale Teams",
      problem: "When strategic projects or transformations arise, internal HR is too slow. Hiring specialized full-time talent takes months, causing missed opportunities.",
      solution: "Speed and Platform Efficiency: Consultport's platform model enables booking \"faster than ever before\" - reducing sourcing friction from 6-8 weeks to days. Scale project teams dynamically."
    },
    {
      id: "03",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      title: 'Generalist Trap',
      subtitle: "Resource Constraints",
      problem: "Lean internal teams at this size are forced to tackle complex specialized projects (digital transformation, M&A integration), leading to burnout and distraction.",
      solution: "Flexible, Specialized Skill Injection: Companies can inject specific subject-matter experts (e.g., Digital Lead) solely for project duration, without overburdening generalist managers."
    },
    {
      id: "04",
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      title: 'Vetting Risk',
      subtitle: "Quality Assurance",
      problem: "Mid-sized firms lack sophisticated procurement to verify independent contractor quality, making freelance markets feel like a gamble with high stakes.",
      solution: "Curated Quality Assurance: Consultport acts as the trust layer, handling vetting and evaluation. Positioning as \"the best consultants\" provides de-risked engagements through platform QA."
    }
  ];

  return (
    <section id="challenges" className="py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Context</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          The Mid-Market Challenge
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Understanding the critical pain points of companies with 500-1,000 employees is the foundation of our strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <div 
            key={index}
            className="group relative bg-dark-card/50 border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] transition-all duration-500 hover:border-white/10 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-950 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Challenge {item.id}</span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Connecting Arrow (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700">
                    <ArrowRight size={20} />
                </div>

                <div className="bg-red-500/5 p-5 rounded-2xl border border-red-500/10">
                  <h4 className="text-red-400 font-bold uppercase text-xs tracking-widest mb-3">The Problem</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>
                
                <div className="bg-brand-500/5 p-5 rounded-2xl border border-brand-500/10">
                  <h4 className="text-brand-400 font-bold uppercase text-xs tracking-widest mb-3">Our Solution</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;