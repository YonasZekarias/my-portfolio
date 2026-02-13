"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Server, Terminal, Layers, Zap, Database, CheckCircle, Gamepad2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const RPG_SKILLS = [
  { name: "React.js", icon: <Code2 className="w-8 h-8 text-cyan-400" />, stats: { int: 95, spd: 80 }, desc: "Legendary UI Library.", ability: "Passive: Virtual DOM Velocity" },
  { name: "Next.js", icon: <Globe className="w-8 h-8 text-white" />, stats: { int: 90, spd: 100 }, desc: "The Meta Framework.", ability: "Active: Server-Side Rendering" },
  { name: "Node.js", icon: <Server className="w-8 h-8 text-green-500" />, stats: { int: 85, str: 75 }, desc: "Backend Runtime.", ability: "Passive: Non-Blocking I/O" },
  { name: "Python", icon: <Terminal className="w-8 h-8 text-yellow-400" />, stats: { int: 90, wis: 85 }, desc: "The Data Serpent.", ability: "Active: Script Automation" },
  { name: "Docker", icon: <Layers className="w-8 h-8 text-blue-500" />, stats: { def: 90, str: 60 }, desc: "Containerization Unit.", ability: "Passive: Isolated Environments" },
  { name: "Go Lang", icon: <Zap className="w-8 h-8 text-cyan-200" />, stats: { spd: 100, str: 80 }, desc: "Google's Speedster.", ability: "Active: Goroutine Concurrency" },
  { name: "Postgres", icon: <Database className="w-8 h-8 text-indigo-400" />, stats: { wis: 95, def: 85 }, desc: "Relational Vault.", ability: "Passive: ACID Compliance" },
  { name: "AWS", icon: <CheckCircle className="w-8 h-8 text-orange-400" />, stats: { wis: 80, int: 70 }, desc: "Cloud Infrastructure.", ability: "Active: Elastic Scaling" },
];

export const Skills = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 px-6 bg-background border-t border-white/5 relative cursor-none">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="flex items-end gap-4 mb-12">
            <div className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-blue-400"><Gamepad2 className="w-8 h-8" /></div>
            <div><h2 className="text-4xl font-bold text-white">Equipment & Stats</h2><p className="text-gray-400 text-sm font-mono">Current Build: Full Stack DPS</p></div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Inventory Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-2 bg-black/40 p-2 rounded-lg border border-white/10 shadow-2xl backdrop-blur-sm"
          >
            {RPG_SKILLS.map((skill, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onHoverStart={() => setSelected(i)} 
                onClick={() => setSelected(i)} 
                whileHover={{ scale: 1.05 }} 
                className={`w-16 h-16 md:w-20 md:h-20 rounded border flex items-center justify-center cursor-pointer relative transform-gpu will-change-transform ${selected === i ? 'bg-white/10 border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/30'}`}
              >
                <div className="transform transition-transform duration-200 hover:scale-110">{skill.icon}</div>
                <div className="absolute bottom-1 right-1 text-[8px] font-mono bg-black/80 px-1 rounded text-white/70">LVL 99</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Details Panel */}
          <RevealOnScroll className="flex-1 w-full min-h-62.5 bg-linear-to-br from-[#111] to-background border-2 border-white/10 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <AnimatePresence mode="wait">
              {selected !== null ? (
                <motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-4">
                  <div className="flex justify-between items-start border-b border-white/10 pb-4">
                    <div><h3 className="text-2xl font-bold text-white tracking-wide">{RPG_SKILLS[selected].name}</h3><span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Rare Item</span></div>
                    {RPG_SKILLS[selected].icon}
                  </div>
                  <p className="text-gray-400 text-sm italic">"{RPG_SKILLS[selected].desc}"</p>
                  <div className="space-y-2 mt-4">
                    {Object.entries(RPG_SKILLS[selected].stats).map(([stat, val]) => (
                      <div key={stat} className="flex items-center gap-3 text-xs font-mono">
                        <span className="w-8 uppercase text-white/50">{stat}</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} transition={{ duration: 0.5, delay: 0.1 }} className={`h-full ${stat === 'int' ? 'bg-blue-500' : stat === 'spd' ? 'bg-yellow-500' : stat === 'str' ? 'bg-red-500' : 'bg-green-500'}`} />
                        </div>
                        <span className="text-white">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10"><p className="text-xs text-green-400 font-mono"><span className="text-white font-bold">Bonus:</span> {RPG_SKILLS[selected].ability}</p></div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col items-center justify-center text-white/20 space-y-2"><Gamepad2 className="w-12 h-12" /><p className="font-mono text-xs uppercase tracking-widest">Select an Item</p></motion.div>
              )}
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};