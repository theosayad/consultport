import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { LayoutDashboard, MessageSquare, FileText, Activity, Users, PieChart as PieIcon, Cpu, ArrowRight, Database, Search, Lock } from 'lucide-react';

const KPIs = () => {
    const pilotData = [
        { name: 'ROI > 4x', value: 65, fullMark: 100, label: 'Client ROI >4x', color: '#10b981', display: '65%+' },
        { name: 'Client Satisfaction', value: 70, fullMark: 100, label: 'Satisfaction Score', color: '#3b82f6', display: '70%+' },
        { name: 'Consultant Satisfaction', value: 60, fullMark: 100, label: 'Consultant NPS', color: '#8b5cf6', display: '60%+' },
        { name: 'Disputes', value: 25, fullMark: 100, label: 'Dispute Rate <25%', color: '#f43f5e', display: '<25%' },
    ];

    const [activeNode, setActiveNode] = useState<string | null>('dashboard');

    const systemNodes = {
        dashboard: {
            title: "Project Pulse Dashboard",
            role: "Real-Time Triangulation",
            details: "Live interface accessible to Client, Consultant, and PM. Tracks baseline metrics vs. current performance. Features automated API integrations (Salesforce/ERP) to pull 'truth data' without manual entry bias.",
            icon: <LayoutDashboard className="text-brand-400" />
        },
        surveys: {
            title: "Sentiment Engine",
            role: "NPS & Fairness Logic",
            details: "Automated pulse checks sent 7 days post-completion. Algorithms analyze qualitative feedback to detect 'Fairness Perception'—crucial for the results-based model's longevity.",
            icon: <MessageSquare className="text-purple-400" />
        },
        ops: {
            title: "Ops Command Center",
            role: "Weekly Synthesis",
            details: "Aggregates status from all active pilots every Friday. Red/Yellow/Green flagging system identifies disputes before they escalate. The central nervous system of the pilot.",
            icon: <Activity className="text-red-400" />
        },
        profiles: {
            title: "Consultant DNA",
            role: "Performance Moneyball",
            details: "Builds a 'Success Probability Score' for every consultant. Tracks granular metrics: Target Achievement %, Dispute Rate, and Category Fit. Used for AI-driven matching in Scale Phase.",
            icon: <Users className="text-green-400" />
        },
        analytics: {
            title: "Category Alpha",
            role: "Market Intelligence",
            details: "Aggregates outcome data to find patterns. (e.g., 'Cost Reduction projects succeed 20% more often in Manufacturing than Retail'). Guides sales to high-probability wins.",
            icon: <PieIcon className="text-yellow-400" />
        }
    };

  return (
    <section id="kpis" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="text-center mb-20">
             <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">Validation</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Measurement of Success</h2>
            <p className="text-xl text-slate-400">Clear KPIs and targets to evaluate pilot performance.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-32">
            {/* Chart Section */}
            <div className="lg:col-span-7 bg-dark-card border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Pilot Phase Targets</h3>
                        <p className="text-slate-400 text-sm mt-1">Months 1-3 Success Metrics</p>
                    </div>
                    <div className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-slate-400">LIVE DATA MOCKUP</div>
                </div>
                
                <div className="h-[300px] w-full mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={pilotData} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis dataKey="name" type="category" width={140} stroke="#94a3b8" fontSize={12} fontWeight="600" tickLine={false} axisLine={false} />
                            <Tooltip 
                                cursor={{fill: 'rgba(255,255,255,0.03)'}}
                                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                            />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                {pilotData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {pilotData.map((kpi, i) => (
                        <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-xl font-black mb-1" style={{color: kpi.color}}>{kpi.display}</div>
                            <div className="text-[10px] uppercase tracking-wide text-slate-500 font-bold">{kpi.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decision Framework */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                <h3 className="text-xl font-bold text-white mb-2 px-2">Decision Framework</h3>
                
                <div className="bg-green-500/5 border-l-4 border-green-500 p-6 rounded-r-xl backdrop-blur-sm hover:bg-green-500/10 transition-colors group cursor-default">
                    <h4 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-2 flex justify-between">
                        Green Light: Scale
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">🚀</span>
                    </h4>
                    <p className="text-slate-300 text-sm mb-0 leading-relaxed">Hits >65% ROI, >70% Sat, &lt;25% Disputes. 3+ projects completed.</p>
                </div>

                <div className="bg-yellow-500/5 border-l-4 border-yellow-500 p-6 rounded-r-xl backdrop-blur-sm hover:bg-yellow-500/10 transition-colors group cursor-default">
                    <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-2 flex justify-between">
                        Yellow Light: Iterate
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">🔧</span>
                    </h4>
                    <p className="text-slate-300 text-sm mb-0 leading-relaxed">45-65% ROI, 55-70% Sat. Moderate disputes. Extend pilot 2 months.</p>
                </div>

                <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r-xl backdrop-blur-sm hover:bg-red-500/10 transition-colors group cursor-default">
                    <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-2 flex justify-between">
                        Red Light: Pivot
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">🛑</span>
                    </h4>
                    <p className="text-slate-300 text-sm mb-0 leading-relaxed">&lt;45% ROI, &lt;55% Sat, >35% Disputes. Significant model adjustment.</p>
                </div>
            </div>
        </div>

        {/* The Intelligence Engine (Revised Tracking Infrastructure) */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-brand-500/10 rounded-xl border border-brand-500/20 animate-pulse-slow">
                     <Cpu className="text-brand-400" size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">The Intelligence Engine</h3>
                    <p className="text-slate-400 text-sm">Consultport OS: Turning raw activity into competitive advantage.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[500px]">
                {/* Column 1: Data Ingestion */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-2">Capture</div>
                    
                    <button 
                        onClick={() => setActiveNode('dashboard')}
                        className={`p-6 rounded-2xl border transition-all text-left group ${activeNode === 'dashboard' ? 'bg-brand-900/20 border-brand-500 ring-1 ring-brand-500/50' : 'bg-dark-card border-white/5 hover:border-white/20'}`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <LayoutDashboard className={activeNode === 'dashboard' ? 'text-brand-400' : 'text-slate-500'} size={24} />
                            {activeNode === 'dashboard' && <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>}
                        </div>
                        <h4 className="text-white font-bold text-sm">Project Pulse</h4>
                        <p className="text-slate-500 text-xs mt-2">Real-time outcome tracking & API hooks.</p>
                    </button>

                    <button 
                        onClick={() => setActiveNode('surveys')}
                        className={`p-6 rounded-2xl border transition-all text-left group ${activeNode === 'surveys' ? 'bg-purple-900/20 border-purple-500 ring-1 ring-purple-500/50' : 'bg-dark-card border-white/5 hover:border-white/20'}`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <MessageSquare className={activeNode === 'surveys' ? 'text-purple-400' : 'text-slate-500'} size={24} />
                            {activeNode === 'surveys' && <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>}
                        </div>
                        <h4 className="text-white font-bold text-sm">Sentiment</h4>
                        <p className="text-slate-500 text-xs mt-2">Post-project NPS & qualitative loops.</p>
                    </button>
                </div>

                {/* Column 2: The Core (Visual Connector) */}
                <div className="lg:col-span-6 bg-slate-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
                    {/* Background Grid Animation */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                    
                    {/* Active Node Detail View */}
                    <div className="relative z-10 max-w-md animate-fade-in">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                            {systemNodes[activeNode as keyof typeof systemNodes]?.icon}
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                            {systemNodes[activeNode as keyof typeof systemNodes]?.title}
                        </h4>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-mono mb-6 border border-white/5">
                            SYSTEM_ROLE: {systemNodes[activeNode as keyof typeof systemNodes]?.role}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">
                            {systemNodes[activeNode as keyof typeof systemNodes]?.details}
                        </p>
                    </div>

                    {/* Connecting Lines (Decorative) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                </div>

                {/* Column 3: Strategic Output */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-2">Synthesize</div>
                    
                    <button 
                        onClick={() => setActiveNode('ops')}
                        className={`p-6 rounded-2xl border transition-all text-left group ${activeNode === 'ops' ? 'bg-red-900/20 border-red-500 ring-1 ring-red-500/50' : 'bg-dark-card border-white/5 hover:border-white/20'}`}
                    >
                         <div className="flex justify-between items-center mb-2">
                            <Activity className={activeNode === 'ops' ? 'text-red-400' : 'text-slate-500'} size={24} />
                             {activeNode === 'ops' && <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>}
                        </div>
                        <h4 className="text-white font-bold text-sm">Ops Command</h4>
                        <p className="text-slate-500 text-xs mt-2">Weekly synthesis & dispute flags.</p>
                    </button>

                    <button 
                        onClick={() => setActiveNode('profiles')}
                        className={`p-6 rounded-2xl border transition-all text-left group ${activeNode === 'profiles' ? 'bg-green-900/20 border-green-500 ring-1 ring-green-500/50' : 'bg-dark-card border-white/5 hover:border-white/20'}`}
                    >
                         <div className="flex justify-between items-center mb-2">
                            <Users className={activeNode === 'profiles' ? 'text-green-400' : 'text-slate-500'} size={24} />
                             {activeNode === 'profiles' && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>}
                        </div>
                        <h4 className="text-white font-bold text-sm">Consultant DNA</h4>
                        <p className="text-slate-500 text-xs mt-2">Performance Moneyball.</p>
                    </button>
                    
                    <button 
                        onClick={() => setActiveNode('analytics')}
                        className={`p-6 rounded-2xl border transition-all text-left group ${activeNode === 'analytics' ? 'bg-yellow-900/20 border-yellow-500 ring-1 ring-yellow-500/50' : 'bg-dark-card border-white/5 hover:border-white/20'}`}
                    >
                         <div className="flex justify-between items-center mb-2">
                            <PieIcon className={activeNode === 'analytics' ? 'text-yellow-400' : 'text-slate-500'} size={24} />
                             {activeNode === 'analytics' && <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>}
                        </div>
                        <h4 className="text-white font-bold text-sm">Market Alpha</h4>
                        <p className="text-slate-500 text-xs mt-2">Category success probability.</p>
                    </button>
                </div>
            </div>
        </div>

        {/* Scale KPIs */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-10 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
            <h3 className="text-2xl font-bold text-white mb-10 text-center relative z-10">Scale Phase Targets (Month 12)</h3>
            <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
                <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">Projects</div>
                    <div className="text-6xl font-black text-white mb-3 tracking-tighter">14</div>
                    <div className="text-green-500 text-sm font-bold bg-green-500/10 inline-block px-3 py-1 rounded-full">up from 6-8 in Mo 6</div>
                </div>
                <div className="border-x border-white/5">
                    <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">Active Consultants</div>
                    <div className="text-6xl font-black text-white mb-3 tracking-tighter">30</div>
                    <div className="text-brand-400 text-sm font-bold bg-brand-500/10 inline-block px-3 py-1 rounded-full">Top 25% tier</div>
                </div>
                <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-3">Data Points Collected</div>
                    <div className="text-6xl font-black text-white mb-3 tracking-tighter">100+</div>
                    <div className="text-accent-400 text-sm font-bold bg-accent-500/10 inline-block px-3 py-1 rounded-full">Outcomes Collected</div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default KPIs;