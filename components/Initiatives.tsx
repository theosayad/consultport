import React, { useState } from 'react';
import { Target, Zap, Repeat, CheckCircle2, Rocket, BarChart3, Shield, ArrowRight, Clock, Check, Layers, UserCheck, TrendingUp, DollarSign, Timer, AlertOctagon } from 'lucide-react';

const PlaybooksContent = () => (
  <div className="animate-fade-in space-y-16">
    {/* Hero & Problem Statement */}
    <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold mb-6">
            <Target size={14} /> INITIATIVE 1
        </div>
        <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">PE Value Creation Playbooks</h3>
        <p className="text-xl text-slate-300 leading-relaxed mb-8 font-light">
            Transforming post-acquisition value creation by offering pre-configured "Consulting Squads" that deploy in 48 hours.
        </p>
    </div>

    {/* Detailed Problem/Solution Block */}
    <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-red-900/10 border border-red-500/10 p-8 rounded-2xl">
            <h4 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <AlertOctagon size={16} /> The Broken Process
            </h4>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                When PE firms acquire mid-sized companies, they typically lose the first quarter to friction. Operating partners spend Weeks 1-4 conducting assessments, Weeks 5-8 scrambling to find consultants through networks, and Weeks 9-12 onboarding them.
            </p>
            <div className="bg-red-950/30 p-4 rounded-lg border border-red-500/20">
                <strong className="text-red-300 text-sm block mb-1">The Consequence</strong>
                <p className="text-slate-400 text-xs leading-relaxed">
                    3 months wasted, momentum lost, and deal thesis at risk. By the time consultants are productive (Week 13+), low-hanging fruit has rotted and organizational resistance has hardened.
                </p>
            </div>
        </div>

        <div className="bg-brand-900/10 border border-brand-500/10 p-8 rounded-2xl">
            <h4 className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Rocket size={16} /> The Consultport Solution
            </h4>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                We transform post-acquisition execution by offering <strong>Systematized Consulting Squads</strong>. PE firms get instant access to pre-assembled, specialized teams that deploy within <strong>48 hours</strong> of close with battle-tested playbooks.
            </p>
            <div className="bg-brand-900/20 p-4 rounded-lg border border-brand-500/20">
                <strong className="text-brand-300 text-sm block mb-1">The Advantage</strong>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Instead of identifying problems and <em>then</em> searching for talent, portfolio companies get immediate-deploy specialist teams from Day 1, ensuring momentum is captured immediately.
                </p>
            </div>
        </div>
    </div>

    {/* The Velocity Comparison (Visual Timeline) */}
    <div className="bg-dark-card border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-white mb-2">The Velocity Gap</h4>
            <p className="text-slate-400">Visualizing the time-to-value advantage.</p>
        </div>

        <div className="space-y-8 relative z-10">
            {/* Traditional Timeline */}
            <div className="relative">
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    <span>Acquisition Close</span>
                    <span className="text-red-400">Value Creation Delayed (Week 13+)</span>
                </div>
                <div className="h-16 bg-slate-900 rounded-xl border border-white/5 flex overflow-hidden relative opacity-50">
                     {/* Phases */}
                     <div className="w-[25%] h-full bg-red-900/20 border-r border-red-500/10 flex items-center justify-center text-[10px] text-red-300 font-bold p-2 text-center">
                        Assess<br/>(Wk 1-4)
                     </div>
                     <div className="w-[25%] h-full bg-red-900/20 border-r border-red-500/10 flex items-center justify-center text-[10px] text-red-300 font-bold p-2 text-center">
                        Search<br/>(Wk 5-8)
                     </div>
                     <div className="w-[25%] h-full bg-red-900/20 border-r border-red-500/10 flex items-center justify-center text-[10px] text-red-300 font-bold p-2 text-center">
                        Onboard<br/>(Wk 9-12)
                     </div>
                     <div className="w-[25%] h-full bg-slate-800 flex items-center justify-center text-xs text-slate-500 font-bold">
                        Work Starts...
                     </div>
                </div>
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                     <AlertOctagon className="text-red-500/50" size={32} />
                </div>
            </div>

            {/* Consultport Timeline */}
            <div className="relative">
                 <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    <span>Acquisition Close</span>
                    <span className="text-brand-400">Value Captured Immediately</span>
                </div>
                <div className="h-20 bg-gradient-to-r from-brand-900/40 to-brand-600/20 rounded-xl border border-brand-500/30 flex overflow-hidden relative shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                     <div className="w-[2%] h-full bg-brand-500 flex items-center justify-center relative group">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap">Day 1</div>
                     </div>
                     <div className="flex-1 h-full flex items-center pl-6">
                        <div className="flex items-center gap-3">
                            <Rocket className="text-brand-400 animate-pulse" size={24} />
                            <div>
                                <div className="text-white font-bold text-sm">Squad Deployed (48 Hrs)</div>
                                <div className="text-brand-200 text-xs">Executing 100-Day Playbook</div>
                            </div>
                        </div>
                     </div>
                     <div className="px-8 h-full bg-brand-500/10 flex items-center justify-center border-l border-brand-500/20">
                         <div className="text-center">
                             <div className="text-2xl font-black text-white">25%</div>
                             <div className="text-[10px] uppercase font-bold text-brand-300">Faster ROI</div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </div>

    {/* The 4 Core Squads Menu */}
    <div>
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">The Squad Menu</h3>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
                { 
                    name: "Revenue Acceleration", 
                    price: "€65K", 
                    icon: "📈",
                    focus: "Fixing weak sales execution",
                    team: "VP Sales + Ops + Coach",
                    action: "Audit pipeline, design methodology, train team, hire VP Sales."
                },
                { 
                    name: "Operational Excellence", 
                    price: "€75K", 
                    icon: "⚙️",
                    focus: "Margin compression resolution",
                    team: "Ops Dir + Engineer + Accountant",
                    action: "Value stream mapping, waste reduction, supplier optimization."
                },
                { 
                    name: "Digital Transformation", 
                    price: "€70K", 
                    icon: "💻",
                    focus: "Rapid technology uplift",
                    team: "Digital Lead + Architect + Change Mgr",
                    action: "Tech audit, prioritization roadmap, vendor selection."
                },
                { 
                    name: "Cash & Margin Opt", 
                    price: "€80K", 
                    icon: "💰",
                    focus: "Stabilizing cash bleed",
                    team: "Interim CFO + WC Expert + FP&A",
                    action: "Cash triage, zero-based budgeting, working capital optimization."
                }
            ].map((squad, i) => (
                <div key={i} className="group bg-dark-card border border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] transition-all duration-300 hover:border-brand-500/30 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-6xl select-none">
                        {squad.icon}
                    </div>
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl border border-white/5 group-hover:border-white/20 transition-colors">
                            {squad.icon}
                        </div>
                        <div className="bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-lg">
                            <span className="text-brand-400 font-bold font-mono">{squad.price}</span>
                        </div>
                    </div>
                    
                    <h5 className="font-bold text-white text-lg mb-2 relative z-10">{squad.name}</h5>
                    <p className="text-slate-400 text-sm mb-4 min-h-[2.5rem] relative z-10">{squad.focus}</p>
                    
                    <div className="bg-slate-900/50 rounded-lg p-3 mb-4 border border-white/5 relative z-10">
                        <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Squad Comp</span>
                        <span className="text-xs text-slate-300">{squad.team}</span>
                    </div>

                    <div className="text-xs text-slate-500 border-t border-white/5 pt-4 mt-auto leading-relaxed relative z-10 group-hover:text-slate-400 transition-colors">
                        <strong className="block mb-1 text-slate-400">Playbook:</strong>
                        {squad.action}
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* Strategy Consolidated Grid */}
    <div className="bg-white/5 border border-white/5 rounded-3xl p-8 mb-8">
        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
            <Zap className="text-yellow-500" /> Why This Model Wins
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
                <h5 className="text-white font-bold text-sm mb-2">Accelerated ROI</h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Recapturing 3 months of lost time drives <strong>25% faster ROI</strong> on the investment period.
                </p>
            </div>
            <div>
                <h5 className="text-white font-bold text-sm mb-2">Cost Efficiency</h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Fixed prices and no discovery waste result in <strong>30-40% savings</strong> vs traditional firms.
                </p>
            </div>
            <div>
                <h5 className="text-white font-bold text-sm mb-2">Elite Talent</h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Squads composed of ex-MBB, ex-Big 4, and operators with 15+ years experience.
                </p>
            </div>
            <div>
                <h5 className="text-white font-bold text-sm mb-2">Scalable Consistency</h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                    PE firms can deploy the same playbooks across 10-20 portfolio companies systematically.
                </p>
            </div>
        </div>
    </div>

    {/* Expanded TechFlow Example */}
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="p-8 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
                        Concept Illustration
                    </div>
                    <h3 className="text-2xl font-bold text-white">The Revenue Acceleration Squad</h3>
                    <p className="text-slate-400 mt-2">Deploying the model in a real-world PE scenario.</p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-black text-white">€65K</div>
                    <div className="text-xs text-slate-500 uppercase font-bold">Fixed Price Engagement</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h4 className="text-white font-bold text-sm mb-4 border-b border-white/5 pb-2">Scenario: "TechFlow" Acquisition</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            A PE firm acquires "TechFlow," a €15M B2B SaaS company. Strong product, but converting at only <strong>12%</strong> (Industry Avg: 22%).
                        </p>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex gap-2"><span className="text-slate-600">►</span> <strong>Objective:</strong> Fix weak sales execution immediately.</li>
                            <li className="flex gap-2"><span className="text-slate-600">►</span> <strong>Timing:</strong> Squad deploys on Day 1 of close.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">Squad Composition (The "Special Forces" Team)</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4 bg-slate-900 p-3 rounded-lg border border-white/5">
                                <div className="w-8 h-8 rounded bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-xs">01</div>
                                <div>
                                    <div className="text-white font-bold text-sm">VP Sales Consultant</div>
                                    <div className="text-slate-500 text-xs">Ex-SaaS leader, 15+ years exp.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-slate-900 p-3 rounded-lg border border-white/5">
                                <div className="w-8 h-8 rounded bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-xs">02</div>
                                <div>
                                    <div className="text-white font-bold text-sm">Sales Ops Specialist</div>
                                    <div className="text-slate-500 text-xs">CRM architecture, process metrics.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-slate-900 p-3 rounded-lg border border-white/5">
                                <div className="w-8 h-8 rounded bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-xs">03</div>
                                <div>
                                    <div className="text-white font-bold text-sm">Account Executive Coach</div>
                                    <div className="text-slate-500 text-xs">Field training & shadow calls.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-6">The 100-Day Playbook Execution</h4>
                    <div className="relative border-l border-white/10 ml-3 space-y-8">
                        <div className="relative pl-8">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-700 border border-slate-900"></div>
                            <h5 className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Days 1-14</h5>
                            <strong className="text-white block text-sm mb-1">Audit & Analysis</strong>
                            <p className="text-slate-400 text-xs">Sales process audit, pipeline analysis, win/loss review.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-600 border border-slate-900"></div>
                            <h5 className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Days 15-30</h5>
                            <strong className="text-white block text-sm mb-1">Design Methodology</strong>
                            <p className="text-slate-400 text-xs">Create new sales methodology, comp plan, and CRM structure.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-500 border border-slate-900"></div>
                            <h5 className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-1">Days 31-60</h5>
                            <strong className="text-white block text-sm mb-1">Training & Coaching</strong>
                            <p className="text-slate-400 text-xs">Train sales team, shadow live calls, implement coaching.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-green-500 border border-slate-900"></div>
                            <h5 className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Days 61-100</h5>
                            <strong className="text-white block text-sm mb-1">Handoff</strong>
                            <p className="text-slate-400 text-xs">Hire permanent VP Sales, optimize, and transition ownership.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-green-900/20 p-4 rounded-xl border border-green-500/20 flex items-center gap-4">
                        <div className="p-3 bg-green-500/20 rounded-full text-green-400">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">The Outcome</div>
                            <div className="text-slate-400 text-xs">
                                Conversion hits <strong>19%</strong>. Revenue run-rate <strong>+€2M</strong> (to €17M). Permanent leader hired.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
);

const SprintsContent = () => {
    return (
        <div className="animate-fade-in space-y-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-bold mb-6">
                            <Zap size={14} /> INITIATIVE 2
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Consultport Sprints</h3>
                        <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light">
                            Fixed-price, fixed-scope, time-bound consulting packages. Low-risk "Trojan Horses" designed to build trust and convert to larger engagements.
                        </p>
                        
                        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                            <h4 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-3">The Psychological Barrier</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Mid-sized companies fear the "blank check" nature of consulting. They fear paying huge sums for just "slides" and uncertainty. This paralyzes decision-making until problems become crises. Sprints remove this fear completely by defining scope, price, and outcome upfront.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h4 className="text-white font-bold mb-2">Productized Certainty</h4>
                         <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group hover:bg-white/10 transition-colors">
                                <div className="bg-yellow-500/20 p-3 rounded-lg text-yellow-500 font-bold group-hover:scale-110 transition-transform">€</div>
                                <div>
                                    <div className="text-white font-bold">Price Certainty</div>
                                    <div className="text-slate-400 text-xs">Fixed cost fits departmental budgets. No surprises.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group hover:bg-white/10 transition-colors">
                                <div className="bg-yellow-500/20 p-3 rounded-lg text-yellow-500 font-bold group-hover:scale-110 transition-transform">⏱</div>
                                <div>
                                    <div className="text-white font-bold">Time Certainty</div>
                                    <div className="text-slate-400 text-xs">Fixed 2-3 week timeline. Results delivered fast.</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 group hover:bg-white/10 transition-colors">
                                <div className="bg-yellow-500/20 p-3 rounded-lg text-yellow-500 font-bold group-hover:scale-110 transition-transform">🎯</div>
                                <div>
                                    <div className="text-white font-bold">Outcome Certainty</div>
                                    <div className="text-slate-400 text-xs">Defined deliverables (audits, roadmaps) proven upfront.</div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Strategic Rationale: Why It Works */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        For Clients: Risk Removal
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Check className="text-green-500 mt-1 shrink-0" size={16} />
                            <div>
                                <strong className="text-slate-300 text-sm block">Fast Approval</strong>
                                <span className="text-slate-500 text-xs">€12-18K typically falls within departmental budget authority, bypassing complex procurement.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-green-500 mt-1 shrink-0" size={16} />
                            <div>
                                <strong className="text-slate-300 text-sm block">Proof of Value</strong>
                                <span className="text-slate-500 text-xs">They see elite consultant quality firsthand before making any large commitment.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Check className="text-green-500 mt-1 shrink-0" size={16} />
                            <div>
                                <strong className="text-slate-300 text-sm block">No Long-Term Obligation</strong>
                                <span className="text-slate-500 text-xs">Can walk away after the sprint if not satisfied, making it a "no-brainer" decision.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
                     <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        For Consultport: Conversion Engine
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <Zap className="text-yellow-500 mt-1 shrink-0" size={16} />
                            <div>
                                <strong className="text-slate-300 text-sm block">Volume Play</strong>
                                <span className="text-slate-500 text-xs">Lower price points allow for higher velocity sales and faster customer acquisition.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Zap className="text-yellow-500 mt-1 shrink-0" size={16} />
                            <div>
                                <strong className="text-slate-300 text-sm block">Upsell Conversion</strong>
                                <span className="text-slate-500 text-xs">40% of sprints convert to 3-4x larger projects once trust is established.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <Zap className="text-yellow-500 mt-1 shrink-0" size={16} />
                            <div>
                                <strong className="text-slate-300 text-sm block">Standardization</strong>
                                <span className="text-slate-500 text-xs">Fixed packages reduce sales cycle complexity and scoping effort significantly.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* The 3 Sprints */}
            <div className="grid lg:grid-cols-3 gap-6">
                {[
                    { 
                        title: "Digital Readiness Assessment", 
                        price: "€12K", 
                        time: "2 Weeks", 
                        focus: "Identifying digital gaps",
                        deliverables: "Tech stack audit, digital maturity scorecard, prioritized roadmap with ROI estimates."
                    },
                    { 
                        title: "Operational Efficiency Quick Wins", 
                        price: "€18K", 
                        time: "3 Weeks", 
                        focus: "Immediate cost reduction",
                        deliverables: "Process mapping, identification of 10-15 efficiency opportunities, 90-day plan."
                    },
                    { 
                        title: "Go-to-Market Strategy Sprint", 
                        price: "€15K", 
                        time: "2 Weeks", 
                        focus: "Minimizing entry risk",
                        deliverables: "Market/competitor analysis, customer segmentation, launch validation plan."
                    }
                ].map((tier, i) => (
                    <div key={i} className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs font-bold border border-white/10">{tier.time}</div>
                            <div className="text-2xl font-black text-yellow-400">{tier.price}</div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 min-h-[3.5rem] flex items-center">{tier.title}</h4>
                        <p className="text-slate-400 text-sm mb-6 italic">Focus: {tier.focus}</p>
                        <div className="pt-6 border-t border-white/10 mt-auto">
                            <span className="text-xs text-slate-500 uppercase font-bold mb-2 block">Defined Deliverables</span>
                            <p className="text-slate-300 text-sm group-hover:text-white transition-colors">{tier.deliverables}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Marketing Approach */}
                <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
                    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                        <Zap className="text-yellow-500" size={20} /> Marketing & Sales Approach
                    </h4>
                    <div className="space-y-6">
                         <div>
                             <h5 className="text-slate-300 font-bold text-sm mb-2">Positioning</h5>
                             <p className="text-slate-500 text-sm italic">"Test Drive Elite Consulting - Fixed Price, Fixed Scope, Zero Risk"</p>
                         </div>
                         <div>
                             <h5 className="text-slate-300 font-bold text-sm mb-2">Sales Channels</h5>
                             <ul className="space-y-2 text-slate-400 text-sm">
                                 <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div> Targeted LinkedIn: "Is your manufacturing falling behind digitally? Get a €12K Digital Readiness Assessment"</li>
                                 <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div> PE Referrals: "Your portfolio company needs help but hesitant to commit? Start with a sprint."</li>
                                 <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div> Landing Pages: Dedicated page per sprint with ROI calculator.</li>
                             </ul>
                         </div>
                    </div>
                </div>

                {/* Conversion Funnel */}
                <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5 flex flex-col">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <BarChart3 className="text-yellow-500" /> The Upsell Engine
                    </h4>
                    <p className="text-slate-400 text-sm mb-6">Sprints aren't just revenue; they are trust-builders. <strong>40% convert</strong> to larger projects within 90 days.</p>
                    
                    <div className="flex-grow flex flex-col justify-center space-y-4 mb-6">
                         <div className="bg-white/5 p-4 rounded-lg border-l-4 border-yellow-500/50">
                            <div className="flex justify-between text-sm text-white font-bold mb-1">
                                <span>Sprint Purchase</span>
                                <span>€12-18K</span>
                            </div>
                            <p className="text-slate-500 text-xs">Low commitment, easy approval. Client sees quality.</p>
                         </div>
                         <div className="flex justify-center text-slate-600"><ArrowRight className="rotate-90" size={20} /></div>
                         <div className="bg-white/5 p-4 rounded-lg border-l-4 border-green-500">
                            <div className="flex justify-between text-sm text-white font-bold mb-1">
                                <span>Project Conversion</span>
                                <span>€45-65K</span>
                            </div>
                            <p className="text-slate-500 text-xs">Trust established. Deliverables (e.g. Roadmap) naturally lead to implementation work.</p>
                         </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-white/10">
                         <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">Real World Example</h5>
                         <p className="text-slate-300 text-xs leading-relaxed">
                             "Müller GmbH" buys a <strong>€12K Digital Readiness Sprint</strong>. The audit reveals a process bottleneck costing €800K/yr. They immediately sign a <strong>€55K automation project</strong> to fix it.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SubscriptionContent = () => (
    <div className="animate-fade-in space-y-12">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-bold mb-6">
                    <Repeat size={14} /> INITIATIVE 3
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Consulting-as-a-Service</h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light">
                    Removing the friction of procurement by offering predictable, monthly access to flexible, on-demand expertise.
                </p>
                <div className="space-y-4">
                    <h4 className="text-green-400 font-bold text-sm uppercase tracking-widest">The Structural Problem</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Mid-sized companies have continuous challenges, but traditional procurement creates massive friction: 4-8 weeks for RFPs, new budget battles for every project, and repeated onboarding. This causes companies to delay hiring expertise until problems become critical.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="text-green-400" size={24} />
                        <h5 className="text-white font-bold text-lg">The Solution: Flexible Capacity</h5>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Companies subscribe to monthly capacity tiers, getting pre-allocated consultant days. This transforms consulting from a painful "event" into a seamless "utility".
                    </p>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-slate-400">
                            <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                            <span><strong>Budget Predictability:</strong> Fixed monthly OPEX cost.</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-400">
                            <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                            <span><strong>Zero Friction:</strong> Activate in 48hrs. No new contracts.</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-400">
                            <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                            <span><strong>Total Flexibility:</strong> Pivot specialization (e.g. Strategy → Ops) month-to-month.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
  
        <div className="grid lg:grid-cols-3 gap-6 items-start pt-8">
            {/* Tier 1 */}
            <div className="glass-card rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-slate-500">
                <h4 className="text-lg font-bold text-slate-300 mb-4 uppercase tracking-wide">Strategic Advisor</h4>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-white">€6K</span>
                    <span className="text-slate-500">/mo</span>
                </div>
                <p className="text-xs text-slate-500 mb-8 font-mono bg-white/5 inline-block px-2 py-1 rounded">€1,500/day equiv (25% discount)</p>
                
                <p className="text-sm text-slate-300 mb-6 min-h-[3rem]">For smaller mid-sized companies (500-650 emp) needing ongoing support.</p>
                <ul className="space-y-4 text-slate-300 text-sm border-t border-white/5 pt-6">
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0"/> 4 consultant days/mo</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0"/> Roll-over unused (max 8)</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0"/> Flexible specialist selection</li>
                </ul>
            </div>

             {/* Tier 2 */}
             <div className="glass-card rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-brand-500">
                <h4 className="text-lg font-bold text-brand-400 mb-4 uppercase tracking-wide">Transformation Partner</h4>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black text-white">€14K</span>
                    <span className="text-slate-500">/mo</span>
                </div>
                <p className="text-xs text-slate-500 mb-8 font-mono bg-brand-900/20 text-brand-300 inline-block px-2 py-1 rounded">€1,400/day equiv (30% discount)</p>
                
                <p className="text-sm text-slate-300 mb-6 min-h-[3rem]">For companies executing long-term change (Digital, Ops, Restructuring).</p>
                <ul className="space-y-4 text-slate-300 text-sm border-t border-white/5 pt-6">
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0"/> 10 consultant days/mo</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0"/> Dedicated Account Manager</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0"/> Quarterly roadmap health checks</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0"/> Max 15 days banked</li>
                </ul>
            </div>

             {/* Tier 3 */}
             <div className="glass-card rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-purple-500">
                <h4 className="text-lg font-bold text-purple-400 mb-4 uppercase tracking-wide">Enterprise Flex</h4>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-black text-white">€26K</span>
                    <span className="text-slate-500">/mo</span>
                </div>
                <p className="text-xs text-slate-500 mb-8 font-mono bg-white/5 inline-block px-2 py-1 rounded">€1,300/day equiv (35% discount)</p>
                
                <p className="text-sm text-slate-300 mb-6 min-h-[3rem]">For complex, multi-workstream initiatives at larger firms (850+ emp).</p>
                <ul className="space-y-4 text-slate-300 text-sm border-t border-white/5 pt-6">
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/> 20 consultant days/mo</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/> Up to 3 concurrent consultants</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/> Includes Fractional CSO</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0"/> Max 30 days banked</li>
                </ul>
            </div>
        </div>

        {/* Pricing Mechanics & Implementation */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
                <h4 className="text-white font-bold mb-4">Why Clients Pay Premium</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    While the day-rates (€1,300-€1,500) offer a 25-35% discount vs typical project rates (€2,000), clients aren't buying it just for the savings. They are paying for:
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex gap-2">1. <strong>Eliminating Friction:</strong> Saving €15-35K in internal procurement time per project.</li>
                    <li className="flex gap-2">2. <strong>Speed Advantage:</strong> Activating help in 48 hours when competitive timing matters.</li>
                    <li className="flex gap-2">3. <strong>Continuity:</strong> Consultants develop deep institutional knowledge, becoming more valuable every month.</li>
                </ul>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
                <h4 className="text-white font-bold mb-4">Implementation Strategy</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex gap-2"><Check className="text-green-500 shrink-0" size={16} /> <strong>Recruitment:</strong> Recruit consultants willing to commit partial availability in exchange for stable recurring revenue.</li>
                    <li className="flex gap-2"><Check className="text-green-500 shrink-0" size={16} /> <strong>Platform:</strong> Build capacity tracking dashboard (days used, rollover calculations) and automated matching.</li>
                    <li className="flex gap-2"><Check className="text-green-500 shrink-0" size={16} /> <strong>Sales:</strong> Target companies already using Consultport for easy upsell. Position as "Consulting Insurance".</li>
                </ul>
            </div>
        </div>

        {/* Business Model Strategic Value */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">Business Model Strategic Advantages</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6">
                    <h4 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4 border-b border-white/5 pb-4">For Clients</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-green-500 font-bold text-xs">1</div>
                            <div>
                                <span className="text-white font-bold block text-sm">Budget Predictability</span>
                                <span className="text-slate-400 text-xs">Fixed monthly cost replaces lumpy project fees.</span>
                            </div>
                        </li>
                         <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-green-500 font-bold text-xs">2</div>
                            <div>
                                <span className="text-white font-bold block text-sm">Relationship Depth</span>
                                <span className="text-slate-400 text-xs">Consultants build institutional knowledge over time.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-green-500 font-bold text-xs">3</div>
                            <div>
                                <span className="text-white font-bold block text-sm">Pivot Flexibility</span>
                                <span className="text-slate-400 text-xs">Avoids sunk cost of "wrong specialist" type.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="bg-brand-900/10 rounded-xl p-6 border border-brand-500/10">
                    <h4 className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4 border-b border-brand-500/10 pb-4">For Consultport</h4>
                    <ul className="space-y-4">
                         <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-brand-900/30 flex items-center justify-center text-brand-500 font-bold text-xs">1</div>
                            <div>
                                <span className="text-white font-bold block text-sm">Recurring Revenue</span>
                                <span className="text-slate-400 text-xs">Predictable MRR enables better forecasting.</span>
                            </div>
                        </li>
                         <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-brand-900/30 flex items-center justify-center text-brand-500 font-bold text-xs">2</div>
                            <div>
                                <span className="text-white font-bold block text-sm">Higher LTV</span>
                                <span className="text-slate-400 text-xs">Avg subscription 12-18mo vs 3-4mo projects.</span>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-brand-900/30 flex items-center justify-center text-brand-500 font-bold text-xs">3</div>
                            <div>
                                <span className="text-white font-bold block text-sm">Expansion Revenue</span>
                                <span className="text-slate-400 text-xs">Natural upsell path (Tier 1 → Tier 2) as needs grow.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const Initiatives = () => {
  const [activeTab, setActiveTab] = useState<'playbooks' | 'sprints' | 'subscription'>('playbooks');

  return (
    <section id="initiatives" className="py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Growth Initiatives</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Three revolutionary approaches to capturing the mid-market segment.
            </p>
        </div>

        <div className="flex justify-center mb-16">
            <div className="flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                <button 
                    onClick={() => setActiveTab('playbooks')}
                    className={`px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'playbooks' ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'text-slate-400 hover:text-white'}`}
                >
                    PE Playbooks
                </button>
                <button 
                    onClick={() => setActiveTab('sprints')}
                    className={`px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'sprints' ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20' : 'text-slate-400 hover:text-white'}`}
                >
                    Sprints
                </button>
                <button 
                    onClick={() => setActiveTab('subscription')}
                    className={`px-6 md:px-10 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'subscription' ? 'bg-green-600 text-white shadow-lg shadow-green-500/20' : 'text-slate-400 hover:text-white'}`}
                >
                    Subscription
                </button>
            </div>
        </div>

        <div className="min-h-[800px]">
            {activeTab === 'playbooks' && <PlaybooksContent />}
            {activeTab === 'sprints' && <SprintsContent />}
            {activeTab === 'subscription' && <SubscriptionContent />}
        </div>
    </section>
  );
};

export default Initiatives;