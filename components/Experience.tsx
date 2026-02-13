"use client";
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Eaglion System Technology",
    period: "2024", 
    desc: "Collaborated on enterprise-scale system architectures. Optimized frontend performance for high-traffic dashboards and integrated RESTful APIs for real-time data visualization.",
    tags: ["React", "Redux", "System Design"]
  },
  {
    id: 2,
    role: "Full Stack Intern",
    company: "KTS",
    period: "2023", 
    desc: "Developed responsive web modules using Next.js. Assisted in backend database schema design and implemented secure authentication flows for client applications.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-[#0c0c0c] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-white mb-16 flex items-center gap-4">
            <span className="w-2 h-12 bg-cyan-500 rounded-full" /> Career History
          </h2>
        </RevealOnScroll>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0c0c0c] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-cyan-500 transition-colors">
                <Briefcase className="w-4 h-4 text-white/50 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">{job.role}</h3>
                  <span className="text-cyan-400 text-xs font-mono bg-cyan-900/20 px-2 py-1 rounded border border-cyan-500/20 mt-2 sm:mt-0 w-fit">{job.period}</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                  <span className="w-1 h-1 rounded-full bg-white/50" />
                  <span className="font-semibold text-white/90">{job.company}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-white/40 bg-white/5 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};