import React, { useState, useEffect } from 'react';
import { Lock, Unlock, ArrowRight, AlertCircle } from 'lucide-react';

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'plshireme') {
      setUnlocked(true);
      setTimeout(() => {
        onUnlock();
      }, 800); // Wait for animation
    } else {
      setError(true);
      setIsShaking(true);
      setPassword('');
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-700 ${unlocked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background abstract decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-300 ${isShaking ? 'translate-x-[-10px]' : 'translate-x-0'}`}>
        <div className="flex flex-col items-center mb-8">
          <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-colors duration-500 ${unlocked ? 'bg-green-500 text-white' : 'bg-brand-500 text-white'}`}>
            {unlocked ? <Unlock size={32} /> : <Lock size={32} />}
          </div>
          <h2 className="text-3xl font-bold text-white text-center">Protected Strategy</h2>
          <p className="text-slate-400 mt-2 text-center">Enter access key to view case study</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => { setError(false); setPassword(e.target.value); }}
              className={`w-full px-6 py-4 bg-slate-900/50 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all text-center text-lg tracking-widest ${error ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-brand-500 focus:ring-brand-500/50'}`}
              placeholder="•••••••••"
              autoFocus
            />
            {error && (
              <div className="absolute -bottom-6 left-0 w-full flex items-center justify-center text-red-400 text-sm animate-fade-in">
                <AlertCircle size={14} className="mr-1" /> Incorrect password
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full group py-4 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-brand-500/20"
          >
            {unlocked ? 'Access Granted' : 'Unlock Access'}
            {!unlocked && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;