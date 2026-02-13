"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Offline } from '@/components/Offline';
import { Contact } from '@/components/Contact';
import { BootLoader } from '@/components/BootLoader';
import { CustomCursor } from '@/components/CustomCursor';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <BootLoader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-background selection:bg-cyan-500/30 selection:text-cyan-50 overflow-x-hidden cursor-none">
          {/* cursor-none hides the default system cursor so our custom one shines */}
          
          <CustomCursor />
          <Navbar />
          
          {/* Add data-cursor attributes to sections to trigger changes */}
          <div data-cursor="terminal">
            <Hero />
          </div>
          
          <Experience />
          <Skills />
          
          <div data-cursor="view">
            <Projects />
          </div>
          
          <div data-cursor="football">
            <Offline />
          </div>
          
          <div data-cursor="terminal">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}