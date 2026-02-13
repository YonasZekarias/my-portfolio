"use client";
import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xs">YZ</div>
          <span className="font-bold text-white tracking-tight hidden md:block">Yonas Zekarias</span>
        </div>
        
        <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map(link => (
                <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-white/60 hover:text-cyan-400 transition-colors">{link.name}</a>
                </li>
            ))}
            </ul>
            
            {/* CV Download Button in Nav */}
            <a 
                href="/resume.pdf" 
                target="_blank" 
                className="flex items-center gap-2 text-xs font-mono text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 rounded hover:bg-cyan-500/20 transition-all"
            >
                <FileText className="w-3 h-3" /> CV
            </a>
        </div>
      </div>
    </nav>
  );
};