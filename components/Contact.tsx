"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle, Mail, MapPin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    setFormState('sending'); 
    setTimeout(() => setFormState('success'), 2000); 
  };

  return (
    <section id="contact" className="py-40 bg-black border-t border-white/10 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0B1121] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16"><h2 className="text-5xl font-bold text-white mb-6">Initialize Handshake</h2><p className="text-gray-400">Ready to collaborate? Execute the protocol below.</p></div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="w-full max-w-4xl mx-auto bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative z-20">
            <div className="bg-white/5 p-3 flex items-center gap-4 border-b border-white/5"><div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/50" /><div className="w-3 h-3 rounded-full bg-yellow-500/50" /><div className="w-3 h-3 rounded-full bg-green-500/50" /></div><div className="text-xs font-mono text-gray-400 flex items-center gap-2"><Terminal className="w-3 h-3" /> contact@yonas.dev</div></div>
            <div className="p-8 md:p-12 font-mono text-sm">
              {formState === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-400 mb-4"><CheckCircle className="w-12 h-12" /></div>
                  <h3 className="text-2xl text-white font-bold">Message Transmitted.</h3>
                  <button onClick={() => setFormState('idle')} className="text-cyan-400 hover:underline mt-4">Send another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                  <div className="space-y-2"><label className="text-cyan-400 block">$ enter_name</label><input required type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 p-2 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/20" /></div>
                  <div className="space-y-2"><label className="text-cyan-400 block">$ enter_email</label><input required type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-white/10 p-2 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/20" /></div>
                  <div className="space-y-2"><label className="text-cyan-400 block">$ write_message</label><textarea required rows={3} placeholder="// Let's build something great..." className="w-full bg-transparent border-b border-white/10 p-2 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/20 resize-none" /></div>
                  <button disabled={formState === 'sending'} type="submit" className="group flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mt-8">{formState === 'sending' ? (<> <span className="animate-spin">/</span> Uploading...</>) : (<> <span className="text-white/50">{'>'}</span> execute_send <span className="w-2.5 h-4 bg-green-400 animate-pulse inline-block ml-1" /></>)}</button>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="mt-20 flex justify-center gap-12">
            <div className="flex flex-col items-center gap-2 group cursor-pointer"><div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:border-cyan-500/50 transition-colors"><Mail className="w-6 h-6 text-white" /></div><span className="text-xs font-mono text-gray-400">yonas@example.com</span></div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer"><div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:border-cyan-500/50 transition-colors"><MapPin className="w-6 h-6 text-white" /></div><span className="text-xs font-mono text-gray-400">Adama, Ethiopia</span></div>
          </div>
          <p className="mt-24 text-center text-xs text-white/20 font-mono">© 2026 Yonas Zekarias. System Stable.</p>
        </RevealOnScroll>
      </div>
    </section>
  );
};