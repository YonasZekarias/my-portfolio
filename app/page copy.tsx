"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Instagram, Send, Download, 
  ExternalLink, Code2, Terminal, Cpu, Gamepad2, Mail, 
  Zap, Shield, Sword, ChevronRight, Hash
} from 'lucide-react';

// --- DATA: THE PLAYER PROFILE ---
const PLAYER = {
  name: "YONAS ZEKARIAS",
  level: 22, // Your Age or 'Level'
  class: "Full Stack Technomancer",
  guild: "ASTU Engineering",
  hp: "100/100",
  mana: "100/100 (Coffee)",
  bio: "Fifth-year Software Engineering student specializing in scalable architectures and digital warfare. Capable of crafting seamless frontend experiences and robust backend fortresses.",
  stats: [
    { name: "INT (Intelligence)", value: 90, color: "bg-blue-500" },
    { name: "AGI (Coding Speed)", value: 85, color: "bg-green-500" },
    { name: "STR (Backend Logic)", value: 80, color: "bg-red-500" },
    { name: "CHA (Communication)", value: 75, color: "bg-yellow-500" }
  ]
};

const ABILITIES = [
  { 
    title: "Frontend Sorcery", 
    icon: Zap, 
    desc: "Crafting reactive UIs with React, Next.js, and Tailwind CSS.",
    stack: ["React", "Next.js", "Framer Motion"]
  },
  { 
    title: "Backend Fortification", 
    icon: Shield, 
    desc: "Architecting secure APIs and microservices that scale.",
    stack: ["Django", "Express", "Go", "PostgreSQL"]
  },
  { 
    title: "System Integration", 
    icon: Terminal, 
    desc: "Connecting disjointed systems into a unified machine.",
    stack: ["Docker", "REST API", "Git"]
  }
];

const QUESTS = [
  {
    id: 1,
    title: "Project: ASTU Delivery",
    type: "Main Quest",
    desc: "A centralized food delivery platform for the campus community.",
    rewards: ["Next.js XP", "Real-time Tracking"],
    links: { github: "https://github.com/yourusername", demo: "" }
  },
  {
    id: 2,
    title: "Project: YExpress",
    type: "Side Quest",
    desc: "A comprehensive digital marketplace with secure auth & inventory.",
    rewards: ["E-Commerce XP", "Stripe Integration"],
    links: { github: "https://github.com/yourusername", demo: "" }
  },
  {
    id: 3,
    title: "System: Auction House",
    type: "Raid",
    desc: "High-performance backend for real-time bidding wars.",
    rewards: ["Microservices", "Go Concurrency"],
    links: { github: "https://github.com/yourusername", demo: "" }
  }
];

const XP_LOG = [
  {
    company: "Eaglion Tech Solution",
    role: "Intern Developer",
    date: "2025",
    desc: " deployed full-stack modules."
  },
  {
    company: "KST Tech Solution",
    role: "Intern Developer",
    date: "2024",
    desc: "Optimized database queries."
  }
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [bootText, setBootText] = useState<string[]>([]);

  // BOOT SEQUENCE EFFECT
  useEffect(() => {
    const lines = [
      "Initializing System...",
      "Loading Kernel modules...",
      "Mounting file system...",
      "Connecting to Neural Link...",
      "User: Yonas Zekarias detected...",
      "Access Granted."
    ];
    
    let delay = 0;
    lines.forEach((line, index) => {
      setTimeout(() => {
        setBootText(prev => [...prev, line]);
      }, delay);
      delay += Math.random() * 300 + 200;
    });

    setTimeout(() => setLoading(false), delay + 500);
  }, []);

  // RENDER LOADING SCREEN
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black text-green-500 font-mono p-8 flex flex-col justify-end z-50">
        <div className="scanlines" />
        {bootText.map((line, i) => (
          <p key={i} className="mb-2"> {line}</p>
        ))}
        <span className="animate-pulse">_</span>
      </div>
    );
  }

  // MAIN PORTFOLIO
  return (
    <div className="min-h-screen bg-background text-text font-mono selection:bg-secondary selection:text-black overflow-x-hidden">
      <div className="scanlines" />
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur border-b border-primary/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-primary flex items-center gap-2 glitch-hover cursor-pointer">
            <Gamepad2 /> YONAS_ZEKARIAS
          </div>
          <div className="hidden md:flex gap-8 text-sm text-muted">
             <a href="#stats" className="hover:text-secondary hover:underline decoration-wavy">STATS</a>
             <a href="#quests" className="hover:text-secondary hover:underline decoration-wavy">QUESTS</a>
             <a href="#logs" className="hover:text-secondary hover:underline decoration-wavy">LOGS</a>
          </div>
          <div className="px-3 py-1 border border-secondary text-secondary text-xs rounded animate-pulse">
            ONLINE
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-32">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
              className="text-secondary mb-2 tracking-widest"
            >
              // WELCOME PLAYER ONE
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-800">Yonas</span> <br/>
              <span className="text-white">Zekarias</span>
            </h1>
            <p className="text-muted text-lg mb-8 max-w-xl border-l-2 border-primary pl-4">
              {PLAYER.bio}
            </p>
            
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-primary text-black font-bold hover:bg-white transition-colors clip-path-polygon">
                START_GAME
              </a>
              <a href="/resume.pdf" className="px-8 py-3 border border-muted text-muted hover:border-white hover:text-white transition-colors">
                DOWNLOAD_DATA
              </a>
            </div>
          </div>

          {/* AVATAR / CHARACTER IMAGE */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-primary p-2 rounded-full md:rounded-none md:border-0">
             {/* Glowing Hexagon Background */}
             <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse" />
             <div className="relative w-full h-full bg-surface border-2 border-dashed border-secondary overflow-hidden">
                {/* PUT YOUR IMAGE HERE */}
                <Image 
                  src="/profile.jpg" 
                  alt="Avatar" 
                  fill 
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                
                {/* HUD Overlay on Image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur p-2 text-xs font-mono text-center border-t border-secondary">
                  LVL {PLAYER.level} • {PLAYER.class}
                </div>
             </div>
          </div>
        </section>

        {/* CHARACTER STATS (RPG SHEET) */}
        <section id="stats" className="mb-32">
          <div className="flex items-center gap-4 mb-8">
             <Hash className="text-primary" />
             <h2 className="text-3xl font-bold">CHARACTER STATS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-surface/30 p-8 rounded border border-white/10">
            
            {/* Bars */}
            <div className="space-y-6">
              {PLAYER.stats.map((stat) => (
                <div key={stat.name}>
                  <div className="flex justify-between mb-1 text-sm font-bold">
                    <span>{stat.name}</span>
                    <span className="text-secondary">{stat.value}/100</span>
                  </div>
                  <div className="h-4 bg-black rounded-full overflow-hidden border border-white/20">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${stat.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="border border-primary/50 p-6 bg-black/40 font-mono text-sm space-y-4">
               <p className="text-muted">_STATUS</p>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span>HP</span> <span className="text-green-400">{PLAYER.hp}</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span>MANA</span> <span className="text-blue-400">{PLAYER.mana}</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span>GUILD</span> <span className="text-yellow-400">{PLAYER.guild}</span>
               </div>
               <p className="text-xs text-muted pt-4">
                 `{'>'}` Player capable of prolonged coding sessions.<br/>
                 `{'>'}` Weakness: Slow internet connection.
               </p>
            </div>
          </div>
        </section>

        {/* SKILL TREE (SERVICES) */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
             <Zap className="text-primary" />
             <h2 className="text-3xl font-bold">SKILL TREE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABILITIES.map((ability, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-surface border-l-4 border-primary p-6 hover:bg-white/5 transition-colors"
              >
                <ability.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">{ability.title}</h3>
                <p className="text-muted text-sm mb-4">{ability.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ability.stack.map(tech => (
                    <span key={tech} className="text-xs bg-black px-2 py-1 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUESTS (PROJECTS) */}
        <section id="quests" className="mb-32">
          <div className="flex items-center gap-4 mb-8">
             <Sword className="text-primary" />
             <h2 className="text-3xl font-bold">ACTIVE QUESTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUESTS.map((quest, i) => (
              <div key={i} className="group relative bg-black border border-white/20 overflow-hidden">
                {/* Holographic Header */}
                <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                  <span className="text-xs text-secondary font-bold uppercase">{quest.type}</span>
                  <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-red-500" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500" />
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{quest.title}</h3>
                  <p className="text-muted text-sm mb-6">{quest.desc}</p>
                  
                  {/* Rewards/Stack */}
                  <div className="mb-6 space-y-2">
                    <p className="text-xs text-white/50 uppercase">Rewards (Tech):</p>
                    <div className="flex flex-wrap gap-2">
                      {quest.rewards.map(r => (
                        <span key={r} className="text-xs text-secondary">[ {r} ]</span>
                      ))}
                    </div>
                  </div>

                  <a href={quest.links.github} className="block w-full text-center py-2 border border-primary text-primary hover:bg-primary hover:text-black font-bold transition-all uppercase text-sm">
                    View Source
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOGS (EXPERIENCE) */}
        <section id="logs" className="mb-32">
           <div className="flex items-center gap-4 mb-8">
             <Terminal className="text-primary" />
             <h2 className="text-3xl font-bold">ADVENTURE LOGS</h2>
          </div>
          <div className="border-l-2 border-white/10 ml-4 space-y-12">
            {XP_LOG.map((log, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline Node */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-secondary rounded-full" />
                
                <h4 className="text-xl font-bold">{log.company}</h4>
                <p className="text-secondary text-sm font-mono mb-2">{log.date} // {log.role}</p>
                <p className="text-muted max-w-lg">{log.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <section id="contact" className="border-t border-white/10 pt-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">GAME OVER?</h2>
              <p className="text-muted">Ready to start a new game Plus?</p>
            </div>
            <a 
              href="mailto:yonas@example.com"
              className="px-10 py-4 bg-secondary text-black font-black text-xl hover:scale-105 transition-transform skew-x-[-10deg]"
            >
              SEND_MESSAGE
            </a>
          </div>
          
          <div className="flex gap-6 mt-12 justify-center text-muted">
            <Github className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
          </div>
        </section>

      </main>
    </div>
  );
}