"use client";
import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight, Github } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const PROJECTS = [
  { 
    id: 1, 
    title: "ASTU FOOD Delivery", 
    category: "System Architecture", 
    desc: "A centralized campus logistics platform designed to streamline food ordering for over 5,000 students.", 
    stack: ["Next.js", "Socket.io", "MongoDB"],
    videoSrc: "/astu-demo.mov",
    githubUrl: "https://github.com/YonasAdane/ASTU-food-delivery-system" 
  },
  { 
    id: 2, 
    title: "YExpress Market", 
    category: "E-Commerce Engine", 
    desc: "A comprehensive digital marketplace solution featuring secure payments and inventory management.", 
    stack: ["React", "Redux", "Stripe"],
    videoSrc: "/yexpress-demo.mov",
    githubUrl: "https://github.com/YonasZekarias/YExpress" 
  },
  { 
    id: 3, 
    title: "AI Commit Message Generator", 
    category: "Developer Tool", 
    desc: "A lightweight, AI-powered utility designed to analyze code changes and automatically generate clean, semantic Git commit messages.", 
    stack: ["Next.js", "Express", "AI Integration"],
    videoSrc: "/ai-demo.mov",
    githubUrl: "https://github.com/YonasZekarias/AI-commit-message-generator" 
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-32 bg-slate-900 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-2 h-12 bg-cyan-500 rounded-full" /> Featured Works
          </h2>
        </RevealOnScroll>
        
        <div className="space-y-32">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
            >
              {/* Media Container */}
              <div className="flex-1 min-h-75 bg-white/2 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                {project.videoSrc ? (
                  <>
                    <video 
                      src={project.videoSrc}
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Terminal className="w-20 h-20 text-white/10 group-hover:text-cyan-500/50 transition-colors duration-500 transform group-hover:scale-110" />
                    </div>
                  </>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">{project.category}</span>
                  <div className="h-px bg-white/10 flex-1" />
                </div>
                <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{project.desc}</p>
                <div className="flex gap-3 flex-wrap">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-black/40 rounded-full text-xs text-white/70 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* NEW: GitHub Repo Link */}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit text-white hover:text-cyan-400 transition-colors font-medium mt-4 group"
                >
                  <Github className="w-5 h-5" /> 
                  Source Code 
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};