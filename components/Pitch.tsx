import React from 'react';
import { Trophy, DollarSign, LineChart, Lock, Shield, Database, Zap, CheckCircle, AlertTriangle, TrendingUp, GitMerge, Server, Cpu, FileCheck, ArrowDown } from 'lucide-react';

const Pitch = () => {
  return (
    <section id="pitch" className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold tracking-widest uppercase mb-6">
                        Founder Pitch
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Results-Based Pricing</h2>
                    <p className="text-xl text-slate-400 font-light">Transforming "Hours Billed" to "Value Delivered"</p>
                </div>
                <div className="md:text-right mt-8 md:mt-0 max-w-lg">
                    <p className="text-lg text-slate-400 leading-relaxed">
                        A pilot to align incentives completely with client success, solving the mid-market trust deficit.
                    </p>
                </div>
            </div>

            <blockquote className="relative text-3xl md:text-5xl font-serif font-medium text-center text-slate-200 my-24 max-w-5xl mx-auto leading-tight">
                <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-9xl text-white/5 font-sans font-black">"</span>
                We can be <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">"The platform where consultants bet on their results."</span><br/> That's not a feature—it's an identity.
            </blockquote>

            {/* The Context: Problem/Solution */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-red-900/10 border border-red-500/10 p-8 rounded-3xl">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                        <AlertTriangle className="text-red-400" /> The Trust Deficit
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Mid-sized companies face a profound trust deficit with consulting. Every CFO has war stories: paid €75K for a beautiful strategy deck that sits on a shelf, hired an "expert" who delivered recommendations the team already knew, or watched consultants extend projects indefinitely to maximize billable hours.
                    </p>
                    <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/20">
                        <strong className="text-red-300 block mb-1 uppercase text-xs tracking-wider">Core Issue</strong>
                        <p className="text-slate-300 text-sm">Incentive misalignment. Traditional time-based billing rewards consultants for hours worked, not results achieved. This rewards inefficiency.</p>
                    </div>
                </div>

                <div className="bg-green-900/10 border border-green-500/10 p-8 rounded-3xl">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                        <CheckCircle className="text-green-400" /> The Concept
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        Launch a pilot where consultants are compensated based on <strong>verified business outcomes</strong> rather than time spent. Clients pay a reduced base fee covering costs, plus a success-based bonus tied to measurable results (cost savings, revenue growth, operational improvements).
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-green-500/30 pl-4">
                        Because this mechanism relies on indisputable data, the program is strictly limited to quantitative initiatives where success can be easily attributed to the consultant.
                    </p>
                    <div className="bg-green-900/20 p-4 rounded-xl border border-green-500/20">
                         <strong className="text-green-300 block mb-1 uppercase text-xs tracking-wider">The Shift</strong>
                        <p className="text-slate-300 text-sm">From "What if this doesn't work?" to "When this works, I'll be thrilled to pay you."</p>
                    </div>
                </div>
            </div>

            {/* Technical Execution Engine */}
            <div className="mb-32">
                 <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">The Execution Engine</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">How we operationalize trust using our platform as the "Truth Bridge."</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* The Process */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="bg-dark-card border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-500/30 transition-all">
                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GitMerge size={60} />
                             </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-brand-500/20 p-3 rounded-lg text-brand-400 font-bold">01</div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2">Protocol: The Tripartite Lock</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        We replace vague "scope of work" documents with a <strong>Digital Performance Protocol</strong>. Targets are not arbitrary; they use a checks-and-balances system:
                                    </p>
                                    <ul className="grid sm:grid-cols-3 gap-4 text-xs">
                                        <li className="bg-white/5 p-3 rounded border border-white/5">
                                            <strong className="text-white block mb-1">Client</strong>
                                            <span className="text-slate-400">Sets the Business Goal (e.g. "Reduce Logistics Cost").</span>
                                        </li>
                                        <li className="bg-white/5 p-3 rounded border border-white/5">
                                            <strong className="text-white block mb-1">Consultant</strong>
                                            <span className="text-slate-400">Validates Feasibility & Method.</span>
                                        </li>
                                        <li className="bg-brand-900/20 p-3 rounded border border-brand-500/20">
                                            <strong className="text-brand-400 block mb-1">Consultport</strong>
                                            <span className="text-slate-300">Defines the Verification Metric.</span>
                                        </li>
                                    </ul>
                                </div>
                             </div>
                        </div>

                        <div className="bg-dark-card border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Server size={60} />
                             </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400 font-bold">02</div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2">Platform: The Verification Layer</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        We expand the Consultport platform from "Matchmaking" to "Performance Tracking." This new module acts as a neutral arbiter.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-300 bg-black/40 px-3 py-2 rounded border border-white/10">
                                            <Cpu size={14} className="text-green-400" /> API Integration (Salesforce/ERP)
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-300 bg-black/40 px-3 py-2 rounded border border-white/10">
                                            <FileCheck size={14} className="text-green-400" /> Immutable Baseline Snapshots
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* The Algorithm Visual */}
                    <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-8 flex flex-col justify-center">
                        <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-6 text-center">The Payout Algorithm</h4>
                        
                        <div className="space-y-2 mb-8">
                            <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                                <span className="text-slate-400 text-sm">Reduced Base Fee</span>
                                <span className="text-white font-mono font-bold">€35,000</span>
                            </div>
                            <div className="flex justify-center text-slate-600">
                                <span className="text-xs">+</span>
                            </div>
                            <div className="bg-brand-500/10 p-4 rounded-lg border border-brand-500/20 relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-brand-300 text-sm font-bold">Performance Delta</span>
                                    <span className="text-brand-400 font-mono font-bold">€420,000</span>
                                </div>
                                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-brand-500 h-full w-[85%]"></div>
                                </div>
                                <div className="text-[10px] text-slate-500 mt-2 flex justify-between">
                                    <span>Baseline: €4.5M</span>
                                    <span>Result: €4.08M</span>
                                </div>
                            </div>
                            <div className="flex justify-center text-slate-600">
                                <span className="text-xs">×</span>
                            </div>
                            <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/5">
                                <span className="text-slate-400 text-sm">Success Share %</span>
                                <span className="text-white font-mono font-bold">12%</span>
                            </div>
                            <div className="flex justify-center text-slate-600">
                                <span className="text-xs">=</span>
                            </div>
                            <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                                <span className="text-green-300 text-sm font-bold">Total Payout</span>
                                <span className="text-white font-mono font-black text-xl">€85,400</span>
                            </div>
                        </div>
                        
                        <p className="text-center text-xs text-slate-500 italic">
                            *Payouts held in escrow by Consultport until verification gate clears.
                        </p>
                    </div>
                </div>
            </div>

            {/* Concept Illustration: Shared Risk & Reward */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950/30 border border-white/10 rounded-3xl p-8 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px]"></div>
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                    <span className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center text-xs font-black">EX</span>
                    Financial Scenario: Logistics Optimization
                </h3>

                <div className="grid lg:grid-cols-3 gap-12 relative z-10 items-center">
                    <div>
                         <h5 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">The Situation</h5>
                         <p className="text-white text-sm leading-relaxed">
                             A mid-sized logistics distributor spending <strong>€4.5M</strong> annually on logistics engages a consultant for a Cost Reduction Project.
                         </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                        <h5 className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">The Deal Structure</h5>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Base Fee (Reduced)</span>
                                <span className="text-white font-mono">€35,000</span>
                            </div>
                             <div className="flex justify-between text-sm">
                                <span className="text-slate-400">Success Bonus</span>
                                <span className="text-white font-mono">% of Year 1 Savings</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                         <h5 className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4">The Result</h5>
                         <div className="mb-4">
                             <div className="text-2xl font-black text-white">€420K</div>
                             <div className="text-xs text-slate-500">Verified Savings Achieved</div>
                         </div>
                         <div className="pt-4 border-t border-green-500/20">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-slate-300 font-bold">Total Fee Paid</span>
                                <span className="text-white font-mono">€85,000</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-300 font-bold">Client ROI</span>
                                <span className="text-green-400 font-mono font-bold">4.9x</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Pilot Categories */}
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center mb-10">Three Pilot Project Categories</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-32">
                {[
                    {
                        icon: <DollarSign size={24} />,
                        title: "Cost Reduction",
                        desc: "Procurement, logistics, or overhead (8-12 wks).",
                        pricing: "Reduced Base + % of Verified Year 1 Savings.",
                        safeguard: "Includes 'Cap' (max fee) and 'Floor' (min fee).",
                        color: "text-accent-400",
                        bg: "bg-accent-500/10",
                        border: "border-accent-500/20"
                    },
                    {
                        icon: <LineChart size={24} />,
                        title: "Revenue Growth",
                        desc: "GTM strategy for new territory entry (10-14 wks).",
                        pricing: "Reduced Base + % of Attributed Year 1 Revenue.",
                        safeguard: "Revenue verified via CRM data 12mo post-launch.",
                        color: "text-brand-400",
                        bg: "bg-brand-500/10",
                        border: "border-brand-500/20"
                    },
                    {
                        icon: <Trophy size={24} />,
                        title: "Ops Performance",
                        desc: "Output or utilization increase (10-12 wks).",
                        pricing: "Reduced Base + Bonus per sustained unit improvement.",
                        safeguard: "Calculated based on 3-month stabilization period.",
                        color: "text-purple-400",
                        bg: "bg-purple-500/10",
                        border: "border-purple-500/20"
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col h-full">
                        <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6 border ${item.border}`}>
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                        
                        <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
                             <div>
                                 <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Pricing Structure</span>
                                 <p className="text-xs text-slate-300">{item.pricing}</p>
                             </div>
                             <div>
                                 <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Safeguards</span>
                                 <p className="text-xs text-slate-300">{item.safeguard}</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* The Moat Section - Completely Redesigned */}
            <div className="mb-32">
                <div className="text-center mb-16">
                    <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">Competitive Defense</span>
                    <h3 className="text-4xl font-black text-white mb-6">The Unassailable Moat</h3>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Why this strategy builds a fortress that traditional firms cannot storm and gig platforms cannot climb.
                    </p>
                </div>

                {/* The Keystone: Data Advantage */}
                <div className="bg-gradient-to-br from-indigo-950/50 to-slate-950 border border-brand-500/30 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] group-hover:bg-brand-500/20 transition-all duration-700"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-bold mb-6">
                                <Database size={14} /> THE KEYSTONE ASSET
                            </div>
                            <h4 className="text-3xl font-bold text-white mb-4">The "Moneyball" Data Engine</h4>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                While competitors trade time, we trade truth. Every performance-based project feeds a proprietary <strong>"Win Probability Model"</strong>.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <strong className="text-white block">Pattern Recognition</strong>
                                        <p className="text-sm text-slate-400">We learn exactly which variables (Industry + Consultant DNA + Project Scope) predict success.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <strong className="text-white block">Risk Pricing Authority</strong>
                                        <p className="text-sm text-slate-400">After 100 projects, we don't guess outcome probability—we calculate it. We can tell a client: <em>"This initiative has an 82% success rate."</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visualizing the Cycle */}
                        <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10 relative">
                             <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-slate-400 text-xs uppercase">Input</span>
                                    <span className="text-white font-mono font-bold text-sm">50+ Pilot Outcomes</span>
                                </div>
                                <div className="flex justify-center text-brand-500"><ArrowDown size={20} /></div>
                                <div className="bg-brand-900/20 p-4 rounded-xl border border-brand-500/30 text-center">
                                    <span className="text-brand-300 text-xs uppercase font-bold tracking-widest block mb-2">Proprietary Algorithm</span>
                                    <span className="text-white font-bold">Predictive Risk Model</span>
                                </div>
                                 <div className="flex justify-center text-brand-500"><ArrowDown size={20} /></div>
                                 <div className="flex justify-between items-center bg-green-900/20 p-4 rounded-xl border border-green-500/30">
                                    <span className="text-green-400 text-xs uppercase">Output</span>
                                    <span className="text-white font-mono font-bold text-sm">Unbeatable Pricing Accuracy</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* The Structural Defenses (3 Columns) */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-dark-card border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
                        <Lock className="text-red-400 mb-6" size={32} />
                        <h4 className="text-xl font-bold text-white mb-3">The Innovator's Dilemma</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            <strong>Why McKinsey Can't Copy Us:</strong> Their model depends on guaranteed hourly billing to support massive partner overhead. Offering performance-based pricing would cannibalize their revenue and cause a partner revolt. They are structurally paralyzed.
                        </p>
                    </div>

                    <div className="bg-dark-card border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
                        <Shield className="text-green-400 mb-6" size={32} />
                        <h4 className="text-xl font-bold text-white mb-3">The Trust Barrier</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            <strong>Why Upwork Can't Copy Us:</strong> You cannot bet on business outcomes with unvetted freelancers. Results-based pricing requires deep vetting and a "neutral arbiter" infrastructure to verify results. Gig platforms lack this trust layer.
                        </p>
                    </div>

                    <div className="bg-dark-card border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
                        <Zap className="text-yellow-400 mb-6" size={32} />
                        <h4 className="text-xl font-bold text-white mb-3">First-Mover Velocity</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            <strong>The 18-Month Lead:</strong> Developing the contracts, recruitment protocols, and verification dashboards takes time. By the time a competitor attempts this, we will have 18 months of outcome data—a dataset they cannot buy, only build.
                        </p>
                    </div>
                </div>
            </div>

            {/* The Ask Proposal Card */}
            <div className="max-w-5xl mx-auto">
                <div className="relative bg-dark-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Top Strip */}
                    <div className="h-2 bg-gradient-to-r from-brand-500 to-accent-500"></div>
                    
                    <div className="grid lg:grid-cols-5">
                        {/* Left Content */}
                        <div className="lg:col-span-3 p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                            <h3 className="text-4xl font-black text-white mb-2">3-Month Pilot</h3>
                            <p className="text-slate-400 text-lg mb-8">Proposal for Launch</p>
                            
                            <div className="space-y-6 mb-10">
                                <p className="text-slate-300 leading-relaxed">
                                    Approval to launch a pilot program to prove model viability. Evaluation after Month 3. If targets are hit, we scale.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-400 text-sm">
                                        <CheckCircle size={16} className="text-brand-500" /> 3-5 Pilot Projects
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-400 text-sm">
                                        <CheckCircle size={16} className="text-brand-500" /> Break-even after 1-2 projects
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-400 text-sm">
                                        <CheckCircle size={16} className="text-brand-500" /> 3-4 Case Studies produced
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Timeline</div>
                                    <div className="text-white font-bold">90 Days</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Investment</div>
                                    <div className="text-white font-bold">€24,000</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">Outcome</div>
                                    <div className="text-white font-bold">Proof of Concept</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Breakdown */}
                        <div className="lg:col-span-2 bg-slate-900/50 p-10 md:p-12 flex flex-col justify-center">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Investment Breakdown</h4>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-300">Legal (Templates)</span>
                                    <span className="text-white font-mono">€5,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-300">Product (MVP)</span>
                                    <span className="text-white font-mono">€6,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-300">Operations (PM)</span>
                                    <span className="text-white font-mono">€10,000</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-300">Marketing</span>
                                    <span className="text-white font-mono">€3,000</span>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                <span className="text-brand-400 font-bold text-sm uppercase tracking-widest">Total Ask</span>
                                <span className="text-3xl font-black text-white">€24K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pitch;