import React from 'react';
import { Check } from 'lucide-react';

const Conclusion = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-brand-950 to-slate-950 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">The Bottom Line</h2>
        
        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            In <span className="text-brand-400 font-bold">3 months</span> and <span className="text-brand-400 font-bold">€24K</span>, we'll know if performance-based pricing can transform Consultport's positioning and create a lasting competitive advantage.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 text-left">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-brand-500 rounded-full p-1"><Check size={16} className="text-white" /></span>
                Final Recommendation
            </h3>
            
            <div className="space-y-6">
                <p className="text-slate-300 text-lg">Launch Results-Based Pricing pilot immediately with these priorities:</p>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="font-bold text-brand-500">1.</span>
                        <span className="text-slate-300"><strong>Month 1-3:</strong> Execute 3-5 project pilot (€24K investment)</span>
                    </li>
                    <li className="flex gap-4">
                        <span className="font-bold text-brand-500">2.</span>
                        <span className="text-slate-300"><strong>Month 3:</strong> Go/No-Go decision based on success criteria</span>
                    </li>
                    <li className="flex gap-4">
                        <span className="font-bold text-brand-500">3.</span>
                        <span className="text-slate-300"><strong>Month 4-6:</strong> Scale to 6-10 projects if successful</span>
                    </li>
                    <li className="flex gap-4">
                        <span className="font-bold text-brand-500">4.</span>
                        <span className="text-slate-300"><strong>Month 7-12:</strong> Full rollout (12-14 projects)</span>
                    </li>
                </ul>
            </div>
        </div>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            This approach de-risks the investment, proves the concept with real data, and positions Consultport as the category leader: <br/>
            <span className="text-white font-bold block mt-4 text-2xl">"The platform where consultants bet on their results."</span>
        </p>

        <div className="inline-block px-8 py-4 rounded-full bg-brand-600 text-white font-bold text-lg shadow-lg shadow-brand-600/25">
            Let's be first. Let's be bold.
        </div>
      </div>
    </section>
  );
};

export default Conclusion;