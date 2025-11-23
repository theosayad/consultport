import React from 'react';
import { CheckCircle, AlertTriangle, ShieldAlert, UserX, Code } from 'lucide-react';

const Timeline = () => {
    const phases = [
        {
            month: "Month 1",
            title: "Setup Phase",
            subtitle: "Build Foundation",
            color: "bg-brand-500",
            border: "border-brand-500",
            weeks: [
                { title: "Week 1: Foundation", items: ["Assemble team (Lead, Legal, Product, Ops)", "Draft performance contract templates"] },
                { title: "Week 2: Contracts & Recruit", items: ["Finalize contracts", "Outreach to 30 consultants", "Begin Dashboard MVP"] },
                { title: "Week 3: Onboarding", items: ["Engage 6-10 consultants", "Host onboarding webinar", "Identify 25 target clients"] },
                { title: "Week 4: Pre-Launch", items: ["Secure 3-5 pilot clients", "Detailed scoping calls", "Dashboard MVP Live"] }
            ]
        },
        {
            month: "Month 2",
            title: "Launch Phase",
            subtitle: "Execute Cohort",
            color: "bg-purple-500",
            border: "border-purple-500",
            weeks: [
                { title: "Week 5: Kickoffs", items: ["Launch projects & baselines", "Establish weekly check-ins", "Start work"] },
                { title: "Weeks 6-7: Monitoring", items: ["Weekly check-ins", "Bi-weekly client sync", "Address disputes immediately"] },
                { title: "Week 8: First Completions", items: ["Short projects complete", "Begin measurement", "Retrospective"] }
            ]
        },
        {
            month: "Month 3",
            title: "Optimize Phase",
            subtitle: "Gather Data",
            color: "bg-green-500",
            border: "border-green-500",
            weeks: [
                { title: "Weeks 9-10: Verification", items: ["Verify outcomes", "Calculate bonuses", "Process payments"] },
                { title: "Week 11: Analysis", items: ["Compile pilot data & ROI", "Consultant profiles", "Refine contracts v2.0"] },
                { title: "Week 12: Decision", items: ["Go/No-Go Decision", "Case study assets", "Plan scale budget"] }
            ]
        }
    ];

  return (
    <section id="timeline" className="py-32 bg-slate-900/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
             <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">Execution Plan</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">3-Month Implementation</h2>
            <p className="text-xl text-slate-400">From setup to launch to optimization.</p>
        </div>

        <div className="relative mb-32">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brand-500/50 via-purple-500/50 to-green-500/50 hidden md:block"></div>

            <div className="space-y-12 relative z-10">
                {phases.map((phase, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
                        {/* Content Side */}
                        <div className="w-full md:w-1/2 md:px-16">
                            <div className="bg-dark-card border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 shadow-xl">
                                <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/5">
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${phase.color}`}>
                                            {phase.month}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                        <p className="text-slate-400 text-sm">{phase.subtitle}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    {phase.weeks.map((week, wIndex) => (
                                        <div key={wIndex}>
                                            <h4 className="text-brand-300 font-bold text-xs uppercase tracking-wide mb-2">{week.title}</h4>
                                            <ul className="space-y-1">
                                                {week.items.map((item, i) => (
                                                    <li key={i} className="flex items-start text-slate-400 text-sm">
                                                        <span className="mr-2 text-slate-600">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] hidden md:block"></div>

                        {/* Empty Side */}
                        <div className="w-full md:w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>

        {/* Risk Mitigation */}
        <div className="bg-dark-card border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                     <ShieldAlert className="text-red-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Risk Mitigation Strategies</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-red-500/20 transition-colors">
                    <h4 className="text-white font-bold mb-2 text-sm">Can't Engage Consultants</h4>
                    <p className="text-xs text-red-400 font-bold uppercase mb-3">Trigger: &lt;5 committed by Wk 3</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        Adjust pitch to emphasize higher earnings. Increase base fees. Offer "founding benefits".
                    </p>
                    <p className="text-slate-600 text-xs italic border-t border-white/5 pt-3">Contingency: Reduce pilot to 1-2 projects.</p>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-yellow-500/20 transition-colors">
                    <h4 className="text-white font-bold mb-2 text-sm">Can't Secure Clients</h4>
                    <p className="text-xs text-yellow-400 font-bold uppercase mb-3">Trigger: &lt;2 committed by Wk 4</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        Offer 20% pilot discount. Target warm relationships. Senior leadership calls.
                    </p>
                    <p className="text-slate-600 text-xs italic border-t border-white/5 pt-3">Contingency: "Invite-only" exclusivity.</p>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors">
                    <h4 className="text-white font-bold mb-2 text-sm">Dashboard Delays</h4>
                    <p className="text-xs text-blue-400 font-bold uppercase mb-3">Trigger: MVP late by Wk 3</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        Cut non-essential features. Daily check-ins. Manual tracking interim.
                    </p>
                    <p className="text-slate-600 text-xs italic border-t border-white/5 pt-3">Contingency: Google Sheets tracking.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Timeline;