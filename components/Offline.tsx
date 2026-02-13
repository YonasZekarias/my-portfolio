"use client";
import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Tv, Mic2, Film } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

// --- SUB-COMPONENT: FOOTBALL ---
const FootballGame = memo(() => {
  const [kicked, setKicked] = useState(false);
  const [team, setTeam] = useState<'madrid' | 'chelsea'>('madrid');
  
  const kickBall = (e: React.MouseEvent) => { 
    e.stopPropagation();
    if (!kicked) { setKicked(true); setTimeout(() => setKicked(false), 1500); }
  };

  return (
    <div className="flex flex-col gap-3 h-full justify-end" onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase">
        <span>Kit:</span>
        <div className="flex gap-2">
          <button onClick={() => setTeam('madrid')} className={`px-2 py-1 rounded border transition-colors ${team === 'madrid' ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white'}`}>RM</button>
          <button onClick={() => setTeam('chelsea')} className={`px-2 py-1 rounded border transition-colors ${team === 'chelsea' ? 'bg-blue-600 text-white border-blue-600' : 'border-white/10 hover:border-blue-600'}`}>CFC</button>
        </div>
      </div>
      <div className="relative h-32 bg-green-900/20 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center cursor-pointer group select-none transform-gpu" onClick={kickBall}>
        <div className="absolute inset-0 flex justify-center"><div className="w-0.5 h-full bg-white/10" /></div>
        <div className="absolute inset-0 flex items-center"><div className="w-full h-0.5 bg-white/10" /></div>
        <div className="absolute w-16 h-16 border-2 border-white/10 rounded-full" />
        <motion.div 
          animate={kicked ? { x: 200, y: -50, rotate: 720, scale: 0.5, opacity: 0 } : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 border-black/10 shadow-lg transform-gpu ${team === 'madrid' ? 'bg-white' : 'bg-blue-600'}`}
        >
          <div className={`text-[8px] font-bold ${team === 'madrid' ? 'text-black' : 'text-white'}`}>{team === 'madrid' ? 'RM' : 'CFC'}</div>
        </motion.div>
        <AnimatePresence>
          {kicked && <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1.5, opacity: 1 }} exit={{ opacity: 0 }} className="absolute z-20 font-black text-3xl text-white italic -skew-x-12">GOLAZO!</motion.div>}
        </AnimatePresence>
      </div>
    </div>
  );
});
FootballGame.displayName = 'FootballGame';

// --- SUB-COMPONENT: GoT CARD ---
const GotEpicCard = memo(() => {
  const [house, setHouse] = useState<"stark" | "targaryen">("stark");
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 15 }).map((_, i) => ({
      id: i, left: Math.random() * 100, delay: Math.random() * 2, duration: 3 + Math.random() * 3
    })));
  }, []);

  return (
    <div className={`relative h-100 glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 transform-gpu border ${house === "stark" ? "border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.1)]" : "border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.1)]"}`}>
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-cyan-950/20 ${house === 'stark' ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-orange-950/20 ${house === 'targaryen' ? 'opacity-100' : 'opacity-0'}`} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {house === "stark" && particles.map((p) => (
          <motion.div key={`snow-${p.id}`} initial={{ y: -10, opacity: 0 }} animate={{ y: 400, opacity: [0, 1, 0] }} transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }} className="absolute w-1 h-1 bg-white rounded-full top-0" style={{ left: `${p.left}%` }} />
        ))}
        {house === "targaryen" && particles.map((p) => (
          <motion.div key={`fire-${p.id}`} initial={{ y: 400, opacity: 0, scale: 1 }} animate={{ y: 0, opacity: [0, 0.8, 0], scale: 0 }} transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeOut" }} className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" style={{ left: `${p.left}%`, bottom: 0 }} />
        ))}
      </div>
      <div className="relative z-30 p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2"><Film className={`w-5 h-5 transition-colors duration-300 ${house === "stark" ? "text-cyan-300" : "text-orange-400"}`} /><span className="font-bold text-white tracking-widest text-sm uppercase">Westeros</span></div>
          <button onClick={() => setHouse(house === "stark" ? "targaryen" : "stark")} className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all active:scale-95"><span className={`text-[10px] font-bold uppercase transition-colors duration-300 ${house === "stark" ? "text-cyan-300" : "text-gray-400"}`}>Ice</span><div className="w-8 h-4 bg-white/10 rounded-full relative"><div className={`absolute top-0.5 bottom-0.5 w-3 rounded-full shadow-lg transition-all duration-300 ${house === "stark" ? "left-1 bg-cyan-400" : "right-1 bg-orange-500"}`} /></div><span className={`text-[10px] font-bold uppercase transition-colors duration-300 ${house === "targaryen" ? "text-orange-400" : "text-gray-400"}`}>Fire</span></button>
        </div>
        <div className="text-center h-16 flex items-center justify-center"><h3 key={house} className={`text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${house === "stark" ? "opacity-100 text-cyan-100 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" : "opacity-100 text-orange-100 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"}`}>{house === "stark" ? "Winter is Coming" : "Fire and Blood"}</h3></div>
        <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5"><p className="text-xs text-gray-400 leading-relaxed">I love complex narratives. Like GoT, great software requires navigating chaos, politics, and surviving deployment.</p></div>
      </div>
    </div>
  );
});
GotEpicCard.displayName = 'GotEpicCard';

export const Offline = () => {
  return (
    <section id="offline" className="py-32 bg-[#0B1121] border-t border-white/5 relative z-20 cursor-none">
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-slate-900 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div><h2 className="text-4xl font-bold text-white mb-4">Offline Mode</h2><p className="text-gray-400 max-w-md">When the terminal closes. Exploring narratives, strategy, and lyrical flow.</p></div>
            <div className="text-cyan-400 font-mono text-sm mt-4 md:mt-0">System Idle // Personal</div>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div className="glass-card p-6 rounded-2xl flex flex-col gap-4 bg-white/3 border border-white/10 hover:-translate-y-1 transition-transform duration-300 transform-gpu">
            <div className="flex items-center gap-3 text-cyan-400 mb-2"><Gamepad2 className="w-6 h-6" /><span className="font-bold">The Pitch</span></div>
            <p className="text-gray-400 text-sm">Strategic gaming in <strong className="text-white">FC</strong>. Loyalty to the Kings of Europe and Pride of London.</p>
            <div className="mt-auto pt-2"><FootballGame /></div>
          </motion.div>
          
          <div className="lg:row-span-2"><GotEpicCard /></div>
          
          <motion.div className="glass-card p-6 rounded-2xl flex flex-col gap-4 bg-white/3 border border-white/10 hover:-translate-y-1 transition-transform duration-300 transform-gpu">
            <div className="flex items-center gap-3 text-cyan-400 mb-2"><Tv className="w-6 h-6" /><span className="font-bold">Comfort Zone</span></div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center justify-between"><span className="text-white font-bold text-sm">Friends</span><div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /><div className="w-2 h-2 rounded-full bg-blue-500" /><div className="w-2 h-2 rounded-full bg-yellow-500" /></div></div>
            <div className="mt-2 text-xs text-gray-400">Currently re-watching Season 4</div>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-2xl flex flex-col gap-4 lg:col-span-2 bg-white/3 border border-white/10 hover:-translate-y-1 transition-transform duration-300 transform-gpu">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-cyan-400"><Mic2 className="w-6 h-6" /><span className="font-bold">Lyrical Precision</span></div>
              <div className="flex items-end gap-1 h-6">
                {[1,2,3,4].map((i) => <motion.div key={i} animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear", delay: i * 0.1 }} className="w-1 bg-cyan-400 rounded" />)}
              </div>
            </div>
            <p className="text-gray-400 text-sm">Upbeat Hip-Hop is the engine of my workflow. A massive fan of <strong>Eminem</strong>—appreciating the complex rhyme schemes.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};